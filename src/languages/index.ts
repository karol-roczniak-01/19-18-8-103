import { texts } from './texts'
import type { Language, TextKey } from './texts'

export function getLang(): Language {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/)
  return match?.[1] === 'pl' ? 'pl' : 'en'
}

export function t(key: TextKey): string {
  return texts[getLang()][key]
}