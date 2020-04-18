import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Blogs from 'src/views/Blogs'

const BlogsPage = (props) => (
  <Layout>
    <SEO title='Blogs' />
    <Blogs {...props} />
  </Layout>
)

export default BlogsPage
