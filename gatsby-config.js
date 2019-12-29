module.exports = {
  siteMetadata: {
    title: 'Nancy Goel',
    description: 'Nancy Goel',
    author: 'Nancy Goel'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nancy-goel',
        short_name: 'nancy',
        start_url: '/',
        background_color: '#F2F1F0',
        theme_color: '#4EC5D1',
        display: 'Nancy Goel',
        icon: 'src/assets/logo.png'
      }
    },
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
    'gatsby-plugin-sass'
  ]
}
