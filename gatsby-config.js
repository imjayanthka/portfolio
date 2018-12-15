module.exports = {
  pathPrefix: `/files`,
  siteMetadata: {
    title: 'Jayanth Kanugo',
    description: 'Frontend web developer, Activist, Bibilophile',
    author: '@gatsbyjs',
    twitter: 'https://twitter.com/imcopypasta',
    github: 'https://github.com/imcopypasta',
    linkedin: 'https://linkedin.com/in/imjayanthka',
    projects: [
      {
        id: '1',
        name: 'noCINV',
        desc:
          'A mobile application to be used under clinical setting to predict the onset of chemotherapy induced nausea and help doctors prescribe medication accordingly. It uses Apple’s ResearchKit framework to deliver a questionnaire and provide a probable outcome based on data decision tree',
        link: 'https://github.com/imjayanthka/noCINV',
      },
      {
        id: '2',
        name: 'TigerAware',
        desc:
          'TigerAware is realtime survey generation, deployment and analysis tool for campus researchers and administrators. TigerAware is built using Firebase as the backend service along with clients based on AngularJs, Swift and Java',
        link: 'https://tigeraware.com/',
      },
      {
        id: '3',
        name: 'simply-do',
        desc:
          'A work in progress repo of learning how to build react-redux todo list application',
        link: 'https://github.com/imjayanthka/simply-do',
      },
      {
        id: '4',
        name: 'HackerRank Solutions',
        desc:
          'A work in progress repo of all my solutions to HackerRank problems',
        link: 'https://github.com/imjayanthka/hackerrank-solutions',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#366693',
        theme_color: '#366693',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-113567584-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 1,
        siteSpeedSampleRate: 10,
        cookieDomain: 'imjayanthka.com',
      },
    },
  ],
}
