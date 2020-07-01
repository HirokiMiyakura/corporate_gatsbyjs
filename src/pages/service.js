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
        pageimg={data.service.childImageSharp.original.src}
        pageimgw={data.service.childImageSharp.original.width}
        pageimgh={data.service.childImageSharp.original.height}
      />
      
      <div className="eyecatch">
        <figure>
          <Img fluid={data.service.childImageSharp.fluid} alt="ブルーベリー＆ヨーグルト" />
          {/* <Img fluid={data.service1.childImageSharp.fluid} alt="" /> */}
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">サービス</h1>
          <aside className="info">
            <div className="subtitle">
              <FontAwesomeIcon icon={faUtensils} />
              SERVICES WE OFFER.
            </div>
          </aside>
          <div className="postbody">
            <h2><FontAwesomeIcon icon={faCheckSquare} />MARKETING</h2>
            <h3 className="policyList">現状の調査・解析</h3>
            <p>グーグルアナリティクスを用いて「サイトを訪れた人々の解析」、グーグルサーチコンソールを用いて「サイトに訪れるかもしれない人々の解析」を行います。<br/>
広告効果の検証などもこの段階で行い、現状の把握に努めます。</p>
            <h3 className="policyList">マーケティング戦略の立案・実行</h3>
            <p>ペルソナ、ポジショニングの策定・定義をいたします。<br/>
ターゲッティングに基づき、適切で効率的な(CPCの低い)広告戦略を実行いたします。</p>
            <h3 className="policyList">結果の調査・解析</h3>
            <p>実際の、CT / CTR / CPC / CV / CVR / CPA、などを細かくチェックします。<br/>
効果測定の数値と目標数値に乖離が見られる場合、予算配分の見直しや広告クリエイティブの改善方針を決定します。</p>
            <h3 className="policyList">マーケティング戦略の再立案・再実行</h3>
            <p>結果の調査・解析に基づき、予算配分の見直しや広告クリエイティブの改善を行います。<br/>
場合によっては、マーケティング戦略自体を見直す場合もございます。</p>

            
            <h2><FontAwesomeIcon icon={faCheckSquare} />CREATIVE</h2>
            <h3 className="policyList">ホームページ制作</h3>
            <p>コーポレートサイト・サービスサイト・ECサイトなどを制作いたします。<br/>
従来のような、メタ情報や単語数などの小手先のテクニックは近年効果が薄れてきております。<br/>
サイトの制作をゴールにするのではなく、サイトを制作することでどんな価値が産まれるのかにフォーカスを当てた取り組みをいたします。</p>
            <h3 className="policyList">LP(ランディングページ)制作</h3>
            <p>LP（ランディングページ）を制作いたします。<br/>
過不足のないセクションの選定。クリック率をあげるためのコンバージョン導線。<br/>
LPO（ランディングページ最適化）のお手伝いも行なっております。</p>
            <h3 className="policyList">WEBライティング</h3>
            <p>「コンテンツが命」、といっても過言ではない近年の検索エンジン対策。<br/>
毎月500本以上のアーティクルを、数年間にわたり供給してきた弊社ならではのノウハウを活用いたします。</p>
            <h3 className="policyList">バナー・ロゴなどのクリエイティブ制作</h3>
            <p>広告をうったものの、なかなかCTR（クリック率）が上がらないケースは少なくありません。<br/>
あなたのペルソナ・ポジショニングに応じた最適なクリエイティブを作成いたします。</p>

          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    service: file(relativePath: { eq: "service-main.png" }) {
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
