/**
 * Emoji Icon 工具函数
 * 用于随机选择 SVG 图标
 */

// 导入所有 emoji icon SVG 文件
const emojiIconModules = import.meta.glob('@/assets/icons/emjioIcon/*.svg', {
  eager: true,
  import: 'default'
})

// 获取所有 SVG 文件路径数组
const emojiIconPaths = Object.keys(emojiIconModules).map(path => {
  // 将路径转换为可用的资源路径
  return path.replace('@/assets', '/src/assets')
})

/**
 * 根据字符串生成稳定的哈希值（用于确保相同输入得到相同结果）
 * @param str 输入字符串
 * @returns 哈希值
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

/**
 * 根据种子获取随机的 Emoji Icon
 * @param seed 种子字符串（如社团名称），相同种子会返回相同图标
 * @returns SVG 图标路径
 */
export function getRandomEmojiIcon(seed?: string): string {
  if (emojiIconPaths.length === 0) {
    console.warn('No emoji icons found in /assets/icons/emjioIcon/')
    return ''
  }

  if (seed) {
    // 基于种子生成稳定的索引
    const hash = hashString(seed)
    const index = hash % emojiIconPaths.length
    return emojiIconPaths[index]
  } else {
    // 完全随机
    const randomIndex = Math.floor(Math.random() * emojiIconPaths.length)
    return emojiIconPaths[randomIndex]
  }
}

/**
 * 获取所有可用的 Emoji Icon 路径
 * @returns 所有 SVG 图标路径数组
 */
export function getAllEmojiIcons(): string[] {
  return [...emojiIconPaths]
}

/**
 * 获取 Emoji Icon 总数
 * @returns 图标数量
 */
export function getEmojiIconCount(): number {
  return emojiIconPaths.length
}