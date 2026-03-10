export type Language = 'en' | 'pl'

export const texts = {
  en: {
    welcome: 'Welcome to 19-18-8-103! — Your one-stop hub for all our apps and services.',
    accountDesc: 'Your account',
    directoryDesc: 'People directory',
    refuteDesc: 'Refute false sources',
    tendersDesc: 'AI-powered tenders',
    docsDesc: 'Docs, guides, and terms',
  },
  pl: {
    welcome: 'Witaj w 19-18-8-103! — Twoje centrum wszystkich naszych aplikacji i usług.',
    accountDesc: 'Twoje konto',
    directoryDesc: 'Katalog osób',
    refuteDesc: 'Obalaj fałszywe źródła',
    tendersDesc: 'Mini przetargi wspierane AI',
    docsDesc: 'Dokumenty, poradniki i regulaminy',
  },
} satisfies Record<Language, Record<string, string>>

export type TextKey = keyof typeof texts.en