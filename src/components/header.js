import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import img from '../images/profile.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link to="/">
        {' '}
        <div style={{ margin: 0, display: 'flex', alignContent: 'baseline' }}>
          <img
            style={{
              order: '1',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
            }}
            src={img}
          />
          <h1 style={{ marginLeft: '2%', order: '2' }}>{siteTitle}</h1>
        </div>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
