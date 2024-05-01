import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stratusphere Documentation",
  description: "Documentation for StratusGrid's Stratusphere SaaS Product",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/stratusphere-intro' }
    ],

    sidebar: [
      {
        text: 'Intro',
        items: [
          { text: 'Stratusphere Intro', link: '/stratusphere-intro' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Views',
        items: [
          { text: 'Summary', link: 'views/view-summary.md' },
          { text: 'Analysis', link: 'views/view-analysis.md' },
          { text: 'Findings', link: 'views/view-findings.md' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'API Reference', link: 'api-reference.md' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
