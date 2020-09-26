import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import "swiper/swiper-bundle.css";
// core version + navigation, pagination modules:
import Swiper, { Navigation } from "swiper";

function Home() {
  useEffect(() => {
    // configure Swiper to use modules
    var swiper = Swiper.use([Navigation]);
    // import Swiper styles

    // init Swiper:
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      autoplay: {
        delay: 100,
      },
      // Navigation arrows
      navigation: {
        nextEl: "#js-next1",
        prevEl: "#js-prev1",
      },
    });
  }, []);

  return (
    <div className="home">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              alt="banner"
              className="home__image"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
              alt="banner"
              className="home__image"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
              alt="banner"
              className="home__image"
            />
          </div>
        </div>
        <div id="js-prev1" className="swiper-button-prev"></div>
        <div id="js-next1" className="swiper-button-next"></div>
      </div>

      <div className="home__row">
        <Product
          id="123321"
          title="Rainbow Gaming Keyboard and Mouse Combo"
          price={27.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81GG28fAD3L._AC_SX679_.jpg"
        />
        <Product
          id="123322"
          title="Apple iPhone 11 Pro Max (64GB, Space Gray) [Locked] + Carrier Subscription"
          price={1227.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bsgUsPM-L.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123323"
          title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
          price={325.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SX679_.jpg"
        />
        <Product
          id="123324"
          title="iHome Alexa Built-in Bluetooth Speaker Portable Wireless Color Changing Waterproof Rechargeable"
          price={59.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71f6m4aGm6L._AC_SL1500_.jpg"
        />
        <Product
          id="123325"
          title="Samsung Electronics Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone"
          price={1249.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81oVkYC%2BBzL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123326"
          title="Samsung 32 inch CF391 Curved Monitor (LC32F391FWNXZA) - 1080p, Dual Monitor, Laptop Monitor, Monitor Stand/Riser/Mount Compliant, AMD Freesync, Gaming, HDMI, White"
          price={299.87}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816PL-g7boL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
