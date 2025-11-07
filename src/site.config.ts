import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Sr Lang',
  /** Will be used in index page & copyright declaration */
  author: 'Sr Lang',
  /** Description metadata for your website. Can be used in page metadata. */
  description: 'a language written just for me',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/language/favicon/favicon.ico',
  /** Specify the default language for this site. */
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: 'src/assets/avatar.webp',
    alt: 'Avatar'
  },

  // === Global configuration ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Blog', link: '/language/blog' },
      { title: 'Docs', link: '/language/docs' },
      { title: 'Libraries', link: '/language/libraries' },
      // { title: 'Links', link: '/language/links' },
      // { title: 'About', link: '/language/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [
    
    ],
    credits: true,
    social: { github: 'https://github.com/theunnecessarythings/sr-lang' }
  },

  content: {
    externalLinks: {
      content: ' ↗',
      properties: {
        style: 'user-select:none'
      }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 10,
    share: ['x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    // Friend logbook
    logbook: [
      { date: '2025-03-16', content: 'Is there a leakage?' },
      { date: '2025-03-16', content: 'A leakage of what?' },
      { date: '2025-03-16', content: 'I have a full seat of water, like, full of water!' },
      { date: '2025-03-16', content: 'Must be the water.' },
      { date: '2025-03-16', content: "Let's add that to the words of wisdom." }
    ],
    // Yourself link info
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || 'Null' },
      { name: 'Link', val: 'https://astro-pure.js.org/' },
      { name: 'Avatar', val: 'https://astro-pure.js.org/favicon/favicon.ico' }
    ]
  },
  pagefind: true,
  quote: {
    server: 'https://api.quotable.io/quotes/random?maxLength=60',
    target: `(data) => data[0].content || 'Error'`
  },
  typography: {
    class: 'prose text-base text-muted-foreground',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  waline: {
    enable: true,
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    emoji: ['bmoji', 'weibo'],
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/language/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/language/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/language/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/language/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
