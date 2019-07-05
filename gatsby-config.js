const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'GeeksCreed',
    author: 'Sasivarnan R',
    description: 'Tech Blog or Geeks and Hobbyists 🤓',
    siteUrl: 'https://geekscreed.com',
    social: {
      twitter: 'g33kscr33d',
      facebook: 'g33kscr33d',
      instagram: 'g33kscr33d',
      github: 'GeeksCreed',
    },
    config: {
      postsPerPage: 10,
      disqus: 'geekscreed',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-theme-ghost-casper',
      options: {},
    },
    ...(process.env.NODE_ENV === 'production'
      ? [
          // {
          //   resolve: 'gatsby-plugin-guess-js',
          //   options: {
          //     // Find the view id in the GA admin in a section labeled "views"
          //     GAViewID: `184855678`,
          //     minimumThreshold: 0.03,
          //     // The "period" for fetching analytic data.
          //     period: {
          //       startDate: new Date('2018-12-1'),
          //       endDate: new Date(),
          //     },
          //   },
          // },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: `UA-129019237-1`,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GeeksCreed Tech Blog`,
        short_name: `GeeksCreed`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(`src/assets/icon.png`),
      },
    },
    `gatsby-plugin-offline`,
  ],
};
