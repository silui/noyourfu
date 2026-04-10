import type { Language } from '@/contexts/LanguageContext';

export const strings = {
  en: {
    searchTitle: 'What are you craving?',
    menu: 'Menu',
    tabSearch: 'Search',
    tabHome: 'Home',
    tabMap: 'Map',
    homeDescription:
      'This app helps you find gluten-free and allergy-friendly restaurants in Taiwan.',
    homeCredit: 'By Edward and Summer',
    dietaryTags: {
      'gluten-free': 'Gluten-Free',
      vegan: 'Vegan',
    } as Record<string, string>,
  },
  zh: {
    searchTitle: '你想吃什麼？',
    menu: '菜單',
    tabSearch: '搜尋',
    tabHome: '首頁',
    tabMap: '地圖',
    homeDescription: '這款應用程式幫助你在台灣找到無麩質及適合過敏體質的餐廳。',
    homeCredit: '由 Edward 與 Summer 製作',
    dietaryTags: {
      'gluten-free': '無麩質',
      vegan: '純素',
    } as Record<string, string>,
  },
} as const satisfies Record<Language, {
  searchTitle: string;
  menu: string;
  tabSearch: string;
  tabHome: string;
  tabMap: string;
  homeDescription: string;
  homeCredit: string;
  dietaryTags: Record<string, string>;
}>;
