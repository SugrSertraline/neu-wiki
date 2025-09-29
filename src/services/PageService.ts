import type { Page, IndexData, PageMeta, MenuConfig } from '@/types/interface';

/**
 * 页面数据服务
 * 负责从JSON文件加载和缓存页面数据
 * 🔄 修改：支持二级菜单结构
 */

// ==================== 缓存管理 ====================

class PageCache {
  private indexCache: IndexData | null = null;
  private pageCache: Map<string, Page> = new Map();

  getIndex(): IndexData | null {
    return this.indexCache;
  }

  setIndex(data: IndexData): void {
    this.indexCache = data;
  }

  getPage(name: string): Page | undefined {
    return this.pageCache.get(name);
  }

  setPage(name: string, data: Page): void {
    this.pageCache.set(name, data);
  }

  clear(): void {
    this.indexCache = null;
    this.pageCache.clear();
  }

  clearPage(name: string): void {
    this.pageCache.delete(name);
  }
}

const cache = new PageCache();

// ==================== 核心服务 ====================

/**
 * 加载页面索引数据
 * @returns 索引数据
 * @throws 如果加载失败则抛出错误
 */
export async function loadPageIndex(): Promise<IndexData> {
  const cached = cache.getIndex();
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch('/pages/index.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data: IndexData = await response.json();
    cache.setIndex(data);
    return data;
  } catch (error) {
    console.error('Failed to load page index:', error);
    throw new Error('无法加载页面索引');
  }
}

/**
 * 加载单个页面数据
 * @param pageName 页面名称
 * @returns 页面数据
 * @throws 如果加载失败则抛出错误
 */
export async function loadPageData(pageName: string): Promise<Page> {
  const cached = cache.getPage(pageName);
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(`/pages/${pageName}.json`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data: Page = await response.json();
    cache.setPage(pageName, data);
    return data;
  } catch (error) {
    console.error(`Failed to load page ${pageName}:`, error);
    throw new Error(`无法加载页面: ${pageName}`);
  }
}

// ==================== 便捷方法 ====================

/**
 * 根据页面名获取页面数据
 * @param pageName 页面名称
 * @returns 页面数据，如果不存在则返回null
 */
export async function getPageByName(pageName?: string): Promise<Page | null> {
  if (!pageName) {
    return null;
  }

  try {
    return await loadPageData(pageName);
  } catch (error) {
    console.error(`Page not found: ${pageName}`, error);
    return null;
  }
}


export async function buildMenuConfig(): Promise<MenuConfig[]> {
  try {
    const indexData = await loadPageIndex();
    
    return indexData.groups.map(group => {
      // 如果有二级分组（subgroups），构建带分组标题的菜单
      if (group.subgroups && group.subgroups.length > 0) {
        // 一级菜单项（可折叠）
        const menuItem: MenuConfig = {
          label: group.title,
          key: group.name,
          children: [],
          type: ''
        };

        // 二级分类作为分组标题（type: 'group'，不可折叠）
        group.subgroups.forEach(subgroup => {
          // 添加分组标题
          menuItem.children!.push({
            type: 'group',
            label: subgroup.title,
            key: subgroup.name,
            children: subgroup.pages.map(page => ({
              label: page.title,
              key: page.name
            }))
          });
        });

        return menuItem;
      } 
      // 否则直接使用页面构建一级菜单（向后兼容）
      else if (group.pages && group.pages.length > 0) {
        return {
          type: 'group',
          label: group.title,
          key: group.name,
          children: group.pages.map(page => ({
            label: page.title,
            key: page.name
          }))
        };
      }

      // 空分组
      return {
        type: 'group',
        label: group.title,
        key: group.name,
        children: []
      };
    });
  } catch (error) {
    console.error('Failed to build menu config:', error);
    return [];
  }
}

/**
 * 🔄 修改：获取页面基本信息（支持二级菜单）
 * @param pageName 页面名称
 * @returns 页面基本信息，如果不存在则返回null
 */
export async function getPageInfo(pageName: string): Promise<PageMeta | null> {
  try {
    const indexData = await loadPageIndex();
    
    for (const group of indexData.groups) {
      // 检查一级菜单中的页面
      if (group.pages) {
        const page = group.pages.find(p => p.name === pageName);
        if (page) {
          return page;
        }
      }
      
      // 检查二级菜单中的页面
      if (group.subgroups) {
        for (const subgroup of group.subgroups) {
          const page = subgroup.pages.find(p => p.name === pageName);
          if (page) {
            return page;
          }
        }
      }
    }
    return null;
  } catch (error) {
    console.error(`Failed to get page info for ${pageName}:`, error);
    return null;
  }
}

