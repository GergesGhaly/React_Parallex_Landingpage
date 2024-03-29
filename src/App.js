import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Atropos from "atropos/react";

import img1 from "./images/4de9c8e4637c2c323004099b23429b0e.jpg";
import img2 from "./images/5af72b6001ad3447b434829ebeb1e7a6.jpg";
import img3 from "./images/1e7ca6d46ee69668a5905a7a354d6495.jpg";
import img4 from "./images/4ae808074fe4b61a5ece8e5220af3c71.jpg";
import cross from "./images/cross.gif";
// import img5 from "././prallex-img/9e694a4f533a7a442edb0f6830eb0a13.jpg";
import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParallax } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Plx from "react-plx";
import ParalexSection from "./ParalexSection";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  // const [position, setsetposition] = useState(false);
  const parallaxh1 = [
    {
      start: "self",
      end: ".my-God-love",
      properties: [
        {
          startValue: 0,
          endValue: 100,
          property: "translateX",
          easing: "easeInCubic",
        },
      ],
    },
  ];
  const parallaxh2 = [
    {
      start: "self",
      end: ".my-God-love",
      properties: [
        {
          startValue: 0,
          endValue: -100,
          property: "translateX",
          easing: "easeInCubic",
        },
      ],
    },
  ];
  // const crosspostionhandel = () => {
  //   setsetposition(true);
  // };
  // const parallaxcross = [
  //   {
  //     start: "self",
  //     end: ".my-God-love",
  //     properties: [
  //       {
  //         startValue: 0,
  //         endValue: 500,
  //         property: "translateX",
  //         easing: "easeInCubic",
  //       },
  //       {
  //         startValue: 0,
  //         endValue: 10000,
  //         property: "translatY",
  //       },
  //     ],
  //   },
  // ];


  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [scal, sescal] = useState(1);
  // const scroll =useScroll(
  //   sety(500),
  //     setx(500)
  // );
  // const handelscroll = () => {
  //   sety(500);
  //   setx(500);
  // };
  // const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 2], [1, 2]);
  // console.log(scrollYProgress);
  // const scrollVelocity = useVelocity(scale);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  //   // sety(latest);
  // });
  // console.log("y" + y);

  useEffect(() => {
    setTimeout(() => {
      sety(300);
      setx(0);
      sescal(0.3);
    }, 3000);

    window.scrollTo(0, 0);

    // setTimeout(() => {
    //   window.scrollTo(0, 470);
    // }, 5000);
  });

  return (
    // <Parallax pages={3} style={{ top: "0", left: "0" }}>
    <div className="App">
      <div className="header container">
        <div className="logo">LOGO</div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gerges-ghaly-9455b3224/"
              target="_blank"
            >
              {" "}
              ABOUT
            </a>
          </li>
        </ul>
      </div>

      <div className="home container">
        <motion.div
          className="main"
          style={{
            scale,
          }}
        >
          <motion.div
            initial={[{ y: 100 }, { opacity: 0 }]}
            animate={[{ y: 0 }, { opacity: 1 }]}
            transition={{ ease: "easeOut", duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.01 }}
            className="imge"
          >
            <img src={img1} alt="" />
          </motion.div>
          <div className="content">
            <motion.div
              initial={[{ y: -100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 1.5, delay: 1.7 }}
              className="content-text"
            >
              <h1>طيب هو الرب للذين يترجونه، للنفس التي تطلبه</h1>
              <p>مراثي إرميا 3: 25</p>
            </motion.div>
            {/* <Plx
              onPlxStart={() => crosspostionhandel()}
              parallaxData={parallaxcross}
            > */}
            <motion.div
              // onClick={() => scrollto()}
              initial={[{ x: x }, { y: y }, { opacity: 0 }, { scale: 0.5 }]}
              animate={[{ x: x }, { y: y }, { opacity: 1, scale: scal }]}
              // onChange={scrollY}
              transition={{
                duration: 0.9,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="content-cross"
            >
              <img src={cross} alt="" />
            </motion.div>
            {/* </Plx> */}
          </div>

          <motion.div
            initial={[{ y: 100 }, { opacity: 0 }]}
            animate={[{ y: 0 }, { opacity: 1 }]}
            transition={{ ease: "easeOut", duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.01 }}
            className="imge"
          >
            <img src={img2} alt="" />
          </motion.div>
        </motion.div>
      </div>

<ParalexSection/>
      {/* <div className="hero container">






      <Parallax pages={4}>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} >
          <div >
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} >
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} >
          <div >
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
   







        
        <Plx parallaxData={parallaxData}>
          <div className="vid-wrap ">
            <video width="" height="" autoPlay muted loop>
              <source src={vid} type="" />
            </video>
          </div>
        </Plx>

        <div className="contet-wrap">
          <Plx parallaxData={parallaxData}>
            <div>
              <h2>يا الله إلهي</h2>
              <p>
                يا الله، إلهي أنت. إليك أبكر. عطشت إليك نفسي، يشتاق إليك جسدي في
                أرض ناشفة ويابسة بلا ماء، لكي أبصر قوتك ومجدك. كما قد رأيتك في
                قدسك. لأن رحمتك أفضل من الحياة. شفتاي تسبحانك. هكذا أباركك في
                حياتي. باسمك أرفع يدي. كما من شحم ودسم تشبع نفسي، وبشفتي
                الابتهاج يسبحك فمي.
              </p>
            </div>
          </Plx>
          <Plx parallaxData={parallaxData}>
            <div>
              <h2>الرب راعي</h2>
              <p>
                الرب راعي فلا يعوزني شيء في مراع خضر يربضني . إلى مياه الراحة
                يوردني يرد نفسي. يهديني إلى سبل البر من أجل اسمه أيضا إذا سرت في
                وادي ظل الموت لا أخاف شرا، لأنك أنت معي.
              </p>
            </div>
          </Plx>
        </div>
      </div> */}

      <div className="txt-show">
        <div
          className="container"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Plx parallaxData={parallaxh1}>
            <h2>God is Good </h2>
          </Plx>
        </div>

        <div
          className="container"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Plx parallaxData={parallaxh2}>
            <h2>الرب صالح </h2>
          </Plx>
        </div>
      </div>

      <div className="my-God-love container">
        <div className="mess revers">
          <motion.div
            initial={[{ y: 50 }]}
            animate={[{ y: 0 }]}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
            }}
          >
            <img src={img3} alt="" />
          </motion.div>

          <div className="txt">
            <h2>تعالوا إلي يا جميع المتعبين والثقيلي الأحمال، وأنا أريحكم</h2>
          </div>
        </div>
        <div className="mess">
          <motion.div
            initial={[{ y: 50 }]}
            animate={[{ y: 0 }]}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
            }}
          >
            <img src={img4} alt="" />
          </motion.div>
          <div>
            <h2>محبة أبدية أحببتك، من أجل ذلك أدمت لك الرحمة</h2>
          </div>
        </div>
        <Atropos shadow={false} rotateYMax={5} rotateXMax={12}>
          <div className="mess full">
            <h2>يا أولادي، لا نحب بالكلام ولا باللسان، بل بالعمل والحق!</h2>
          </div>
        </Atropos>
      </div>
      <div className="foter">
        <p>Gerges Ghaly </p>
        <span>&#9829;</span>
      </div>
    </div>
  );
}

export default App;
