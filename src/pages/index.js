import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Landing from 'src/views/Landing'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Landing/>
  </Layout>
)

export default IndexPage
