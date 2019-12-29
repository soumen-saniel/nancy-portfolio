const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Nancy Goel',
    description: 'Nancy Goel',
    author: 'Nancy Goel'
  },
  plugins: [
    /**
     * Provides drop-in support for server rendering data added with React Helmet.
     * React Helmet is a component which lets you control your document head
     * using their React component.
     */
    'gatsby-plugin-react-helmet',
    /**
     * A Gatsby source plugin for sourcing data into your
     * Gatsby application from your local filesystem.
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    /**
     * Creates ImageSharp nodes from image types that are supported
     * by the Sharp image processing library and provides fields in
     * their GraphQL types for processing your images in a variety of
     * ways including resizing, cropping, and creating responsive images.
     */
    'gatsby-transformer-sharp',
    /**
     * Exposes several image processing functions built on the Sharp image processing library.
     */
    'gatsby-plugin-sharp',
    /**
     * This plugin enables defining manifest for out web app
     * Helpful in using things like splash screen.
     */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nancy-goel',
        short_name: 'nancy',
        start_url: '/',
        background_color: '#F2F1F0',
        theme_color: '#4EC5D1',
        display: 'Nancy Goel',
        icon: 'src/assets/logoIcon.png'
      }
    },
    /**
     * This plugin installs font files from Google fonts.
     */
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            subsets: ['latin'],
            variants: ['400', '500', '600', '700']
          },
          {
            family: 'Muli',
            subsets: ['latin'],
            variants: ['400', '500', '600', '700']
          }
        ]
      }
    },
    /**
     * This plugin let's us use scss in the project.
     */
    'gatsby-plugin-sass',
    /**
     * This plugin let's us use absolute paths in the JS files.
     */
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src')
      }
    }
  ]
}
