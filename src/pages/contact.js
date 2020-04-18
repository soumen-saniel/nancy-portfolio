import React from 'react'
// Components
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
// Views
import Contact from 'src/views/Contact'

const ContactPage = (props) => (
  <Layout>
    <SEO title='Contact' />
    <Contact {...props} />
  </Layout>
)

export default ContactPage
