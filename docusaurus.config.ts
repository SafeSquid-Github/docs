import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SafeSquid SWG Documentation',
  tagline: 'Search our knowledge base',
  favicon: 'img/favicon.ico',
  url: 'http://docsnew.safesquid.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'SafeSquid-Github',
  projectName: 'docs',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } as Preset.Options,
    ],
  ],
  themeConfig: {
    image: '@site/static/img/favicon.ico',
    navbar: {
      title: 'SafeSquid SWG',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Developed and maintained by SafeSquid Labs, a strategic business unit of Office Efficiencies (INDIA) Private Limited.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'VDAYH8QLO8',
      apiKey: 'd60fc30e42711815476a72c8b3469240',
      indexName: 'safesquid',
      contextualSearch: false,
      searchPagePath: 'search',
    },
  } as Preset.ThemeConfig,
};

export default config;
