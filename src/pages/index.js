import React from "react"
import { graphql } from "gatsby"
// import Particles from 'react-particles-js';
import SimpleSlider from "../components/works"
import Img from "gatsby-image"
import Layout from "../components/layout"

import SEO from "../components/seo"

export default function Home({ data }) {
  return  (
    <Layout>
      <SEO />
      <section className="food">
        <div className="container">
          <h2 className="bar">SERVICE</h2>
          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.service1.childImageSharp.fluid} alt="" />
              </figure>
              <h3>ホームページ制作</h3>
              <p>HOME PAGE</p>
              <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service2.childImageSharp.fluid} alt="" />
              </figure>
              <h3>ウェブアプリケーション開発</h3>
              <p>WEB DEVELOPMENT</p>
              <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service3.childImageSharp.fluid} alt="" />
              </figure>
              <h3>スマホアプリ開発</h3>
              <p>SMARTPHONE DEVELOPMENT</p>
              <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
            </div>
          </div>

          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.service4.childImageSharp.fluid} alt="" />
              </figure>
              <h3>SEO</h3>
              <p>SEARCH ENGINE OPTIMIZATION</p>
              <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service5.childImageSharp.fluid} alt="" />
              </figure>
              <h3>SEM</h3>
              <p>SEARCH ENGINE MARKETING</p>
              <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service6.childImageSharp.fluid} alt="" />
              </figure>
              <h3>その他</h3>
              <p>OTHERS</p>
              <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h2 className="bar">WORKS</h2>
          <SimpleSlider />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    service1: file(relativePath: { eq: "service1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    service2: file(relativePath: { eq: "service2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    service3: file(relativePath: { eq: "service3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    service4: file(relativePath: { eq: "service4.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    service5: file(relativePath: { eq: "service5.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    service6: file(relativePath: { eq: "service6.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
