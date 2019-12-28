const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    repo: 'https://github.com/soumen-saniel/nancy-portfolio.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
