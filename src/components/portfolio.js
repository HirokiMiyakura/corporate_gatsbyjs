import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = props => {
  const data = useStaticQuery(graphql`
    query {
      works1: file(relativePath: { eq: "clean-labo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works2: file(relativePath: { eq: "next.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works3: file(relativePath: { eq: "soctama-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works4: file(relativePath: { eq: "cerebellum-kids.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works5: file(relativePath: { eq: "cinderella_lp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works6: file(relativePath: { eq: "cinderella_time.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works7: file(relativePath: { eq: "tophill-corporate.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works8: file(relativePath: { eq: "seven-tantei.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works9: file(relativePath: { eq: "kenworks.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      works10: file(relativePath: { eq: "always_ssl.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <div>
      <h2 className="bar">Portfolio</h2>
      <Slider {...settings}>
        <div>
          <div className="worksItem">
            <figure>
              <Img fluid={data.works1.childImageSharp.fluid} alt="" />
            </figure>
            <h4>クリーンラボ</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
              <Img fluid={data.works2.childImageSharp.fluid} alt="" />
            </figure>
            <h4>ネクスト株式会社</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works3.childImageSharp.fluid} alt="" />
            </figure>
            <h4>ソクラテスの卵</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works4.childImageSharp.fluid} alt="" />
            </figure>
            <h4>セレベレムトレーニングスクール</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works5.childImageSharp.fluid} alt="" />
            </figure>
            <h4>シンデレラタイムLP</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works6.childImageSharp.fluid} alt="" />
            </figure>
            <h4>シンデレラタイム</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works7.childImageSharp.fluid} alt="" />
            </figure>
            <h4>株式会社TOP HILL</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works8.childImageSharp.fluid} alt="" />
            </figure>
            <h4>セブン探偵社</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works9.childImageSharp.fluid} alt="" />
            </figure>
            <h4>ケンワークス</h4>
          </div>
        </div>
        <div>
          <div className="worksItem">
            <figure>
            <Img fluid={data.works10.childImageSharp.fluid} alt="" />
            </figure>
            <h4>Always SSL</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Portfolio



