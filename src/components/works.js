import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/clean-labo.jpg" alt="" />
              </figure>
              <h4>クリーンラボ</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/next.jpg" alt="" />
              </figure>
              <h4>ネクスト株式会社</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/soctama-image.png" alt="" />
              </figure>
              <h4>ソクラテスの卵</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/cerebellum-kids.png" alt="" />
              </figure>
              <h4>セレベレムトレーニングスクール</h4>
            </div>
          </div>
          <div>
           <div className="worksItem">
              <figure>
                <img src="../images/cinderella_lp.jpg" alt="" />
              </figure>
              <h4>シンデレラタイムLP</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/cinderella_time.jpg" alt="" />
              </figure>
              <h4>シンデレラタイム</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/tophill-corporate.jpg" alt="" />
              </figure>
              <h4>株式会社TOP HILL</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/seven-tantei.jpg" alt="" />
              </figure>
              <h4>セブン探偵社</h4>
            </div>
          </div>
          <div>
           <div className="worksItem">
              <figure>
                <img src="../images/kenworks.jpg" alt="" />
              </figure>
              <h4>ケンワークス</h4>
            </div>
          </div>
          <div>
            <div className="worksItem">
              <figure>
                <img src="../images/always_ssl.png" alt="" />
              </figure>
              <h4>Always SSL</h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}