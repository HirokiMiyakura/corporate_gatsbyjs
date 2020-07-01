import React from "react"

// import Header from "./header"
import TopHeader from "./topheader"
import Footer from "./footer"

import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <div>
    <TopHeader />
    {children}
    <Footer />
  </div>
)