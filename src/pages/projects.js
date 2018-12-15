import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectsList />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const ProjectsList = () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        site {
          siteMetadata {
            projects {
              id
              name
              desc
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.site.siteMetadata.projects.map(projectItem => (
          <ProjectItem key={projectItem.id} project={projectItem} />
        ))}
      </>
    )}
  />
)

const ProjectItem = ({ project }) => {
  return (
    <div>
      <a href={project.link}>
        <h3>{project.name}</h3>
      </a>
      <p>{project.desc}</p>
    </div>
  )
}

export default ProjectsPage
