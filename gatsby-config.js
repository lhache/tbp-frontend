const path = require(`path`)

module.exports = {
  // pathPrefix: 'de',
  siteMetadata: {
    siteUrl: 'https://www.thebetterplay.com',
    title: `The Better Play`,
    subtitle: `Inspiration für gutes Spielzeug`,
    description: `Pädagogisch wertvolle Spielsachen ♥ Phantasie- und kreativitätsfördernd ♥ Jetzt hier finden!`,
    author: `@lhache`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`)
      }
    }, {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Better Play`,
        short_name: `tbp`,
        start_url: `/`,
        background_color: `#2a079b`,
        theme_color: `#2a079b`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      }
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container
              // as this plugin uses this as the base for generating different widths of each
              // image.
              maxWidth: 590
            }
          }
        ]
      }
    }, {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    }, {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-MXZ7F4G",
        includeInDevelopment: true
      }
    }, {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `oMT37Eg4IIq3AUshKfOTxOSWRBBWJETO`,
        devKey: `oMT37Eg4IIq3AUshKfOTxOSWRBBWJETO`,
        // whether you want to include analytics.page() optional; boolean that defaults
        // to true if false, then don't forget to manually add it to your codebase
        // manually!
        trackPage: true
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106940289-1",
        // Puts tracking script in the head instead of the body
        head: true,
        anonymize: true,
        respectDNT: true
      }
    }, {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://cfec07a58fc64becba4d7eed4cce269a@sentry.io/1501815",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        tags: { git_commit: require('git-rev-sync').short() },
        release: require('git-rev-sync').long(),
        enabled: (() => true)()
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:300,400,700:latin']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality To
    // learn more, visit: https://gatsby.app/offline 'gatsby-plugin-offline', make
    //
    //
    //
    // sure to put netlify last in the array
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
  ]
}
