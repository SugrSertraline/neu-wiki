// src/services/SearchService.ts

import type { Page, Section, SubSection, Content, SiteContributor, Competition, ClubProps, PhotoAlbumItem, Problem } from '@/types/interface';
import { getAllPageNames, loadPageData } from './PageService';

// 定义清晰的搜索结果类型
export interface SearchResultItem {
  pageTitle: string;
  pageName: string;
  sectionTitle?: string;
  subSectionTitle?: string;
  foundInType: string;
  snippet: string;
}

/**
 * [最终版] 异步执行全站内容搜索
 * @param keyword 搜索关键词
 * @returns Promise<SearchResultItem[]> 搜索结果数组
 */
export async function performFullSearch(keyword: string): Promise<SearchResultItem[]> {
  if (!keyword || keyword.trim() === '') {
    return [];
  }

  try {
    const allPageNames = await getAllPageNames();
    const pageLoadPromises = allPageNames.map(name => loadPageData(name));
    const pageLoadResults = await Promise.allSettled(pageLoadPromises);

    const allPages: Page[] = [];
    pageLoadResults.forEach(result => {
        if (result.status === 'fulfilled' && result.value) {
            allPages.push(result.value);
        } else if (result.status === 'rejected') {
            console.warn('一个页面加载失败:', result.reason);
        }
    });

    const results: SearchResultItem[] = [];
    const regex = new RegExp(keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');

    allPages.forEach(page => {
      if (page) {
        searchInPage(page, regex, results);
      }
    });

    return results;

  } catch (error) {
    console.error('全站搜索失败:', error);
    return [];
  }
}

// ===================================================================
//                        辅助搜索函数
// ===================================================================

/**
 * 在单个 Page 对象中进行搜索
 */
function searchInPage(page: Page, regex: RegExp, results: SearchResultItem[]) {
  searchInString(page.title, '页面标题', page, regex, results);
  if (page.description) {
    searchInString(page.description, '页面描述', page, regex, results);
  }

  page.sections.forEach((section: Section) => {
    if (section.title) {
      searchInString(section.title, '章节标题', page, regex, results, section);
    }
    section.subsections.forEach((subsection: SubSection) => {
      if (subsection.title) {
        searchInString(subsection.title, '子章节标题', page, regex, results, section, subsection);
      }
      subsection.contents.forEach((content: Content) => {
        searchInContent(content, page, section, subsection, regex, results);
      });
    });
  });
}

/**
 * 根据 Content 类型分发搜索 (已补全)
 */
function searchInContent(
  content: Content,
  page: Page,
  section: Section,
  subsection: SubSection,
  regex: RegExp,
  results: SearchResultItem[]
) {
  // 这个 switch 语句保持不变，它已经根据 interface 被完整地实现了
  switch (content.type) {
    case 'NWDescription':
      searchInString(content.text, '描述文本', page, regex, results, section, subsection);
      break;
    case 'NWImage':
      // 仍然不搜索图片 src
      break;
    case 'NWList':
      content.data.forEach((item: string) => {
        searchInString(item, '列表项', page, regex, results, section, subsection);
      });
      break;
    case 'NWTips':
      searchInString(content.title, '提示标题', page, regex, results, section, subsection);
      searchInString(content.data, '提示内容', page, regex, results, section, subsection);
      break;
    case 'NWPersonalIntro':
      searchInString(content.name, '个人简介-姓名', page, regex, results, section, subsection);
      searchInString(content.introduction, '个人简介-介绍', page, regex, results, section, subsection);
      searchInString(content.college, '个人简介-学院', page, regex, results, section, subsection);
      searchInString(content.grade, '个人简介-年级', page, regex, results, section, subsection);
      searchInString(content.major, '个人简介-专业', page, regex, results, section, subsection);
      searchInString(content.graduation, '个人简介-毕业去向', page, regex, results, section, subsection);
      (content.achievements || []).forEach((achievement: string) => {
        searchInString(achievement, '个人简介-成就', page, regex, results, section, subsection);
      });
      break;
    case 'NWDialogue':
        searchInString(content.q, '问答-问题', page, regex, results, section, subsection);
        searchInString(content.a, '问答-回答', page, regex, results, section, subsection);
        break;
    case 'NWMotto':
        searchInString(content.message, '格言-内容', page, regex, results, section, subsection);
        searchInString(content.author, '格言-作者', page, regex, results, section, subsection);
        break;
    case 'NWProblemsRank':
        content.problems.forEach((problem: Problem) => {
            searchInString(problem.description, '问题排序-描述', page, regex, results, section, subsection);
        });
        break;
    case 'NWSiteContributors':
        content.site_sitecontributors.forEach((contributor: SiteContributor) => {
            searchInString(contributor.username, '贡献者-用户名', page, regex, results, section, subsection);
            searchInString(contributor.contributionType, '贡献者-类型', page, regex, results, section, subsection);
            searchInString(contributor.contribution, '贡献者-贡献', page, regex, results, section, subsection);
            searchInString(contributor.bio, '贡献者-简介', page, regex, results, section, subsection);
        });
        break;
    case 'NWCompetition':
        const comp = content.competition;
        searchInString(comp.name, '竞赛-名称', page, regex, results, section, subsection);
        searchInString(comp.description, '竞赛-描述', page, regex, results, section, subsection);
        (comp.suitableColleges || []).forEach(college => {
            searchInString(college, '竞赛-适合学院', page, regex, results, section, subsection);
        });
        (comp.tags || []).forEach(tag => {
            searchInString(tag, '竞赛-标签', page, regex, results, section, subsection);
        });
        break;
    case 'NWClubIntro':
        const club = content.club;
        searchInString(club.name, '社团-名称', page, regex, results, section, subsection);
        searchInString(club.description, '社团-描述', page, regex, results, section, subsection);
        searchInString(club.qqGroup, '社团-QQ群', page, regex, results, section, subsection);
        break;
    case 'NWPhotoAlbum':
        content.photos.forEach((photo: PhotoAlbumItem) => {
            searchInString(photo.alt, '相册-图片描述', page, regex, results, section, subsection);
        });
        break;
    case 'NWEquation':
        searchInString(content.equation, '公式', page, regex, results, section, subsection);
        break;
    case 'NWTable':
        searchInString(content.title, '表格-标题', page, regex, results, section, subsection);
        content.data.forEach(row => {
            row.forEach(cell => {
                searchInString(cell, '表格-单元格', page, regex, results, section, subsection);
            });
        });
        break;
    default:
      break;
  }
}

/**
 * 在字符串中执行正则匹配并生成结果片段
 */
function searchInString(
  text: string | undefined | String,
  foundInType: string,
  page: Page,
  regex: RegExp,
  results: SearchResultItem[],
  section?: Section,
  subsection?: SubSection
) {
  const textStr = text?.toString();
  if (!textStr) return;

  // [逻辑调整] 改回使用 .match() 来匹配第一个结果，与你的原始代码逻辑保持一致。
  const match = textStr.match(regex);

  if (match && match.index !== undefined) {
    // [核心BUG修复] 错误的页面级去重逻辑已被移除。
    
    const contextRadius = 30;
    const startIdx = Math.max(0, match.index - contextRadius);
    const endIdx = Math.min(textStr.length, match.index + match[0].length + contextRadius);
    
    let snippet = textStr.slice(startIdx, endIdx);
    // 高亮片段中的关键词
    snippet = snippet.replace(regex, (m) => `<strong class="text-red-500">${m}</strong>`);
    
    // 添加省略号
    if(startIdx > 0) snippet = "..." + snippet;
    if(endIdx < textStr.length) snippet = snippet + "...";

    results.push({
      pageTitle: page.title,
      pageName: page.name,
      sectionTitle: section?.title,
      subSectionTitle: subsection?.title,
      foundInType,
      snippet,
    });
  }
}