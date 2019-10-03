import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import {
  FiUsers,
  FiMusic,
  FiVideo,
  FiMessageSquare,
  FiChevronDown,
  FiBell,
  FiInfo,
} from "react-icons/fi"
import "./header.scss"

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "eduardo-dutra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <nav>
        <Link to="/" className="nav-start">
          iTalk
        </Link>
        <ul className="nav-center">
          <li>
            <Link to="/group" activeClassName="active">
              <FiUsers /> Group
            </Link>
          </li>
          <li>
            <Link to="/" activeClassName="active">
              <FiMessageSquare /> Messages
            </Link>
          </li>
          <li>
            <Link to="/video" activeClassName="active">
              <FiVideo /> Video Calls
            </Link>
          </li>
        </ul>
        <ul className="nav-end">
          <li>
            <FiInfo />
          </li>
          <li>
            <FiBell />
          </li>
          <li>
            <Img
              fluid={image.sharp.fluid}
              alt="Eduardo Eutra"
              className="nav-userprofile"
            />
          </li>
          <li>
            Eduardo Eutra <FiChevronDown />
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
