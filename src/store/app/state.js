export default () => ({
  isDrawerOpen: false,
  socialLinks: [
    {
      label: 'GitHub',
      icon: 'fab fa-github',
      link: 'https://github.com/samukdev',
      order: 2,
    },
    {
      label: 'Linkedin',
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/samukdev',
      order: 1,
    },
  ],
  anchors: [
    {
      selector: '#portfolio',
      label: 'Portfólio',
      order: 2,
    },
    {
      selector: '#home',
      label: 'Home',
      order: 1,
    },
    {
      selector: '#skills',
      label: 'Skills',
      order: 3,
    },
    {
      selector: '#contato',
      label: 'Contato',
      order: 4,
    },
  ],
});
