import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Stories from 'src/views/Stories'

const StoriesPage = (props) => (
  <Layout {...props}>
    <SEO title='Stories' />
    <Stories {...props} />
  </Layout>
)

export default StoriesPage
