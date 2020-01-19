import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Home from 'src/views/Home'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Home/>
  </Layout>
)

export default IndexPage