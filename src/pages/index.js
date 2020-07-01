import React from "react"
import { graphql, Link } from "gatsby"
// import Particles from 'react-particles-js';
// import SimpleSlider from "../components/works"
import Img from "gatsby-image"
import TopLayout from "../components/toplayout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"

export default function Home({ data }) {
  return  (
    <TopLayout>
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
              <p>WordPressやGatsbyJSを用いたモダンで高速なサイトを制作いたします。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service2.childImageSharp.fluid} alt="" />
              </figure>
              <h3>ウェブアプリケーション開発</h3>
              <p>WEB DEVELOPMENT</p>
              <p>Ruby on Railsを用いて、お客様の課題を解決いたします。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service3.childImageSharp.fluid} alt="" />
              </figure>
              <h3>スマホアプリ開発</h3>
              <p>SMARTPHONE DEVELOPMENT</p>
              <p>Flutterを用いて、iPhone・Androidに対応したアプリを制作いたします。</p>
            </div>
          </div>

          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.service4.childImageSharp.fluid} alt="" />
              </figure>
              <h3>SEO</h3>
              <p>SEARCH ENGINE OPTIMIZATION</p>
              <p>近年Googleが重視し始めたサイトの表示速度などにも幅広く対応いたします。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service5.childImageSharp.fluid} alt="" />
              </figure>
              <h3>SEM</h3>
              <p>SEARCH ENGINE MARKETING</p>
              <p>最小の広告費用で最大の広告結果を実現します。</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.service6.childImageSharp.fluid} alt="" />
              </figure>
              <h3>その他</h3>
              <p>OTHERS</p>
              <p>サイトの運営保守やメディア記事の挿入など、その他の業務もご相談ください。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          {/* <h2 className="bar">WORKS</h2> */}
          {/* <SimpleSlider /> */}
          <Portfolio />
        </div>
      </section>

      <section>
      <div className="container">
        <h2 className="bar">RECENT POSTS</h2>
        <div className="posts">
          {data.allContentfulBlogPost.edges.map(( { node } ) => (
            <article className="post" key={node.id}>
            <Link to={`/blog/post/${node.slug}/`}>
              <figure>
                <Img
                  fluid={node.eyecatch.fluid}
                  alt="{node.eyecatch.description}"
                  style={{ height: "100%" }}
                />
              </figure>
              <h3>{node.title}</h3>
            </Link>
          </article>
          ))}
        </div>
      </div>
    </section>
    </TopLayout>
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
    allContentfulBlogPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 4
      ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            fluid(maxWidth: 573) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`
