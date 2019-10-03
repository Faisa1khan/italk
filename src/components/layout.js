/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Sidebar from "./sidebar"
import Chat from "./chat"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Chat />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
