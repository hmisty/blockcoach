// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '刘教链',
  //tagline: '微信公众号“刘教链”主理人，加密货币和区块链研究者、投资者，《比特币史话》作者',
  tagline: '微信公众号“刘教链”',
  url: 'https://blockcoach.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'blockcoach', // Usually your GitHub org/user name.
  projectName: 'blockcoach', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
					routeBasePath: '/', // docs-only mode, no '/docs' in URL
          sidebarPath: require.resolve('./sidebars.js'),
					//showLastUpdateTime: true,
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
				blog: false,
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '刘教链',
        logo: {
          alt: 'Blockcoach Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文集',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: '文集',
            items: [
              {
                label: '公众号“刘教链”',
                to: '/intro',
              },
              {
                label: 'Email免费订阅',
                href: 'https://blockcoach.substack.com',
              },
            ],
          },
          {
            title: '读者社群',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/9pGpRgUYPp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hmisty',
              },
            ],
          },
          {
            title: '星球VIP',
            items: [
							{
								label: '知识星球精华帖',
								href: 'https://wx.zsxq.com/dweb2/index/digests/51284441541854',
							},
							{
								label: 'notion知识库',
								href: 'https://www.notion.so/blockcoach',
							},
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} 刘教链`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
