import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <div>
      <h1>About Me</h1>
    </div>

    <div>
      I’m a graduate student in computer science with diverse interests and a
      versatile skill set. I believe that the science of simplicity accompanied
      by intuitive design always creates a sense of comfort to the user. My goal
      as a developer is to use my ideas, code and engineering to improve the
      lives of others.
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMePage
