module.exports = {
  siteTitle: 'Joseph Uzoigwe',
  siteDescription:
    'Joseph Uzoigwe is a software developer who loves building things for the web.',
  siteKeywords: 'Joseph Uzoigwe, Joseph, Uzoigwe, Chojipargo, software engineer, web developer',
  siteUrl: 'https://chojipargo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Joseph Uzoigwe',
  location: '',
  email: '',
  github: 'https://github.com/Chojipargo',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Chojipargo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
