import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Software Architecture',
  description: 'Software Architecture in the AI Era',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Recommend', link: '/recommend' },
      { text: 'Tooling', link: '/tooling/index' },
      { text: 'Patterns', link: '/patterns/index' },
    ],

    sidebar: [
      {
        text: '架构',
        items: [
          {
            text: '软件架构编年史',
            link: '/architecture/chronicles',
          },
          {
            text: '洋葱架构',
            link: '/architecture/onion',
          },
          {
            text: 'The Clean Architecture',
            link: '/architecture/clean-architecture',
          },
        ],
      },
      {
        text: '领域驱动设计',
        items: [
          {
            text: '明确的架构',
            link: '/ddd/explicit-architecture',
          },
          {
            text: '领域驱动六边形',
            link: '/ddd/domain-driven-hexagon',
          },
        ],
      },
      {
        text: '工具',
        items: [
          { text: 'C4 Model', link: '/tooling/c4' },
          { text: 'Event Storming', link: '/tooling/event-storming-puml' },
          { text: 'C4 Builder', link: '/tooling/c4-builder' },
          { text: 'puml-for-Markdown', link: '/tooling/puml-for-markdown' },
          { text: 'PlantUML', link: '/tooling/plantuml' },
          { text: 'Bpmn.io', link: '/tooling/bpmn-io' },
          { text: 'egon.io', link: '/tooling/egon-io' },
        ],
      },
      {
        text: '实践',
        items: [
          {
            text: '参考项目',
            link: '/patterns/index',
          },
          {
            text: 'typescript-ddd-example',
            link: '/patterns/typescript-ddd-example',
          },
          {
            text: 'nestjs-ddd',
            link: '/patterns/nestjs-ddd',
          },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Recommend', link: '/recommend' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
