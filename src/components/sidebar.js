import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiUsers, FiVideo, FiMessageSquare } from "react-icons/fi"
import React from "react"
import "./sidebar.scss"

const Sidebar = () => {
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
    <div className="sidebar">
      <Img
        fluid={image.sharp.fluid}
        alt="Eduardo Eutra"
        className="sidebar-image"
      />
      <h1>Eduardo Eutra</h1>
      <p>Life starts at the end of your comfort zone</p>
      <ul className="sidebar-items">
        <li>
          <Link to="/" activeClassName="currentBar">
            <FiMessageSquare /> Messages
          </Link>
          <ul className="sublinks">
            <li>Chats</li>
            <li>Send Message</li>
          </ul>
        </li>
        <li>
          <Link to="/group" activeClassName="currentBar">
            <FiUsers /> Group
          </Link>
          <ul className="sublinks">
            <li>History</li>
            <li>Create Group</li>
          </ul>
        </li>

        <li>
          <Link to="/video" activeClassName="currentBar">
            <FiVideo /> Video Calls
          </Link>
          <ul className="sublinks">
            <li>History</li>
            <li>Calls</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
