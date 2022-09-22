import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123123123"
            title="Laptop Gaming Lenovo Legion Y520-15IKBM cu procesor Intel® Core™ i7-7700HQ 2.80 GHz, Kaby Lake, 15.6 , Full HD, IPS, 8GB, 2TB, nVIDIA GeForce GTX 1060 6GB Max-Q, Free DOS, Black"
            price={799.99}
            image="https://s13emagst.akamaized.net/products/5350/5349811/images/res_611ceaae5e690d0a600b56681540de05.jpg?width=450&height=450&hash=CA5C30A6D8CA507211378915913F4C6D"
            rating={5}
          />

          <Product
            id="345345345"
            title="Casti gaming 3D Surround, Havit GAMENOTE H2232D E-SPORTS, iluminare RGB, microfon ajustabil 360° cu noise cancelling, 2 x 3.5 Jack si USB, 2.2 m"
            price={59.99}
            image="https://s13emagst.akamaized.net/products/30834/30833757/images/res_bd8a3c19678281d00abc7527e6418ecd.jpg?width=450&height=450&hash=EEC7CCF8FD296704B415BD830960EC90"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="456456456"
            title="Periuta de dinti electrica Alinty AT22, 40000 oscilatii, 3 rezerve, 5 moduri, TUV Germania, USB reincarcare, etui transport, Timer, Neagra"
            price={29.99}
            image="https://s13emagst.akamaized.net/products/32794/32793599/images/res_a6b527133b560ec3d0cbda6f8a86c314.jpg?width=720&height=720&hash=9D9CD8C2912BD402EFBB82B158AEC724"
            rating={3}
          />

          <Product
            id="678678678"
            title="Periuta de dinti electrica Oral-B Vitality D100 3D White, 7600 Oscilatii/min, Curatare 2D, 1 program, 1 capat, Roz"
            price={59.99}
            image="https://s13emagst.akamaized.net/products/25795/25794622/images/res_f298122c7d2f536da9256b740f89c861.jpg?width=720&height=720&hash=D9320BB9821B9BF0076DAB6528C6C8C8"
            rating={4}
          />
          <Product
            id="789789789"
            title="Set 2 x Periuta de dinti electrica Oral-B PRO 1 790 Cross Action, 40000 pulsatii/min, 8800 oscilatii/min, Curatare 3D, 1 program, 2 capate, 1 incarcator, Negru"
            price={89.99}
            image="https://s13emagst.akamaized.net/products/32057/32056490/images/res_fb30215865076b46b712ebdd1acbed1a.jpg?width=720&height=720&hash=A27DBCF70699E052C7FE95AF3E17DA65"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="111222333"
            title="Televizor Samsung 55TU7092, 138 cm, Smart, 4K Ultra HD, LED, Clasa G"
            price={59.99}
            image="https://images.samsung.com/is/image/samsung/p6pim/ro/ue32t5372cuxxh/gallery/ro-full-hd-tv-ue32t5372cuxxh-front-black-440358521?$650_519_PNG$"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
