import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Articles from 'src/views/Articles'

const ArticlesPage = (props) => (
  <Layout {...props}>
    <SEO title='Articles' />
    <Articles {...props} />
  </Layout>
)

export default ArticlesPage
