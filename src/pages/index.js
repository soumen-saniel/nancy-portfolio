import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Home from 'src/views/Home'

const IndexPage = (props) => (
  <Layout {...props}>
    <SEO title='Home' />
    <Home {...props} />
  </Layout>
)

export default IndexPage
