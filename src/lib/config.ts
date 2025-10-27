export const siteConfig = {
  name: 'Footy Labs',
  url: '',
  ogImage: '',
  description:
      'Footy Labs - platform for players, agents and clubs',
  links: {
    signUp: "https://app.footylabs.ai/auth/register"
  },
  navItems: [
    {
      href: '/product',
      label: 'Product',
    },
    {
      href: '/resources',
      label: 'Resources',
    },
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ],
  footerItems: [
    {
      title: "Company",
      navItems: [
        {
          href: '/product',
          label: 'Product',
        },
        {
          href: '/resources',
          label: 'Resources',
        },
        {
          href: '/blog',
          label: 'Blog',
        },
      ]
    },
    {
      title: "Footy Labs for",
      navItems: [
        {
          href: '/product/players',
          label: 'Players',
        },
        {
          href: '/product/agents',
          label: 'Agents',
        },
        {
          href: '/product/Clubs',
          label: 'Clubs',
        },
      ]
    },
    {
      title: "Socials",
      navItems: [
        {
          href: 'https://www.instagram.com/footylabs_official/',
          label: 'Instagram',
        },
        {
          href: 'https://www.linkedin.com/company/footylabs/',
          label: 'Linkedin',
        },
        {
          href: 'https://www.facebook.com/people/Footy-Labs/61575324307648/',
          label: 'Facebook',
        },
      ]
    },

  ]
};

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};