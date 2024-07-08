import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ashish\'s Blog',
  tagline: 'blog.ashishjob.com',
  favicon: 'img/favicon.ico',
  

  // Set the production url of your site here
  url: 'https://blog.ashishjob.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ashishjob', // Usually your GitHub org/user name.
  projectName: 'blog.ashishjob.com', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/metadata.png',
    navbar: {
      title: 'Ashish\'s Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/panda.png',
        href: '/',
      },
      items: [
        {
          href: 'https://ashishjob.com',
          label: 'Portfolio',
          position: 'right',
        },
        {
          href: 'https://github.com/Ashishjob',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/ashish-job',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ashish Job. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
