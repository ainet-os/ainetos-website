// @ts-check

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

// Simplified i18n config for AinetOS
const i18nConfig = {
  defaultLocale: 'zh-CN',
  locales: ['zh-CN', 'en'],
  path: 'i18n',
  localeConfigs: {
    'zh-CN': { label: '中文' },
    'en': { label: 'English' },
  },
};

module.exports = {
  title: 'AinetOS 开源社区',
  tagline: '用开源OS连接云、边、端三侧算力，让AI运行无处不在',
  organizationName: 'ainetos',
  projectName: 'ainetos',
  url: 'https://ainetos.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  favicon: 'img/favicon.ico',
  i18n: i18nConfig,
  scripts: ['https://buttons.github.io/buttons.js'],
  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-contributors',
    'docusaurus-plugin-downloads',
    [
      'content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateTime: true,
      },
    ],
    [
      'content-docs',
      {
        id: 'dev',
        path: 'dev',
        routeBasePath: 'dev',
        sidebarPath: require.resolve('./sidebarsDev.js'),
        showLastUpdateTime: true,
      },
    ],
    [
      'content-docs',
      {
        id: 'talks',
        path: 'talks',
        routeBasePath: 'talks',
        sidebarPath: require.resolve('./sidebarsTalk.js'),
        showLastUpdateTime: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  customFields: {
    description: 'AinetOS 是一个面向云边端一体化算力与操作系统技术的开源社区',
  },
  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    announcementBar: {
      id: 'announcementBar',
      content:
        '<a target="_blank" rel="noopener noreferrer" href="/docs/intro">欢迎加入 AinetOS 开源社区！</a>',
      isCloseable: true,
      backgroundColor: '#0ea5e9',
      textColor: '#ffffff',
    },
    // algolia: {
    //   appId: 'B3TG5CBF5H',
    //   apiKey: 'ed054733cb03418e9af25b7beb82c924',
    //   indexName: 'verdaccio',
    //   contextualSearch: true,
    // },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: `AinetOS`,
      logo: {
        alt: 'AinetOS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '文档',
        },
        {
          to: '/projects',
          label: '项目',
          position: 'left',
        },
        {
          to: '/community',
          label: '社区',
          position: 'left',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ainetos',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
            {
              label: 'InfiniteOS',
              to: '/docs/infiniteos/overview',
            },
            {
              label: 'InfiniteUno',
              to: '/docs/infiniteuno/overview',
            },
          ],
        },
        {
          title: '项目',
          items: [
            {
              label: 'InfiniteOS',
              to: '/projects/infiniteos',
            },
            {
              label: 'InfiniteUno',
              to: '/projects/infiniteuno',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ainetos',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '贡献指南',
              to: '/community/contributing',
            },
            {
              label: '行为准则',
              to: '/community/code-of-conduct',
            },
            {
              label: '关于我们',
              to: '/community/about',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ainetos',
            },           
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AinetOS 开源社区. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarCollapsible: true,
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          editUrl: ({ locale, docPath }) => {
            return `https://github.com/ainetos/ainetos/edit/main/website/docs/${docPath}`;
          },
          routeBasePath: 'docs',
          // Enable versioning with 'current' to properly support i18n
          // According to Docusaurus docs, docs plugin always divides content by versions
          // For i18n to work, we need to explicitly enable versioning with 'current'
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current',
              path: 'current',
            },
          },
          // Explicitly include current version for i18n
          includeCurrentVersion: true,
        },
        googleAnalytics: {
          trackingID: 'G-PCYM9FYJZT',
        },
        gtag: {
          trackingID: 'G-PCYM9FYJZT',
        },
        blog: {
          blogTitle: 'AinetOS 社区博客',
          blogDescription: 'AinetOS 开源社区官方博客',
          showReadingTime: true,
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有文章',
          authorsMapPath: 'authors.yml',
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            return `https://github.com/ainetos/ainetos/edit/main/website/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};

