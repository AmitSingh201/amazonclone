import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="The lean startuo"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="The Seven Principles of Professional Services: A field guide for successfully walking the consulting tightrope"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51KFAPFAFUL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="OnePlus 9 Pro Morning Mist, 5G Unlocked Android"
            price={899.99}
            image="https://m.media-amazon.com/images/I/51P0ap2StaL._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            title="Amazon Basics Racing/Gaming Style Office Chair - Green"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81l3RPjkYkL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Amazfit Band 5 Fitness Tracker with Alexa Built-in, 15-Day Battery Life"
            price={34.88}
            image="https://m.media-amazon.com/images/I/61xSjdpeU0L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={(1, 388)}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
