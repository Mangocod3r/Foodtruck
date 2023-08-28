import Carousel from 'react-bootstrap/Carousel'
import Header from '../components/header_s'
import Footer from '../components/footer'
import Card from '../components/card'
import { motion } from 'framer-motion'

import BasicExample from '../components/BasicExample'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
// import { useTheme } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';

export default function Stumain() {
    const [darkMode, setDarkMode] = useState(false);
    const [colorMode, setColorMode] = useState("light");

    const handleToggleColorMode = () => {
      setColorMode(colorMode === "light" ? "dark" : "light");
    };
  
    const textColor = colorMode === "light" ? "#0056D2" : "white";

    const [cats, setCats] = useState([
        {
            image: "",
            img: "",
            title: "",
            sub: "",
        }
    ]);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [darkMode]);
      

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/posts_main`)
            .then((res) => res.json())
            .then((jsonRes) => setCats(jsonRes));
    }, []);

    useEffect(() => {
        console.log(cats);
    }, [cats]);
    // const cardInfo = [
    //   {
    //     image: "https://media.istockphoto.com/id/1223301957/photo/artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=3GSFioDKwb8jSN0lH-ZmMyiA66dzw6kkQV3Hjd0SNU4=",
    //     title: "MACHINE",
    //     sub: "LEARNING",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1345658982/photo/ai-microprocessor-on-motherboard-computer-circuit.jpg?s=612x612&w=0&k=20&c=Kah6k5RDjasNEzJMjr8kSuYNN5LJ3CKTz4ZGLiCW2Fs=",
    //     title: "ARTIFICIAL",
    //     sub: "INTELLIGENCE",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1398626478/photo/global-business-finance-gdp-graph-chart-report-stock-exchange-market-trading-investment-and.jpg?s=612x612&w=0&k=20&c=LaoYFmR5KqhHPrC7z2UdbvqmE19aie6QtrFS29qBwkE=",
    //     title: "DATA",
    //     sub: "SCIENCE",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1145589623/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=8J35wj6OztvdGxiRLDTloq7IgoJDT5GvzOgT34_gS0M=",
    //     title: "CLOUD",
    //     sub: "COMPUTING",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1152502981/photo/turkish-student-group-are-developing-the-robot-in-the-classrom.jpg?s=612x612&w=0&k=20&c=_gv59WkLFNLkwA5pl0n5tWX4CAwAsV6XdMt2UsGj5aw=",
    //     title: "ROBO",
    //     sub: "TICS",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/907966126/photo/tractor-spraying-pesticides-on-vegetable-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=rxWT-PjibwcLsIUu4Zd-pa_zTdISmaoth0rjgLCURSg=",
    //     title: "AGRI",
    //     sub: "CULTURE",
    //   }
    // ]

    const handleDarkModeToggle = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
        setDarkMode(!darkMode);
      }

    const renderCard = (card, index) => {
        return (
            <div className="col-sm-4">
                {/* <a href="stu_vm"> */}
                <Link to = {`/stu_vm/${card.title}`} style={{textDecoration:'none'}}>
                    <div className="text-center shadow p-3 mb-5 bg-white rounded box">
                        <img
                            src={card.img}
                            className="img-fluid"
                            alt=""
                        />
                        <div>
                            <h5>
                                <span style={{ fontWeight: 600}}>{card.title} </span>
                            </h5>
                        </div>
                    </div>
                    </Link>
                {/* </a> */}
            </div>
        );
    };

    return (
        <>

            <div className="container-fluid main" style={{ paddingTop: 32 }}>
                {/* <Header></Header> */}
                <Carousel >
                    <Carousel.Item >
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0="
                            alt="First slide"
                        // style={{ maxWidth: "80%" }}
                        />
                        <Carousel.Caption>
                            <h5>VEGGIES</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/182810893/photo/fruit-mix.jpg?s=612x612&w=0&k=20&c=v9jopDXbS5LCXY1d8uSwEldLJVVkOpYtYtyHD8azWDU="
                            alt="Second slide"
                        // style={{ maxWidth: "80%" }}
                        />

                        <Carousel.Caption>
                            <h5>FRUITS</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/1297005217/photo/farmer-pouring-raw-milk-into-container.jpg?s=612x612&w=0&k=20&c=toiruwu04HHkwnLZhpKEjNPqOHI7Kmut5NMGTFSGm4M="
                            alt="Third slide"
                        // style={{ maxWidth: "80%" }}
                        />

                        <Carousel.Caption>
                            <h5>DAIRY</h5>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <motion.div className="home-section1 section-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2.5 }}
      >
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 beforeHeading">DAIRY</span>
            <h1 className="home-text17">
              {/* <span className="home-text18">Heading 1</span> */}
              {/* <br></br> */}
              {/* <span className="home-text20">Heading 2</span> */}
            </h1>
            <span className="home-text21">
            Embrace the wholesome goodness of dairy, a cornerstone of a balanced diet. Our dairy section celebrates the richness of calcium, protein, and probiotics that dairy products offer. From creamy yogurts that support gut health to artisanal cheeses that elevate your culinary creations, our dairy collection is a delicious way to care for your bones, muscles, and digestive system            </span>
            <div className="home-container03">
              <Link to="/signup">
                <button className="my-button bb blue">
                  See how
                </button>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1297005736/photo/young-couple-villagers-with-milk-cans.jpg?s=612x612&w=0&k=20&c=Ga1IBi5reSc3hVu9V8ELa9sAyKxYcWxkRJRdrAj8vTA="
            // src="/playground_assets/istockphoto-1301397300-612x612-1200w.jpg"
            className="home-hero-image2"
          />
          <div className="home-image4"></div>
        </div>
      </motion.div>

      <motion.div className="home-section1 section-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2.5 }}
      >
        <div className="home-max-width3 max-width">
        <img
            alt="image"
            src="https://media.istockphoto.com/id/493687446/photo/fresh-garden-vegetablesin-vintage-metal-basket.jpg?s=612x612&w=0&k=20&c=Q1w0PUL-ddnEyWwEnal7hfwQaq1QQXzrpTvNsHIrITc="
            // src="/playground_assets/istockphoto-1301397300-612x612-1200w.jpg"
            className="home-hero-image3"
          />
          <div className="home-content2">
            <span className="home-text16 beforeHeading">VEGGIES</span>
            <h1 className="home-text17">
              {/* <span className="home-text18">Heading 1</span> */}
              {/* <br></br> */}
              {/* <span className="home-text20">Heading 2</span> */}
            </h1>
            <span className="home-text21">
            Dive into the world of veggies, where vibrant colors and rich flavors await. From crisp, leafy greens to earthy root vegetables, our collection will inspire culinary creativity while providing essential vitamins and fiber to support your well-being.
            </span>
            <div className="home-container03">
              <Link to="/signup">
                <button className="my-button bb blue">
                  See how
                </button>
              </Link>
            </div>
          </div>
          <div className="home-image4"></div>
        </div>
      </motion.div>

      <motion.div className="home-section1 section-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2.5 }}
      >
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 beforeHeading">FRUITS</span>
            <h1 className="home-text17">
              {/* <span className="home-text18">Heading 1</span> */}
              {/* <br></br> */}
              {/* <span className="home-text20">Heading 2</span> */}
            </h1>
            <span className="home-text21">
            Indulge in the succulent sweetness of nature's candy - our assortment of fresh fruits! Whether you're craving the juicy burst of berries or the tropical allure of mangoes, our fruits are a symphony of flavors that deliver a powerhouse of antioxidants and natural sugars. Your taste buds will dance with delight while your body reaps the benefits of these nutrient-packed wonders.</span>
            <div className="home-container03">
              <Link to="/signup">
                <button className="my-button bb blue">
                  See how
                </button>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://media.istockphoto.com/id/182810893/photo/fruit-mix.jpg?s=612x612&w=0&k=20&c=v9jopDXbS5LCXY1d8uSwEldLJVVkOpYtYtyHD8azWDU="
            // src="/playground_assets/istockphoto-1301397300-612x612-1200w.jpg"
            className="home-hero-image2"
          />
          <div className="home-image4"></div>
        </div>
      </motion.div>


      
      
      {/* <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text57">Product</span>
              <span className="home-text58">How it works</span>
              <span className="home-text59">Features</span>
              <span className="home-text60">Pricing</span>
              <span className="home-text61">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text63">App</span>
              <span className="home-text64">Download iOS app</span>
              <span className="home-text65">Download Android app</span>
              <span className="home-text66">Log in to Portal</span>
              <span className="home-text67">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text69">Company</span>
              <span className="home-text70">About us</span>
              <span className="home-text71">Culture</span>
              <span className="home-text72">Code of conduct</span>
              <span className="home-text73">Careers</span>
              <span className="home-text74">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text76">Invest</span>
              <span className="home-text77">Commodity</span>
              <span className="home-text78">Savings</span>
              <span className="home-text79">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text82">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text85">Security</span>
              <span className="home-text86">Security status</span>
              <span className="home-text87">ISO</span>
              <span className="home-text88">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text90">Follow</span>
              <span className="home-text91">Instagram</span>
              <span className="home-text92">Twitter</span>
              <span className="home-text93">Facebook</span>
              <span className="home-text94">Tik Tok</span>
              <span className="home-text95">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer></Footer>
      </div>
        </>
    );
}