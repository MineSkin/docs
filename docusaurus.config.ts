import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
    title: 'MineSkin Docs',
    tagline: 'Minecraft Skin Data Generator',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.mineskin.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'MineSkin', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

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
                docs: {
                    sidebarPath: "./sidebars.ts",
                    docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
                    docRootComponent: "@theme/DocRoot", // add @theme/DocRoot
                    include: ['**/*.md', '**/*.mdx'],
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false
        },
        navbar: {
            title: 'MineSkin Docs',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/docs/category/mineskin-api',
                    label: 'API Reference',
                    position: 'left'
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/MineSkin',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Guides',
                            to: '/docs/intro',
                        },
                        {
                            label: 'API Reference',
                            to: '/docs/category/mineskin-api',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/DeeNu3cUMp',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/MineSkinOrg',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/MineSkin',
                        },
                        {
                            label: 'Website',
                            href: 'https://mineskin.org',
                        },
                        {
                            label: 'Account Manager',
                            href: 'https://account.mineskin.org',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${ new Date().getFullYear() } inventivetalent. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "api", // plugin id
                docsPluginId: "classic", // configured for preset-classic
                config: {
                    mineskin: {
                        showSchemas: false,
                        specPath: "spec/openapi.json",
                        outputDir: "docs/mineskin-api",
                        downloadUrl: "https://api.mineskin.org/v2/openapi.json",
                        sidebarOptions: {
                            groupPathsBy: "tag"
                        },
                    } satisfies OpenApiPlugin.Options,
                }
            },
        ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

export default config;
