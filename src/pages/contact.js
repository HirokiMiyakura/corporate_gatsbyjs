import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import SEO from "../components/seo"

export default function Home({ data, location }) {
  return  (
    <Layout>
      <SEO 
        pagetitle="株式会社Orfoolについて"
        pagedesc="株式会社Orfoolの概要説明ページです。"
        pagepath={location.pathname}
        pageimg={data.contact.childImageSharp.original.src}
        pageimgw={data.contact.childImageSharp.original.width}
        pageimgh={data.contact.childImageSharp.original.height}
      />

      <div className="eyecatch">
        <figure>
          <Img fluid={data.contact.childImageSharp.fluid} alt="お問い合わせ" />
          {/* <Img fluid={data.service1.childImageSharp.fluid} alt="" /> */}
        </figure>
      </div>

      <section className="food">
        <div className="container">
          <h2 className="bar">CONTACT</h2>
          <form className="contactForm" name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "contact-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }

  }
`