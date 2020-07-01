import React from "react"
import { graphql } from "gatsby"
// import Particles from 'react-particles-js';
// import SimpleSlider from "../components/works"
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
        pageimg={data.about.childImageSharp.original.src}
        pageimgw={data.about.childImageSharp.original.width}
        pageimgh={data.about.childImageSharp.original.height}
      />
      
      <div className="eyecatch">
        <figure>
          <Img fluid={data.about.childImageSharp.fluid} alt="ブルーベリー＆ヨーグルト" />
          {/* <Img fluid={data.service1.childImageSharp.fluid} alt="" /> */}
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">株式会社Orfoolについて</h1>
          <aside className="info">
            <div className="subtitle">
              <FontAwesomeIcon icon={faUtensils} />
              ABOUT ORFOOL INC.
            </div>
          </aside>
          <div className="postbody">
            {/* <p>体に必要不可欠な食べ物についての情報を発信しているサイトです。「おいしい食材をおいしく食べる」をモットーにしています。特に力を入れているのが、フルーツ、穀物、飲み物の３つです。</p> */}
            <h2><FontAwesomeIcon icon={faCheckSquare} />基本情報</h2>
            <table className="basicInfoTable">
              <tbody>
                <tr>
                <td>社名</td>
                <td>株式会社Orfool(オアフール)</td>
                </tr>
                <tr>
                <td>代表取締役</td>
                <td>宮倉 洋樹</td>
                </tr>
                <tr>
                <td>所在地</td>
                <td>渋谷区道玄坂2-15-1ノア道玄坂418号室</td>
                </tr>
                <tr>
                <td>設立年月日</td>
                <td>2011年6月</td>
                </tr>
              </tbody>
            </table>
            <h2><FontAwesomeIcon icon={faCheckSquare} />大切にしていること</h2>
            <h3 className="policyList">CLIENT FIRST</h3>
            <p>「PVが増えた！売り上げが増えた！でも赤字も増えた。。。」。目的が明確でないウェブ戦略はもうやめましょう。クライアント利益の最大化を常に目指す組織であり続けます。</p>
            <h3 className="policyList">ENJOY MYSELF</h3>
            <p>我々は仕事を通じて、我々自身の喜びをも追求できる組織・人間であろうと努力します。</p>
            <h3 className="policyList">ALWAYS CHANGING</h3>
            <p>変化は面倒です。変化はコストです。しかし、我々は常に変化を受け入れ、変化を続ける組織であり続けます。</p>

            <h2><FontAwesomeIcon icon={faCheckSquare} />メンバー紹介</h2>

            <div className="containerThree">
              <div className="containerThreeItem">
                <Img fluid={data.hmiyakura.childImageSharp.fluid} alt="宮倉洋樹" />
                <h3>宮倉洋樹</h3>
                <h4>代表取締役社長</h4>
                <p>フロントサイドエンジニア券ゴルファー。焼肉が好きで逆目のラフが嫌い。</p>
              </div>
              <div className="containerThreeItem">
                <Img fluid={data.tarai.childImageSharp.fluid} alt="新井崇寛" />
                <h3>新井崇寛</h3>
                <h4>取締役副社長</h4>
                <p>営業兼サッカープレイヤー。この頃あまりフットサルもしていない。</p>
              </div>
              <div className="containerThreeItem">
                <Img fluid={data.dsaito.childImageSharp.fluid} alt="齋藤大地" />
                <h3>齋藤大地</h3>
                <h4>取締役</h4>
                <p>三度の飯よりコーディングが好きなプログラマー。ゴルフの飛距離と体重が飛躍している。</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about-main.png" }) {
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

    hmiyakura: file(relativePath: { eq: "hiroki-miyakura.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tarai: file(relativePath: { eq: "pct01.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dsaito: file(relativePath: { eq: "daichi-saito.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`
