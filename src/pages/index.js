import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import './home.css'
import { withPrefix } from 'gatsby'

import img from '../images/profile.png'

const IndexPage = () => (
  <div className="container">
    <SEO title="Jayanth Kanugo" keywords={['gatsby', 'application', 'react']} />
    <Home />
  </div>
)

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <div className="home-img">
        <img src={img} alt="Profile Image" />
      </div>
      <div className="home-name">
        <h1>Jayanth Kanugo</h1>
      </div>
      <div className="home-desc">
        <div className="desc-1">
          <h3>Frontend Web Developer</h3>
        </div>
        <div className="desc-2">
          <h3>Bibliophile</h3>
        </div>
        <div className="desc-3">
          <h3>Activist</h3>
        </div>
      </div>
      <HomeLinks />
    </div>
  </div>
)

const HomeLinks = () => {
  return (
    <div className="home-links">
      <div className="home-about-me">
        <Link to="/about-me/">About Me</Link>
      </div>
      <div className="home-projects">
        <Link to="/projects/">Projects</Link>
      </div>
      <div className="home-resume">
        <a href={withPrefix('/files/Resume.pdf')}>Resume</a>
      </div>
      {/* <div className="home-travel-log">
        <Link to="/travel-log">Travel Log</Link>
      </div> */}
    </div>
  )
}

export default IndexPage
