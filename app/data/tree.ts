import type { TreeNode } from '~/types/tree'

export const tree: TreeNode[] = [
    {
        name: 'C:/Users/dev/portfolio',
        path: '/portfolio',
        children: [
            {
                name: 'about.md',
                fileType: 'md',
                path: '/portfolio/about.md',
                url: '/about',
            },
            {
                name: 'projects',
                path: '/portfolio/projects',
                children: [
                    {
                        name: 'neovim-config.md',
                        fileType: 'md',
                        path: '/portfolio/projects/neovim-config.md',
                        url: '/projects/neovim-config',
                    },
                    {
                        name: 'portfolio.vue',
                        fileType: 'vue',
                        path: '/portfolio/projects/portfolio.vue',
                        url: '/projects/portfolio',
                    },
                ],
            },
            {
                name: 'skills.ts',
                fileType: 'ts',
                path: '/portfolio/skills.ts',
                url: '/skills',
            },
            {
                name: 'contact.md',
                fileType: 'md',
                path: '/portfolio/contact.md',
                url: '/contact',
            },
        ],
    },
]
