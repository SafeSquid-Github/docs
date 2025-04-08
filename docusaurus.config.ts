import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SafeSquid SWG Documentation',
  tagline: 'Search our knowledge base',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://docsnew.safesquid.com'
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SafeSquid-Github', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
        // {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Developed and maintained by SafeSquid Labs, a strategic business unit of Office Efficiencies (INDIA) Private Limited. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // Application ID provided by Algolia
      appId: 'VDAYH8QLO8',
      // Public API key
      apiKey: '1ded24cda08d39c76408bbc739a83647',
      indexName: 'safesquid',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'docs\\.safesquid\\.com|help\\.safesquid\\.com',
      // Optional: Replace parts of the item URLs from Algolia search results
      replaceSearchResultPathname: {
        from: '/docs/', // or any other path
        to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      placeholder: 'Search documentation',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;