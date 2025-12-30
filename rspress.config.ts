import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: 'docs',
    title: 'React Peel',
    description: 'Create realistic peeling effects in React applications',
    icon: '/logo.png',
    logo: '/logo.png',
    base: '/react-peel/',
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/iqbal-rashed/react-peel',
            },
        ],
        footer: {
            message: 'Released under the MIT License.',
        },
    },
    markdown: {
        showLineNumbers: true,
    },
});
