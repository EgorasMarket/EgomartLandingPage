import React from "react";
import "./home.css";
import WalletIcon from "@mui/icons-material/Wallet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import TelegramIcon from "@mui/icons-material/Telegram";
import Marquee from "react-fast-marquee";
import TollIcon from "@mui/icons-material/Toll";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";

const Home = () => {
  const productList = [
    {
      id: "1",
      img: "/img/product_images/prodImage2.png",
      prodName: "EGR 3000",
      prodAmount: "$150.00",
      brand: "Egoras",
    },
    // {
    //   id: "2",
    //   img: "/img/product_images/new_img_gallery_img1.jpeg",
    //   prodName: "EGR APEX",
    //   prodAmount: "$50,000.00",
    //   brand: "Egoras",
    // },
    {
      id: "3",
      img: "/img/product_images/new_img_gallery_img3.jpeg",
      prodName: "EGR TRICYCLE",
      prodAmount: "$2,000.00",
      brand: "Egoras",
    },
    {
      id: "5",
      img: "/img/product_images/new_img_gallery_img2.jpeg",
      prodName: "EGR 5000",
      prodAmount: "$300.00",
      brand: "Egoras",
    },
    {
      id: "6",
      img: "/img/product_images/prodImage3.png",
      prodName: "EGR REFRIGERATOR",
      prodAmount: "$250.00",
      brand: "Egoras",
    },
  ];
  // console.log('====================================');
  // // console.log(hhd);
  // console.log('====================================');
  return (
    <div className="HomeDiv">
      <section className="homeDivSection1">
        <div className="container">
          <div className="homeDivSection1_area">
            <div className="homeDivSection1_area_1">
              <div className="homeDivSection1_area_1_title">
                <span className="homeDivSection1_area_1_title_span">
                  Decentralized
                </span>{" "}
                Commodity Exchange.
              </div>
              <div className="homeDivSection1_area_1_para">
                Electronics and commodities have seen significant price
                increases in developing countries. Capitalize on this trend by
                trading these commodities on Egomart.
              </div>
              <div className="link_direct_div">
                <div className="link_direct_div_1">
                  <div className="link_direct_div_title">
                    For product purchase
                  </div>

                  <a
                    href="https://t.me/egomartbot"
                    target="_blank"
                    className="homeDivSection1_area_1_btns"
                  >
                    <button className="homeDivSection1_area_1_btns_2">
                      Shop on Egomart{" "}
                      <TelegramIcon className="homeDivSection1_area_1_btns_2_icon" />
                    </button>
                  </a>
                </div>
                <div className="link_direct_div_2">
                  <div className="link_direct_div_title"> For traders</div>

                  <a
                    href="https://app.egomart.org"
                    target="_blank"
                    className="homeDivSection1_area_1_btns"
                  >
                    <button className="homeDivSection1_area_1_btns_1">
                      Trade on Egomart{" "}
                      <LanguageIcon className="homeDivSection1_area_1_btns_2_icon" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="homeDivSection1_area_2"> */}
            {/* Marquee */}
            <Marquee className="homeDivSection1_area_2">
              {productList.slice(0, 5).map((data) => (
                <div
                  className="homeDivSection1_area_2_cont1"
                  id={data.id}
                  key={data.id}
                >
                  <div className="homeDivSection1_area_2_cont1_img_div">
                    <img
                      src={data.img}
                      alt=""
                      className="homeDivSection1_area_2_cont1_img_div_img"
                    />
                  </div>
                  <div className="homeDivSection1_area_2_cont1_conts">
                    <div className="homeDivSection1_area_2_cont1_conts_1">
                      <div className="homeDivSection1_area_2_cont1_conts_1_div1">
                        <div className="homeDivSection1_area_2_cont1_conts_1_div1_title">
                          {data.prodName}
                        </div>
                        <div className="homeDivSection1_area_2_cont1_conts_1_div1_span">
                          @{data.brand}
                        </div>
                      </div>
                      <div className="homeDivSection1_area_2_cont1_conts_1_div2">
                        <button className="homeDivSection1_area_2_cont1_conts_1_div2_btn">
                          Trade
                        </button>
                      </div>
                    </div>
                    <div className="homeDivSection1_area_2_cont1_conts_2">
                      <div className="homeDivSection1_area_2_cont1_conts_2_div1">
                        <div className="homeDivSection1_area_2_cont1_conts_2_div1_title">
                          Current Price
                        </div>
                        <div className="homeDivSection1_area_2_cont1_conts_2_div1_amount">
                          {data.prodAmount}
                        </div>
                      </div>
                      {/* <div className="homeDivSection1_area_2_cont1_conts_2_div1">
                        <div className="homeDivSection1_area_2_cont1_conts_2_div1_title">
                          End Time
                        </div>
                        <div className="homeDivSection1_area_2_cont1_conts_2_div1_amount">
                          18:35:09
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            {/* </div> */}
          </div>
        </div>
        <img
          src="/img/hero_section_bg.png"
          alt=""
          className="homeDivSection1_img"
        />
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="homeDivSection2b">
        <div className="container">
          <div className="homeDivSection2_area">
            <div className="homeDivSection2_area_title">
              How it works
              <div className="homeDivSection3_area_para">
                At Egomart, we understand that everyone has a unique financial
                goal. That's why we created an enabling environment to help you
                find the best earning opportunities tailored to your skills,
                interests, and circumstances.
              </div>
            </div>
            <div className="homeDivSection2_area_body">
              <div className="homeDivSection2_area_body_area1">
                <div className="homeDivSection2_area_body_cont1">
                  <JoinFullIcon className="homeDivSection2_area_body_cont1_icon" />
                  <div className="homeDivSection2_area_body_cont1_title">
                    Instant Bonding Of $EGAX
                  </div>
                  <div className="homeDivSection2_area_body_cont1_para">
                    Effortlessly generate egoUSD by securely burning $EGAX. All
                    transactions on Egomart exclusively utilize eGOD.
                  </div>
                </div>
                <div className="homeDivSection2_area_body_cont1">
                  <WalletIcon className="homeDivSection2_area_body_cont1_icon" />
                  <div className="homeDivSection2_area_body_cont1_title">
                    Buy / Sell rNFTs seammlessly
                  </div>
                  <div className="homeDivSection2_area_body_cont1_para">
                    Trade rNFTs effortlessly and profit from their price
                    volatility. Access a diverse range of rNFTs with substantial
                    liquidity on egomart.
                  </div>
                </div>
              </div>
              <img
                src="/img/section2_phone_img.png"
                alt=""
                className="homeDivSection2_area_body_cont1_img"
              />
              <div className="homeDivSection2_area_body_area2">
                <div className="homeDivSection2_area_body_cont1">
                  <TollIcon className="homeDivSection2_area_body_cont1_icon" />
                  <div className="homeDivSection2_area_body_cont1_title">
                    Earn $EGAX while using our products
                  </div>
                  <div className="homeDivSection2_area_body_cont1_para">
                    purchase on Egomart enables users to earn $EGAX as they
                    utilize our products.
                  </div>
                </div>
                <div className="homeDivSection2_area_body_cont1">
                  <WalletIcon className="homeDivSection2_area_body_cont1_icon" />
                  <div className="homeDivSection2_area_body_cont1_title">
                    Redeem and Use
                  </div>
                  <div className="homeDivSection2_area_body_cont1_para">
                    Redeem your Egoras rNFTs to physical products and enjoy the
                    exclusive benefits of ownership.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="homeDivSection3">
        <div className="container">
          <div className="homeDivSection3_area">
            <div className="homeDivSection3_area_title">
              Trending Products
              <div className="homeDivSection3_area_para">
                Find out what other users are mostly interested in or
                purchasing.
              </div>
            </div>
            <div className="homeDivSection3_area_body">
              <Swiper
                // loop={true}
                slidesPerView={"auto"}
                // centeredSlides={true}
                // slidesPerView={3}
                spaceBetween={0}
                navigation={true}
                pagination={{
                  clickable: true,
                  // dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
                className="newHome_div_section3_area_body_swiper"
              >
                {productList.map((data) => (
                  <SwiperSlide className="newHome_div_section3_area_body_swiper_slide">
                    <div className="homeDivSection3_area_body_cont1">
                      <div className="homeDivSection3_area_body_cont1_img_div">
                        <img
                          src={data.img}
                          alt=""
                          className="homeDivSection1_area_2_cont1_img_div_img"
                        />
                      </div>
                      <div className="homeDivSection3_area_body_cont1_txt_body">
                        <div className="homeDivSection3_area_body_cont1_txt_body_title">
                          {data.prodName}
                        </div>
                        <div className="homeDivSection3_area_body_cont1_txt_body_para">
                          @{data.brand}
                        </div>
                        <div className="homeDivSection3_area_body_cont1_txt_body_price_div">
                          <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1">
                            <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1_title">
                              Price
                            </div>
                            <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1_amount">
                              {data.prodAmount}
                            </div>
                          </div>
                          {/* <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1">
                            <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1_title">
                              Highest Bid
                            </div>
                            <div className="homeDivSection3_area_body_cont1_txt_body_price_div_1_amount">
                              120.00 ETH
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="homeDivSection2">
        <div className="container">
          <div className="homeDivSection2_area">
            <div className="homeDivSection2_area_title">
              Discover How To Earn With Egomart
              <div className="homeDivSection3_area_para">
                With egomart, we’re creating a platform to tokenize real-world
                properties into NFTs, allowing.
              </div>
            </div>
            <div className="homeDivSection2_area_area">
              <div className="homeDivSection2_area_area_cont1">
                <div className="homeDivSection2_area_area_cont1_title">
                  Trading Commodities
                </div>
                <div className="homeDivSection2_area_area_cont1_icon_div">
                  <CandlestickChartIcon className="homeDivSection2_area_area_cont1_icon" />
                </div>
                <div className="homeDivSection2_area_area_cont1_para">
                  Users can earn money by buying commodities at low prices and
                  selling them at higher prices.
                </div>
              </div>
              <div className="homeDivSection2_area_area_cont1">
                <div className="homeDivSection2_area_area_cont1_title">
                  Use To Earn
                </div>
                <div className="homeDivSection2_area_area_cont1_icon_div">
                  <TollIcon className="homeDivSection2_area_area_cont1_icon" />
                </div>
                <div className="homeDivSection2_area_area_cont1_para">
                  Our products are powered by a distributed ledger which enables
                  you to earn $EGAX while using these products.
                </div>
              </div>
              <div className="homeDivSection2_area_area_cont1">
                <div className="homeDivSection2_area_area_cont1_title">
                  Dropshipping
                </div>
                <div className="homeDivSection2_area_area_cont1_icon_div">
                  <ShoppingCartIcon className="homeDivSection2_area_area_cont1_icon" />
                </div>
                <div className="homeDivSection2_area_area_cont1_para">
                  Dropshippers can profit on Egomart by arbitraging products,
                  eliminating the need to find buyers before selling.
                </div>
              </div>
              <div className="homeDivSection2_area_area_cont1">
                <div className="homeDivSection2_area_area_cont1_title">
                  Refer To Earn
                </div>
                <div className="homeDivSection2_area_area_cont1_icon_div">
                  <PeopleIcon className="homeDivSection2_area_area_cont1_icon" />
                </div>
                <div className="homeDivSection2_area_area_cont1_para">
                  Users can earn referral bonuses for any active referrals they
                  bring to the platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="newHome_div_section7" id="faq">
        <div className="container">
          <div className="newHome_div_section7_area">
            <div className="newHome_div_section7_area_title">
              Frequently asked questions
            </div>
            <div className="newHome_div_section7_area_para">
              Everything you need to know about the Egomart
            </div>
            <div className="newHome_div_section7_area_body">
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Can I redeem the commodities?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    All products on egomart can be redeemed for the physical
                    equivalent. These can be done by simply requesting for
                    withdrawal .
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Can I sell these commodities whenever I want ?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Absolutely. Egomart offers high liquidity, allowing for easy
                    trading of all commodities.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What types of commodities are available for trading?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    A wide range of electronics, such as televisions, and food
                    commodities, such as rice, are readily available for trading
                    on Egomart.
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="homeDivSection4">
        <div className="container">
          <div className="homeDivSection4_area">
            <div className="homeDivSection4_area_cont1">
              <div className="homeDivSection4_area_cont1_title">
                Let's get you started
              </div>
              <div className="homeDivSection4_area_cont1_para">
                Next generation rNFT marketplace.
              </div>
              <div className="homeDivSection4_area_cont1_btns_div">
                <a
                  href="https://t.me/egomartbot"
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <button className="homeDivSection4_area_cont1_btn">
                    Shop on egomart
                    <TelegramIcon className="homeDivSection1_area_1_btns_2_icon" />
                  </button>
                </a>
                <a
                  href="https://app.egomart.org"
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <button className="homeDivSection4_area_cont1_btn2">
                    Trade on egomart
                    <LanguageIcon className="homeDivSection1_area_1_btns_2_icon" />
                  </button>
                </a>
              </div>
            </div>
            <div className="homeDivSection4_area_cont2">
              <img
                src="/img/last_home_section_img.png"
                alt=""
                className="homeDivSection4_area_cont2_img"
              />
            </div>
            <img
              src="/img/new_home_grains.png"
              alt=""
              className="homeDivSection4_area_bg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
