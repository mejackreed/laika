/* eslint-disable global-require,import/no-commonjs */
// @ts-check
const typedocFullConfig = require('./typedoc')

const { theme, source, outline, markedOptions, ...typedocConfig } =
  typedocFullConfig

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'apollo-testing-toolkit-link',
  tagline: require('../package.json').description,
  url: 'https://refactored-succotash-231cd326.pages.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zendesk', // Usually your GitHub org/user name.
  projectName: 'apollo-testing-toolkit-link', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'apollo-testing-toolkit-link',
      logo: {
        alt: 'GitHub',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/api/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/zendesk/apollo-testing-toolkit-link',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Zendesk Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zendesk/apollo-testing-toolkit-link/edit/master/docs-meta/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        ...typedocConfig,
        out: 'api',
        sidebar: {
          categoryLabel: 'API reference',
          position: 1,
          fullNames: true,
        },
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],
}
