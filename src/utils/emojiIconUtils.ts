/**
 * Emoji Icon 工具函数
 * 用于随机选择 SVG 图标
 */

// 使用 ?url 后缀，并正确设置类型
const emojiIconModules = import.meta.glob<string>(
  '@/assets/icons/emjioIcon/*.svg',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

const emojiIconPaths = Object.values(emojiIconModules)

/**
 * 根据字符串生成稳定的哈希值
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

/**
 * 根据种子获取随机的 Emoji Icon
 */
export function getRandomEmojiIcon(seed?: string): string {
  if (emojiIconPaths.length === 0) {
    console.warn('No emoji icons found in /assets/icons/emjioIcon/')
    return ''
  }

  if (seed) {
    const hash = hashString(seed)
    const index = hash % emojiIconPaths.length
    return emojiIconPaths[index]
  } else {
    const randomIndex = Math.floor(Math.random() * emojiIconPaths.length)
    return emojiIconPaths[randomIndex]
  }
}

export function getAllEmojiIcons(): string[] {
  return [...emojiIconPaths]
}

export function getEmojiIconCount(): number {
  return emojiIconPaths.length
}