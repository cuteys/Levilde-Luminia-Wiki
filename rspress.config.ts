import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import readingTime from 'rspress-plugin-reading-time';
import i18n from './i18n.json';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Levilde Luminia Wiki',
  description: 'Levilde Luminia Wiki',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    {
      lang: 'en',
      label: i18n.languageLabel.en,
      title: i18n.siteTitle.en,
      description: i18n.siteDescription.en,
    },
    {
      lang: 'zh',
      label: i18n.languageLabel.zh,
      title: i18n.siteTitle.zh,
      description: i18n.siteDescription.zh,
    },
  ],
  themeConfig: {
    locales: [
      {
        lang: 'en',
        label: i18n.languageLabel.en,
        outlineTitle: 'ON THIS Page',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        searchPlaceholderText: 'Search Docs',
        searchNoResultsText: 'No results for',
        searchSuggestedQueryText: 'Please try again with a different keyword',
      },
      {
        lang: 'zh',
        label: i18n.languageLabel.zh,
        outlineTitle: '大纲',
        prevPageText: '上一页',
        nextPageText: '下一页',
        searchPlaceholderText: '搜索文档',
        searchNoResultsText: '未搜索到相关结果',
        searchSuggestedQueryText: '可更换不同的关键字后重试',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
