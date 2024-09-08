// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Abrish-mokie', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Eat-N-Split',
          description:
            'A straightforward React application for splitting costs among friends, using the useState hook to manage and update the shared expenses. Users can add expenses, allocate costs among friends, and see real-time calculations of each person’s share, making it easy to keep track of group spending and settle up. Ideal for those learning React and state management.',
          imageUrl:
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💰</text></svg>',
          link: 'https://eat-n-split.abrishmokie.com',
        },

        {
          title: 'React-todo',
          description:
            'A simple React to-do list application that utilizes the useState hook for managing tasks. Users can add, remove, and mark tasks as complete, with real-time updates to the task list using React’s state management. Perfect for beginners learning React and state handling.',
          imageUrl:
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☑️</text></svg>',
          link: 'https://react-todo.abrishmokie.com',
        },
        {
          title: 'Pizzeria',
          description:
            'A Vite-powered React application that integrates react-router-dom for client-side routing and react-redux for state management, connecting to a backend API for dynamic data. Tailwind CSS is used for responsive and modern styling, providing a streamlined development experience with fast build times and a scalable architecture. Ideal for building performant, full-stack web applications with clean design and robust state management.',
          imageUrl:
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>',
          link: 'https://pizza-app.abrishmokie.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Abraham Afewerki',
    description:
      'I’m Abraham Afewerki, a passionate software developer. I enjoy creating innovative software solutions, exploring new technologies, and bringing unique ideas',
    imageURL: 'https://github.com/Abrish-mokie.png',
  },
  social: {
    linkedin: 'abrish-mokie',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.abrishmokie.com',
    phone: '',
    email: 'abrish.mokie@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1OCeskuANQtuk7SCd9Zk3c8ntOakoZ1Vj/edit?usp=sharing&ouid=105875475531372113910&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'dart',
    'JavaScript',
    'React.js',
    'MySQL',
    'Mongodb',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Styled components',
    'Springboot',
    'Arduino',
    'HTML5',
    'Micro-services',
    'Flutter',
    'Agile development',
    'Click-up',
    'AWS',
    'IP networking',
    'VPN',
  ],
  experiences: [
    {
      company: "Dickey's Barbecue",
      position: 'Network configuration assistant',
      from: 'March 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Kabbee',
      position: 'Software developer backend',
      from: 'June 2023',
      to: 'July 2024',
      companyLink:
        'https://play.google.com/store/apps/details?id=org.kabbee.kabbeeplus&pcampaignid=web_share',
    },
    {
      company: 'Aurora',
      position: 'Software developer backend',
      from: 'July 2022',
      to: 'March 2023',
      companyLink: '',
    },
    {
      company: 'Zayed University',
      position: 'Help Desk',
      from: 'January 2022',
      to: 'June 2022',
      companyLink: 'https://zu.ac.ae',
    },
    {
      company: 'Zayed University',
      position: 'Teacher assistant',
      from: 'December 2020',
      to: 'December 2021',
      companyLink: 'https://zu.ac.ae',
    },
    {
      company: 'Delta Enterprise',
      position: 'Software Developer',
      from: 'January 2015',
      to: 'November 2018',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Blockchain: Beyond the Basics',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'July 6, 2021',
      link: 'https://www.linkedin.com/learning/certificates/7fd0fc12a0691c772501002fd1c5e0297ac5ac434c1e3195c144188fb4b6d378',
    },
    {
      name: 'Legacy JavaScript Algorithms and DAta Structures',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'November 16, 2023',
      link: 'https://www.freecodecamp.org/certification/Abrish_mokie/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Learn to design websites with Figma, build with Webflow, and make a living freelancing',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'June 14, 2024',
      link: 'https://www.udemy.com/certificate/UC-2c600572-e407-4aa6-a0c7-72d49fd21e0e/',
    },
    {
      name: 'A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'March 20, 2024',
      link: 'https://www.udemy.com/certificate/UC-fe44ee84-9283-46ff-b8d6-8f02609ef2da/',
    },
  ],
  // educations: [
  //   {
  //     institution: 'Zayed University',
  //     degree: 'Degree',
  //     from: '2019',
  //     to: '2022',
  //   },
  // ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