/**
 * 🔄 修改：获取所有页面列表（扁平化，支持二级菜单）
 * @returns 页面名称数组
 */
export async function getAllPageNames(): Promise<string[]> {
  try {
    const indexData = await loadPageIndex();
    const allPages: string[] = [];
    
    indexData.groups.forEach(group => {
      // 收集一级菜单中的页面
      if (group.pages) {
        group.pages.forEach(page => {
          allPages.push(page.name);
        });
      }
      
      // 收集二级菜单中的页面
      if (group.subgroups) {
        group.subgroups.forEach(subgroup => {
          subgroup.pages.forEach(page => {
            allPages.push(page.name);
          });
        });
      }
    });
    
    return allPages;
  } catch (error) {
    console.error('Failed to get all page names:', error);
    return [];
  }
}

/**
 * 查找相邻页面
 * @param currentPageName 当前页面名称
 * @param direction 方向：'pre' 上一页，'next' 下一页
 * @returns 相邻页面名称，如果是边界则返回 'start' 或 'end'
 */
export async function findAdjacentPage(
  currentPageName: string,
  direction: 'pre' | 'next' = 'pre'
): Promise<string> {
  try {
    const allPages = await getAllPageNames();
    const currentIndex = allPages.indexOf(currentPageName);

    if (currentIndex === -1) {
      return direction === 'pre' ? 'start' : 'end';
    }

    if (direction === 'pre') {
      return currentIndex === 0 ? 'start' : allPages[currentIndex - 1];
    } else {
      return currentIndex === allPages.length - 1 ? 'end' : allPages[currentIndex + 1];
    }
  } catch (error) {
    console.error('Failed to find adjacent page:', error);
    return direction === 'pre' ? 'start' : 'end';
  }
}

/**
 * 预加载页面（性能优化）
 * @param pageName 页面名称
 */
export async function preloadPage(pageName: string): Promise<void> {
  try {
    await loadPageData(pageName);
  } catch (error) {
    console.warn(`Failed to preload page ${pageName}:`, error);
  }
}

/**
 * 预加载相邻页面（性能优化）
 * @param currentPageName 当前页面名称
 */
export async function preloadAdjacentPages(currentPageName: string): Promise<void> {
  try {
    const [prevPage, nextPage] = await Promise.all([
      findAdjacentPage(currentPageName, 'pre'),
      findAdjacentPage(currentPageName, 'next')
    ]);

    const preloadPromises: Promise<void>[] = [];

    if (prevPage !== 'start') {
      preloadPromises.push(preloadPage(prevPage));
    }

    if (nextPage !== 'end') {
      preloadPromises.push(preloadPage(nextPage));
    }

    await Promise.all(preloadPromises);
  } catch (error) {
    console.warn('Failed to preload adjacent pages:', error);
  }
}

/**
 * 清除所有缓存
 */
export function clearCache(): void {
  cache.clear();
}

/**
 * 清除单个页面缓存
 * @param pageName 页面名称
 */
export function clearPageCache(pageName: string): void {
  cache.clearPage(pageName);
}

/**
 * 检查页面是否存在
 * @param pageName 页面名称
 * @returns 是否存在
 */
export async function pageExists(pageName: string): Promise<boolean> {
  try {
    const allPages = await getAllPageNames();
    return allPages.includes(pageName);
  } catch (error) {
    console.error('Failed to check page existence:', error);
    return false;
  }
}

/**
 * 🔄 修改：获取所有页面的URL列表（支持二级菜单）
 * @returns 页面URL信息数组
 */
export async function getAllPageURLs(): Promise<Array<{ text: string; link: string }>> {
  try {
    const indexData = await loadPageIndex();
    const baseURL = window.location.origin;
    const urls: Array<{ text: string; link: string }> = [];

    indexData.groups.forEach(group => {
      // 收集一级菜单中的页面
      if (group.pages) {
        group.pages.forEach(page => {
          urls.push({
            text: page.title,
            link: `${baseURL}/read/${page.name}`
          });
        });
      }

      // 收集二级菜单中的页面
      if (group.subgroups) {
        group.subgroups.forEach(subgroup => {
          subgroup.pages.forEach(page => {
            urls.push({
              text: page.title,
              link: `${baseURL}/read/${page.name}`
            });
          });
        });
      }
    });

    return urls;
  } catch (error) {
    console.error('Failed to get all page URLs:', error);
    return [];
  }
}