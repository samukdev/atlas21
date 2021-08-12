export default () => ({
  isDrawerOpen: false,
  socialLinks: [
    {
      label: '/samukdev',
      icon: 'fab fa-github',
      link: 'https://github.com/samukdev',
      order: 2,
    },
    {
      label: '/samukdev',
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/samukdev',
      order: 1,
    },
  ],
  anchors: [
    {
      selector: '#projetos',
      labelKey: 'header.items.projects',
      order: 2,
    },
    {
      selector: '#home',
      labelKey: 'header.items.home',
      order: 1,
    },
    {
      selector: '#skills',
      labelKey: 'header.items.skills',
      order: 3,
    },
    {
      selector: '#contato',
      labelKey: 'header.items.contactme',
      order: 4,
    },
  ],
});
