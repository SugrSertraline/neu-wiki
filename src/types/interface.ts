import { NWComponent } from "./enum"

// ==================== 组件内容类型定义 ====================

interface NWDescription {
  type: NWComponent.NWDescription,
  text: string
}

interface NWImage {
  type: NWComponent.NWImage,
  width: number,
  src: string
}

interface NWList {
  type: NWComponent.NWList,
  order: boolean,
  data: string[]
}

interface NWTips {
  type: NWComponent.NWTips,
  title: string,
  case: 'default' | 'info' | 'success' | 'warning' | 'error',
  data: string
}

interface NWDialogue {
  type: NWComponent.NWDialogue,
  q: string,
  a: string
}

interface NWPersonalIntro {
  type: NWComponent.NWPersonalIntro,
  name: string
  avatarUrl: string
  college: string
  grade: string
  major?: string
  graduation: string
  introduction: string
  achievements?: string[]
  qq?: string
  wechat?: string
  github?: string
  email?: string
}

interface NWMotto {
  type: NWComponent.NWMotto,
  message: string,
  author: string
}

export interface Problem {
  description: string
  urgency: number
}

interface NWProblemsRank {
  type: NWComponent.NWProblemsRank
  problems: Problem[]
}

export interface SiteContributor {
  username: string,
  avatar: string,
  contributionType: string,
  contribution: string,
  bio: string,
  qq: string | undefined,
  wechat: string | undefined,
  email: string | undefined
}

interface NWSiteContributors {
  type: NWComponent.NWSiteContributors
  site_sitecontributors: SiteContributor[]
}

export interface Competition {
  name: string
  period: '上旬' | '中旬' | '下旬'
  description: string
  suitableColleges: string[]
  tags: string[]
}

interface NWCompetition {
  type: NWComponent.NWCompetition
  competition: Competition
}

export interface LinkListItem {
  text: string
  link: string
}

export interface NWLinkList {
  type: NWComponent.NWLinkList,
}

export interface ClubProps {
  name: string
  logo: string
  description: string
  qqGroup: string,
  imageUrl: string | undefined
}

interface NWClubIntro {
  type: NWComponent.NWClubIntro,
  club: ClubProps
}

export interface PhotoAlbumItem {
  url: string;
  alt: string;
}

interface NWPhotoAlbum {
  type: NWComponent.NWPhotoAlbum,
  photos: PhotoAlbumItem[]
}

interface NWEquation {
  type: NWComponent.NWEquation,
  equation: String
}

interface NWTable {
  type: NWComponent.NWTable,
  title: String,
  data: String[][]
}

export interface NWDownload {
  type: NWComponent.NWDownload,
  iconUrl: string,
  title: string,
  description: string,
  downloadUrl: string,
  fileName?: string
}

export type Content = NWDescription | NWImage | NWList | NWTips | NWPersonalIntro | NWDialogue | NWProblemsRank | NWMotto | NWSiteContributors | NWCompetition | NWLinkList | NWClubIntro | NWPhotoAlbum | NWEquation | NWTable | NWDownload;

// ==================== 页面结构定义 ====================

export interface SubSection {
  title: string | undefined,
  contents: Content[]
}

export interface Section {
  title: string | undefined,
  subsections: SubSection[]
}

interface PageContributor {
  name: string,
  avatar_url: string
}

/**
 * 页面元数据/基本信息 (用于 index.json)
 * 🔄 修改：移除 last_update，只保留索引必需的信息
 */
export interface PageMeta {
  title: string;
  name: string;
  // last_update 已移除 - 该信息只在完整页面数据(Page)中保留
}

/**
 * 🆕 二级分组结构（可选）
 * 用于在一个大分类下创建子分类
 * 例如："访谈" 分类下的 "保研"、"考研"、"就业" 子分类
 */
export interface IndexSubGroup {
  title: string;      // 子分类标题，如 "保研经验"
  name: string;       // 子分类唯一标识，如 "postgraduate"
  pages: PageMeta[];  // 该子分类下的页面列表
}

/**
 * 索引文件中的分组结构
 * 🔄 修改：支持两种模式
 * 1. 一级菜单模式：直接包含 pages（不使用二级分类）
 * 2. 二级菜单模式：包含 subgroups（使用二级分类）
 */
export interface IndexGroup {
  title: string;
  name: string;
  pages?: PageMeta[];           // 可选：一级菜单模式下的页面列表
  subgroups?: IndexSubGroup[];  // 可选：二级菜单模式下的子分组列表
}

/**
 * 索引文件 (index.json) 的完整数据结构
 */
export interface IndexData {
  groups: IndexGroup[];
}

/**
 * 完整的页面数据结构
 * 包含 last_update 等完整信息
 */
export interface Page {
  title: string,
  last_update: string,      // ✅ 保留在完整页面数据中
  name: string,
  description: string | undefined
  sections: Section[],
  contributors: PageContributor[]
}

export interface Group {
  title: string,
  name: string,
  pages: Page[]
}

/**
 * 🔄 修改：菜单配置支持三层结构
 * - 第一层：分类（group）
 * - 第二层：子分类（subgroup）或直接的页面
 * - 第三层：子分类下的页面
 */
export interface MenuConfig {
  type?: string;
  label: string;
  key: string;
  children?: Array<{
    type?: string;
    label: string;
    key: string;
    children?: Array<{
      label: string;
      key: string;
    }>;
  }>;
}