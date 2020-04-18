import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Videos from 'src/views/Videos'

const VideosPage = (props) => (
  <Layout>
    <SEO title='Videos' />
    <Videos {...props} />
  </Layout>
)

export default VideosPage
