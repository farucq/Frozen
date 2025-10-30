import "./home.css";
import React from "react";
import { motion } from "framer-motion";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  bounceIn,
  rotateIn,
  zoomVariants,
  slideVariants,
} from "../../animations/motionVariants";
import {
  activeExpandCardBackgroundMap,
  inActiveExpandCardBackgroundMap,
} from "./config/expandCardsConfig";
import {
  cardTopLeftImgMap,
  cardTopRightImgMap,
  cardBottomLeftImgMap,
  cardBottomRightImgMap,
  favTreatCardBackgroundMap,
} from "./config/favTreatConfig";
import {
  gradientMap,
  buttonColorMap,
  hoverButtonColorMap,
  headerBackgroundMap,
  footerBackgroundGradientMap,
} from "./config/config";
import {
  bannerImageMap,
  bannerLeftImageMap,
  bannerTLBBSImageMap,
  bannerTRBBSImageMap,
  bannerTBBBSImageMap,
  bannerTopLeftImgMap,
  bannerBottomLeftImgMap,
  bannerFirstCardBackgroundMap,
  bannerSecondCardBackgroundMap,
  bannerThirdCardBackgroundMap,
} from "./config/bannerConfig";
import { dessertBackgroundGradientMap } from "./config/dessertConfig";
import { aboutImageMap, aboutGradientMap } from "./config/aboutUsConfig";

function Home() {
  const [pageType, setPageType] = useState("cheesecake");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const getCSSVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // !Header section
  const [headerBackground, setHeaderBackground] = useState(
    getCSSVar("--light-brown")
  );

  // !Banner section
  const bannerDomRef = useRef(null);
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });
  const getBannerButtonStyle = (id) => ({
    background:
      hoveredButton === id
        ? hoverButtonColorMap[bannerType]
        : buttonColorMap[bannerType],
    transition: "all 0.3s ease",
  });
  const [bannerType, setBannerType] = useState("cheesecake");
  const [bannerAnimationKey, setBannerAnimationKey] = useState(0);
  const [bannerImage, setBannerImage] = useState(
    "/assets/images/home/banner-cake.png"
  );
  const [bannerLeftImage, setbannerLeftImage] = useState(
    "/assets/images/home/strawberry-bowl.png"
  );
  const [bannerTopLeftImg, setBannerTopLeftImg] = useState(
    "top-left-blueberry.png"
  );
  const [bannerBottomLeftImg, setBannerBottomLeftImg] = useState(
    "bottom-left-strawberry.png"
  );
  const [bannerTLBBSImage, setbannerTLBBSImage] = useState(
    "/assets/images/home/top-left-strawberry.png"
  );
  const [bannerTRBBSImage, setbannerTRBBSImage] = useState(
    "/assets/images/home/bottom-left-strawberry.png"
  );
  const [bannerTBBBSImage, setbannerTBBBSImage] = useState(
    "/assets/images/home/strawberry-sliced.png"
  );
  const [bannerFirstCardBackground, setbannerFirstCardBackground] = useState(
    getCSSVar("--chocolate")
  );
  const [bannerSecondCardBackground, setbannerSecondCardBackground] = useState(
    getCSSVar("--earthy-brown")
  );
  const [bannerThirdCardBackground, setbannerThirdCardBackground] = useState(
    getCSSVar("--earthy-brown")
  );
  const [saladImg, setSaladImg] = useState(false);
  const [cheeseImg, setCheeseImg] = useState(false);
  const [desBowlImg, setDesBowlImg] = useState(false);
  const [icecreamImg, setIcecreamImg] = useState(false);
  const [bannerBigImg, setBannerBigImg] = useState(false);
  const [mobileBowlImg, setMobileBowlImg] = useState(false);

  const [posImgMidFirst, setPosImgMidFirst] = useState(false);
  const [posImgMidSecond, setPosImgMidSecond] = useState(false);
  const [posImgLeftFirst, setPosImgLeftFirst] = useState(false);
  const [posImgLeftThrid, setPosImgLeftThrid] = useState(false);
  const [posImgLeftSecond, setPosImgLeftSecond] = useState(false);
  const [posImgRightFirst, setPosImgRightFirst] = useState(false);
  const [posImgRightSecond, setPosImgRightSecond] = useState(false);

  // !State and Ref
  const [shouldRotateBanner, setShouldRotateBanner] = useState(true);
  const bannerIntervalRef = useRef(null);
  const lastRotationStateRef = useRef(true);

  // !Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerDomRef.current) return;
      const rect = bannerDomRef.current.getBoundingClientRect();
      const bannerHeight = rect.height;
      const visibleHeight = Math.max(
        0,
        Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
      );
      const visibleRatio = visibleHeight / bannerHeight;
      const isMostlyVisible = visibleRatio >= 0.9;
      setShouldRotateBanner(isMostlyVisible);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // !Banner Type Change Logic
  useEffect(() => {
    if (!shouldRotateBanner) {
      if (bannerIntervalRef.current) {
        clearInterval(bannerIntervalRef.current);
        bannerIntervalRef.current = null;
        console.log("🧹 Rotation paused");
      }
      return;
    }
    const types = ["cheesecake", "icecream", "veg-salad"];
    let index = types.indexOf(bannerType);
    bannerIntervalRef.current = setInterval(() => {
      index = (index + 1) % types.length;
      const nextType = types[index];
      setBannerType(nextType);
      setBannerAnimationKey((prev) => prev + 1);
      setBannerImage(bannerImageMap[nextType]);
      setbannerLeftImage(bannerLeftImageMap[nextType]);
      setBannerTopLeftImg(bannerTopLeftImgMap[nextType]);
      setBannerBottomLeftImg(bannerBottomLeftImgMap[nextType]);
      setbannerTLBBSImage(bannerTLBBSImageMap[nextType]);
      setbannerTRBBSImage(bannerTRBBSImageMap[nextType]);
      setbannerTBBBSImage(bannerTBBBSImageMap[nextType]);
      setbannerFirstCardBackground(bannerFirstCardBackgroundMap[nextType]);
      setbannerSecondCardBackground(bannerSecondCardBackgroundMap[nextType]);
      setbannerThirdCardBackground(bannerThirdCardBackgroundMap[nextType]);
      setHeaderBackground(headerBackgroundMap[nextType]);
    }, 3000);
    return () => {
      if (bannerIntervalRef.current) {
        clearInterval(bannerIntervalRef.current);
        bannerIntervalRef.current = null;
      }
    };
  }, [shouldRotateBanner, bannerType]);

  // !AboutUs section
  const { ref: aboutUsRef, inView: aboutUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [aboutKey, setAboutKey] = useState(0);
  const [aboutImgLoaded, setAboutImgLoaded] = useState(false);
  const [aboutImage, setAboutImage] = useState("/assets/images/home/cake.png");
  const [aboutGradient, setAboutGradient] = useState(
    getCSSVar("--gradient-warm-bronze") +
      ",url('/assets/images/home/about-us-bg.png') center center / cover no-repeat"
  );

  // !FavTreat section
  const { ref: favTreatRef, inView: favTreatInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [favTreatCardBackground, setFavTreatCardBackground] = useState(
    getCSSVar("--peach-frost")
  );
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardTopLeftImg, setCardTopLeftImg] = useState(
    "top-left-blueberry.png"
  );
  const [cardTopRightImg, setCardTopRightImg] = useState(
    "bottom-left-strawberry.png"
  );
  const [cardBottomLeftImg, setCardBottomLeftImg] = useState(
    "bottom-left-strawberry.png"
  );
  const [cardBottomRightImg, setCardBottomRightImg] = useState(
    "top-left-blueberry.png"
  );
  const [topLeftImage, setTopLeftImage] = useState(false);
  const [topRightImage, setTopRightImage] = useState(false);
  const [bottomLeftImage, setBottomLeftImage] = useState(false);
  const [sliderMainImage, setSliderMainImage] = useState(false);
  const [bottomRightImage, setBottomRightImage] = useState(false);

  // !Dessert section
  const { ref: dessertRef, inView: dessertInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [dessertBackgroundGradient, setDessertBackgroundGradient] = useState(
    getCSSVar("--gradient-chocolate") +
      ", url('/assets/images/home/dessert-bg.png') center center / cover no-repeat"
  );

  // !Expand Cards section
  const { ref: expandCardsRef, inView: expandCardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [activeId, setActiveId] = useState(1);
  const [expandCardImage, setExpandCardImage] = useState(false);
  const cards = [
    {
      id: 1,
      title: "A Taste of Happiness",
      img: "/assets/images/home/expand-card-dessert.png",
      cardTitle: "Desserts That Speak the Language of Happiness",
      content:
        "Our desserts are more than just the end of a meal  they’re the beginning of a smile. Each creation combines rich textures, natural flavors, and a dash of creativity from our kitchen.From fruit-topped delights to creamy layered indulgences, we craft every dessert to bring a moment of joy. Because we believe sweetness isn’t just tasted  it’s felt, shared, and remembered.",
    },
    {
      id: 2,
      title: "Scoop of Nature",
      img: "/assets/images/home/expand-card-icecream.png",
      cardTitle:
        "Made from real fruits, fresh milk, and pure joy  nothing artificial.",
      content:
        "At Frozen Creamery N’ Garden, we believe ice cream should taste like happiness  not chemicals. Every scoop is handcrafted using natural fruits, pure milk, and just the right touch of sweetness.From the tang of strawberries to the calm of creamy vanilla, our ice creams are made daily in small batches  no artificial flavors, no preservatives, just nature’s best ingredients blending into a refreshing experience.",
    },
    {
      id: 3,
      title: "Freshness in Every Bowl",
      img: "/assets/images/home/expand-card-salad.png",
      cardTitle: "The bowl of Balance  The Art of a Healthy Veg Salad",
      content:
        "Every bowl of salad  is a blend of freshness, color, and crunch. We handpick locally grown vegetables  from crisp lettuce to juicy tomatoes  ensuring each bite bursts with goodness.Our salads aren’t just food; they’re a reminder that simple ingredients make life vibrant. Whether it’s a mid-day refresh or dinner side, our salads balance taste and health  made with care, served with heart.",
    },
  ];
  const [activeExpandCardBackground, setActiveExpandCardBackground] =
    useState("#f3a876");
  const [inActiveExpandCardBackground, setInActiveExpandCardBackground] =
    useState("#9a3816");

  // !Rewards section
  const { ref: rewardsRef, inView: rewardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [handWithIce, setHandWithIce] = useState(false);
  const [specialOffer, setSpecialOffer] = useState(false);

  // !Common
  const getButtonStyle = (id) => ({
    background: hoveredButton === id ? hoverButtonColor : buttonColor,
    transition: "all 0.3s ease",
  });
  const [gradient, setGradient] = useState(
    getCSSVar("--gradient-light-orange")
  );
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoverButtonColor, setHoverButtonColor] = useState(
    getCSSVar("--earthy-brown")
  );
  const [buttonColor, setAboutButtonColor] = useState(getCSSVar("--chocolate"));

  // !Footer
  const [footerBackgroundGradient, setFooterBackgroundGradient] = useState(
    getCSSVar("--gradient-chocolate") +
      ", url('/assets/images/footer-bg.png') center center / cover no-repeat"
  );

  // !Handle Fucntion
  const handleCardClick = useCallback((type) => {
    setPageType(type);
    setBannerType(type);
    setGradient(gradientMap[type]);
    setHoverButtonColor(hoverButtonColorMap[type]);
    setHeaderBackground(headerBackgroundMap[type]);
    setBannerImage(bannerImageMap[type]);
    setbannerLeftImage(bannerLeftImageMap[type]);
    setBannerTopLeftImg(bannerTopLeftImgMap[type]);
    setBannerBottomLeftImg(bannerBottomLeftImgMap[type]);
    setbannerTLBBSImage(bannerTLBBSImageMap[type]);
    setbannerTRBBSImage(bannerTRBBSImageMap[type]);
    setbannerTBBBSImage(bannerTBBBSImageMap[type]);
    setbannerFirstCardBackground(bannerFirstCardBackgroundMap[type]);
    setbannerSecondCardBackground(bannerSecondCardBackgroundMap[type]);
    setbannerThirdCardBackground(bannerThirdCardBackgroundMap[type]);
    setAboutImage(aboutImageMap[type]);
    setAboutGradient(aboutGradientMap[type]);
    setAboutButtonColor(buttonColorMap[type]);
    setFavTreatCardBackground(favTreatCardBackgroundMap[type]);
    setCardTopLeftImg(cardTopLeftImgMap[type]);
    setCardTopRightImg(cardTopRightImgMap[type]);
    setCardBottomLeftImg(cardBottomLeftImgMap[type]);
    setCardBottomRightImg(cardBottomRightImgMap[type]);
    setActiveExpandCardBackground(activeExpandCardBackgroundMap[type]);
    setInActiveExpandCardBackground(inActiveExpandCardBackgroundMap[type]);
    setDessertBackgroundGradient(dessertBackgroundGradientMap[type]);
    setFooterBackgroundGradient(footerBackgroundGradientMap[type]);
    setAboutKey((prev) => prev + 1);
  }, []);

  // !Sync Page Type
  useEffect(() => {
    if (lastRotationStateRef.current && !shouldRotateBanner) {
      setPageType(bannerType);
      handleCardClick(bannerType);
    }

    lastRotationStateRef.current = shouldRotateBanner;
  }, [shouldRotateBanner, bannerType, handleCardClick]);
  const navigate = useNavigate();
  return (
    <div className="Home">
      {/* ----------------------------------------------Banner---------------------------------------------- */}
      <div
        key={`bannerRef-${pageType}`}
        ref={(el) => {
          bannerRef(el); // for useInView
          bannerDomRef.current = el; // for offsetTop
        }}
        className="Banner"
        style={{
          background: `${gradientMap[bannerType]}`,
        }}
      >
        <div key={bannerAnimationKey}>
          <Header background={headerBackground} type={pageType} />
          <div className="banner-layout">
            <div className="banner-left">
              <motion.div
                className="heading"
                variants={slideVariants.left}
                initial="initial"
                animate={bannerInView ? "animate" : "initial"}
              >
                <h2>
                  {bannerType === "cheesecake"
                    ? "“The Final Note of"
                    : bannerType === "icecream"
                    ? "“Frozen Childhood in a "
                    : "“Garden in Every"}
                </h2>
                <h2>
                  {bannerType === "cheesecake"
                    ? "Delight”"
                    : bannerType === "icecream"
                    ? "Scoop”"
                    : "Bite”"}
                </h2>
              </motion.div>
              <motion.p
                className="at-frozen"
                variants={slideVariants.left}
                initial="initial"
                animate={bannerInView ? "animate" : "initial"}
              >
                {bannerType === "cheesecake"
                  ? `At Frozen, every scoop is a story summer’s first bite, timeless sweetness, and surprising flavours crafted daily to spread lasting joy.`
                  : bannerType === "icecream"
                  ? `Our ice creams capture summer’s first bite and timeless sweetness made fresh daily with classic and surprising flavours that spread lasting joy.`
                  : `Crisp leaves, sun-kissed fruits, colours that speak of seasons, our salads are a reminder that freshness isn’t just tasted, it’s felt.`}
              </motion.p>
              <motion.button
                variants={slideVariants.left}
                initial="initial"
                animate={bannerInView ? "animate" : "initial"}
                className="btn shop-now"
                style={getBannerButtonStyle("banner-left-btn")}
                onMouseEnter={() => setHoveredButton("banner-left-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Shop now
              </motion.button>
              {!isMobile && (
                <motion.div
                  className="bowl-image"
                  variants={zoomVariants.in}
                  initial="initial"
                  animate={bannerInView && desBowlImg ? "animate" : "initial"}
                >
                  <img
                    src={bannerLeftImage}
                    alt={
                      bannerType === "cheesecake"
                        ? "strawberry-bowl"
                        : bannerType === "icecream"
                        ? "banner-mangos"
                        : "banner-vegetables"
                    }
                    className={
                      bannerType === "cheesecake"
                        ? "strawberry-bowl"
                        : bannerType === "icecream"
                        ? "banner-mangos"
                        : "banner-vegetables"
                    }
                    onLoad={() => setDesBowlImg(true)}
                    loading="lazy"
                  />
                </motion.div>
              )}
            </div>
            <div className="banner-center">
              <motion.img
                variants={rotateIn}
                initial="initial"
                animate={bannerInView && bannerBigImg ? "animate" : "initial"}
                src={bannerImage}
                alt="big-cake"
                className="big-cake"
                onLoad={() => setBannerBigImg(true)}
                loading="lazy"
              ></motion.img>
              <motion.button
                variants={slideVariants.up}
                animate={bannerInView ? "animate" : "initial"}
                initial="initial"
                className="btn shop-now"
                style={getBannerButtonStyle("banner-center-btn")}
                onMouseEnter={() => setHoveredButton("banner-center-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Order now
              </motion.button>
            </div>
            <div className="banner-right">
              <motion.div
                variants={slideVariants.right}
                initial="initial"
                animate={bannerInView && cheeseImg ? "animate" : "initial"}
                className="card cheese-cake"
                style={{
                  backgroundColor: bannerFirstCardBackground,
                  width:
                    bannerType === "cheesecake"
                      ? "100%"
                      : bannerType === "icecream"
                      ? "90%"
                      : "90%",
                }}
                onClick={() => handleCardClick("cheesecake")}
              >
                <div className="card-body">
                  <img
                    src="/assets/images/home/small-cake.png"
                    alt="small-cake"
                    className="small-cake"
                    onLoad={() => setCheeseImg(true)}
                    loading="lazy"
                  />
                  <p
                    style={{
                      color:
                        bannerType === "cheesecake"
                          ? getCSSVar("--white")
                          : getCSSVar("--black"),
                    }}
                  >
                    Homemade Blueberry Cheesecake
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={slideVariants.right}
                initial="initial"
                animate={bannerInView && icecreamImg ? "animate" : "initial"}
                className="card ice-cream"
                style={{
                  backgroundColor: bannerSecondCardBackground,
                  width:
                    bannerType === "cheesecake"
                      ? "90%"
                      : bannerType === "icecream"
                      ? "100%"
                      : "90%",
                }}
                onClick={() => handleCardClick("icecream")}
              >
                <div className="card-body">
                  <img
                    src="/assets/images/home/small-icecream.png"
                    alt="small-cake"
                    className="small-icecream"
                    onLoad={() => setIcecreamImg(true)}
                    loading="lazy"
                  />
                  <p
                    style={{
                      color:
                        bannerType === "icecream"
                          ? getCSSVar("--white")
                          : getCSSVar("--black"),
                    }}
                  >
                    Homemade Mango Ice Cream
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={slideVariants.right}
                initial="initial"
                animate={bannerInView && saladImg ? "animate" : "initial"}
                className="card veg-salad"
                style={{
                  backgroundColor: bannerThirdCardBackground,
                  width:
                    bannerType === "cheesecake"
                      ? "90%"
                      : bannerType === "icecream"
                      ? "90%"
                      : "100%",
                }}
                onClick={() => handleCardClick("veg-salad")}
              >
                <div className="card-body">
                  <img
                    src="/assets/images/home/small-veg-salad.png"
                    alt="small-cake"
                    className="small-veg-salad"
                    onLoad={() => setSaladImg(true)}
                    loading="lazy"
                  />
                  <p
                    style={{
                      color:
                        bannerType === "veg-salad"
                          ? getCSSVar("--white")
                          : getCSSVar("--black"),
                    }}
                  >
                    Homemade Healthy Green Veg Salad
                  </p>
                </div>
              </motion.div>
              <motion.p
                className="crafted-with"
                variants={slideVariants.right}
                initial="initial"
                animate={bannerInView ? "animate" : "initial"}
              >
                “Crafted with love, using only fresh fruits, premium dairy, and
                natural ingredients.”
              </motion.p>
              {isMobile && (
                <motion.div
                  className="bowl-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mobileBowlImg ? 1 : 0 }}
                  transition={{ duration: 2 }}
                >
                  <img
                    src={bannerLeftImage}
                    alt={
                      bannerType === "cheesecake"
                        ? "strawberry-bowl"
                        : bannerType === "icecream"
                        ? "banner-mangos"
                        : "banner-vegetables"
                    }
                    className={
                      bannerType === "cheesecake"
                        ? "strawberry-bowl"
                        : bannerType === "icecream"
                        ? "banner-mangos"
                        : "banner-vegetables"
                    }
                    onLoad={() => setMobileBowlImg(true)}
                    loading="lazy"
                  />
                </motion.div>
              )}
            </div>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgLeftFirst ? "animate" : "initial"}
              src={`/assets/images/home/${bannerTopLeftImg}`}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "top-left-blueberry"
                  : bannerType === "icecream"
                  ? "top-left-mango"
                  : "top-left-vegetable"
              }
              onLoad={() => setPosImgLeftFirst(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgLeftThrid ? "animate" : "initial"}
              src={`/assets/images/home/${bannerBottomLeftImg}`}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "bottom-left-strawberry"
                  : bannerType === "icecream"
                  ? "bottom-left-mango"
                  : "bottom-left-vegetable"
              }
              onLoad={() => setPosImgLeftThrid(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgMidFirst ? "animate" : "initial"}
              src={`/assets/images/home/${bannerTopLeftImg}`}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "top-right-blueberry"
                  : bannerType === "icecream"
                  ? "top-right-mango"
                  : "top-right-vegetable"
              }
              onLoad={() => setPosImgMidFirst(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgMidSecond ? "animate" : "initial"}
              src={`/assets/images/home/${bannerTopLeftImg}`}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "bottom-right-blueberry"
                  : bannerType === "icecream"
                  ? "bottom-right-mango"
                  : "bottom-right-vegetable"
              }
              onLoad={() => setPosImgMidSecond(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgLeftSecond ? "animate" : "initial"}
              src={bannerTLBBSImage}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "top--left--strawberry"
                  : bannerType === "icecream"
                  ? "top--left--mango"
                  : "top--left--vegetable"
              }
              onLoad={() => setPosImgLeftSecond(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={rotateIn}
              initial="initial"
              animate={bannerInView && posImgRightFirst ? "animate" : "initial"}
              src={bannerTRBBSImage}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "top--right--strawberry"
                  : bannerType === "icecream"
                  ? "top--right--mango"
                  : "top--right--vegetable"
              }
              onLoad={() => setPosImgRightFirst(true)}
              loading="lazy"
            ></motion.img>
            <motion.img
              variants={slideVariants.right}
              initial="initial"
              animate={
                bannerInView && posImgRightSecond ? "animate" : "initial"
              }
              src={bannerTBBBSImage}
              alt={
                bannerType === "cheesecake"
                  ? "blueberry"
                  : bannerType === "icecream"
                  ? "mangos"
                  : "vegetables"
              }
              className={
                bannerType === "cheesecake"
                  ? "sliced-strawberries"
                  : bannerType === "icecream"
                  ? "mangos-group"
                  : "vegetables-group"
              }
              onLoad={() => setPosImgRightSecond(true)}
              loading="lazy"
            ></motion.img>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------AboutUs---------------------------------------------- */}
      <div
        ref={aboutUsRef}
        key={aboutKey}
        className="AboutUs"
        style={{
          background: `${aboutGradient}`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <motion.img
                variants={bounceIn}
                initial="initial"
                animate={
                  aboutUsInView && aboutImgLoaded ? "animate" : "initial"
                }
                src={aboutImage}
                alt=""
                onLoad={() => setAboutImgLoaded(true)}
                loading="lazy"
              ></motion.img>
            </div>
            <motion.div
              className="col-lg-6 col-md-12 col-sm-12"
              variants={slideVariants.right}
              initial="initial"
              animate={aboutUsInView ? "animate" : "initial"}
            >
              <div className="d-flex align-items-center">
                <h2 className="heading-initial">A</h2>
                <h2 className="heading">bout us</h2>
              </div>
              <div className="what-happens">
                <p>What happens when timeless cones meet garden bowls?</p>
              </div>
              <div className="at-frozen">
                <p>
                  At Frozen Creamery N’ Garden, indulgence and balance sit side
                  by side, creating a story you didn’t know you were craving!
                </p>
              </div>
              <div className="some-stories">
                <p>
                  Some stories start in one place. Ours began across continents,
                  in the busy and bustling kitchens of Dubai, the cobblestone
                  streets of Amsterdam, and the food halls of England.
                </p>
              </div>
              <div className="view-more-btn">
                <button
                  type="button"
                  className="btn view-more"
                  style={getButtonStyle("about-us-btn")}
                  onMouseEnter={() => setHoveredButton("about-us-btn")}
                  onMouseLeave={() => setHoveredButton(false)}
                >
                  View more
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------FavTreat---------------------------------------------- */}
      <div
        key={`favTreatRef-${pageType}`}
        ref={favTreatRef}
        className="FavTreat"
        style={{
          background: `${gradient}`,
        }}
      >
        <div className="text-center">
          <motion.h2
            className="heading"
            variants={slideVariants.left}
            initial="initial"
            animate={favTreatInView ? "animate" : "initial"}
          >
            “Pick Your Favorite Treat”
          </motion.h2>
          <motion.p
            className="from-scoops"
            variants={slideVariants.right}
            initial="initial"
            animate={favTreatInView ? "animate" : "initial"}
          >
            From scoops to bowls to slices every product is crafted fresh, every
            day.”
          </motion.p>
          <div className="fav-treat-container">
            <div className="horizontal-scroll-wrapper">
              <motion.div
                className="fav-treat-grid"
                variants={zoomVariants.out}
                initial="initial"
                animate={
                  favTreatInView && sliderMainImage ? "animate" : "initial"
                }
              >
                {[
                  {
                    type: "icecream",
                    img: "small-icecream.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                  {
                    type: "cheesecake",
                    img: "small-cake.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                  {
                    type: "veg-salad",
                    img: "small-veg-salad.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                  {
                    type: "icecream-duplicate",
                    img: "small-icecream.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                  {
                    type: "cheesecake-duplicate",
                    img: "small-cake.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                  {
                    type: "veg-salad-duplicate",
                    img: "small-veg-salad.png",
                    topLeftImg: cardTopLeftImg,
                    topRightImg: cardTopRightImg,
                    bottomLeftImg: cardBottomLeftImg,
                    bottomRightImg: cardBottomRightImg,
                    title: "Homemade Blueberry Cheesecake",
                    desc: "From scoops to bowls to slices every product is crafted fresh, every day.”",
                  },
                ].map(
                  ({
                    type,
                    img,
                    topLeftImg,
                    topRightImg,
                    bottomLeftImg,
                    bottomRightImg,
                    title,
                    desc,
                  }) => (
                    <div
                      key={type}
                      className="card mx-3"
                      style={{
                        background:
                          hoveredCard === type
                            ? gradient
                            : favTreatCardBackground,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={() => setHoveredCard(type)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <img
                        src={`/assets/images/home/${img}`}
                        alt={type}
                        onLoad={() => setSliderMainImage(true)}
                        loading="lazy"
                      />
                      {hoveredCard === type && (
                        <motion.img
                          variants={rotateIn}
                          initial="initial"
                          animate={
                            favTreatInView && topLeftImage
                              ? "animate"
                              : "initial"
                          }
                          src={`/assets/images/home/${topLeftImg}`}
                          alt={`${type} hover`}
                          className={
                            pageType === "cheesecake"
                              ? "cheese-top-left-hover-image"
                              : pageType === "icecream"
                              ? "ice-top-left-hover-image"
                              : "veg-top-left-hover-image"
                          }
                          onLoad={() => setTopLeftImage(true)}
                          loading="lazy"
                        ></motion.img>
                      )}
                      {hoveredCard === type && (
                        <motion.img
                          variants={rotateIn}
                          initial="initial"
                          animate={
                            favTreatInView && topRightImage
                              ? "animate"
                              : "initial"
                          }
                          src={`/assets/images/home/${topRightImg}`}
                          alt={`${type} hover`}
                          className={
                            pageType === "cheesecake"
                              ? "cheese-top-right-hover-image"
                              : pageType === "icecream"
                              ? "ice-top-right-hover-image"
                              : "veg-top-right-hover-image"
                          }
                          onLoad={() => setTopRightImage(true)}
                          loading="lazy"
                        ></motion.img>
                      )}
                      {hoveredCard === type && (
                        <motion.img
                          variants={rotateIn}
                          initial="initial"
                          animate={
                            favTreatInView && bottomLeftImage
                              ? "animate"
                              : "initial"
                          }
                          src={`/assets/images/home/${bottomLeftImg}`}
                          alt={`${type} hover`}
                          className={
                            pageType === "cheesecake"
                              ? "cheese-bottom-left-hover-image"
                              : pageType === "icecream"
                              ? "ice-bottom-left-hover-image"
                              : "veg-bottom-left-hover-image"
                          }
                          onLoad={() => setBottomLeftImage(true)}
                          loading="lazy"
                        ></motion.img>
                      )}
                      {hoveredCard === type && (
                        <motion.img
                          variants={rotateIn}
                          initial="initial"
                          animate={
                            favTreatInView && bottomRightImage
                              ? "animate"
                              : "initial"
                          }
                          src={`/assets/images/home/${bottomRightImg}`}
                          alt={`${type} hover`}
                          className={
                            pageType === "cheesecake"
                              ? "cheese-bottom-right-hover-image"
                              : pageType === "icecream"
                              ? "ice-bottom-right-hover-image"
                              : "veg-bottom-right-hover-image"
                          }
                          onLoad={() => setBottomRightImage(true)}
                          loading="lazy"
                        ></motion.img>
                      )}
                      <h3>{title}</h3>
                      <p>{desc}</p>
                      <button
                        className="btn order-now"
                        type="button"
                        style={getButtonStyle(`${type}-card-btn`)}
                        onMouseEnter={() =>
                          setHoveredButton(`${type}-card-btn`)
                        }
                        onMouseLeave={() => setHoveredButton(false)}
                      >
                        Order now
                      </button>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------Dessert---------------------------------------------- */}
      <div
        key={`dessertRef-${pageType}`}
        ref={dessertRef}
        className="Dessert"
        style={{
          background: `${dessertBackgroundGradient}`,
        }}
      >
        <motion.div
          className="text-center"
          variants={zoomVariants.in}
          initial="initial"
          animate={dessertInView ? "animate" : "initial"}
        >
          <h2>“Indulge in the Ultimate Dessert Paradise”</h2>
          <p>
            Handcrafted frozen desserts that blend luxury, love & unforgettable
            taste.
          </p>
          <button
            className="btn order-now"
            type="button"
            style={getButtonStyle("dessert-btn")}
            onMouseEnter={() => setHoveredButton("dessert-btn")}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Order now
          </button>
        </motion.div>
      </div>
      {/* ----------------------------------------------Expand Cards---------------------------------------------- */}
      <div
        key={`expandCardsRef-${pageType}`}
        ref={expandCardsRef}
        className="Expand-cards"
        style={{
          background: `${gradient}`,
        }}
      >
        <div className="conatiner-fluid expand-content">
          <div className="head-text">
            <motion.h2
              variants={slideVariants.left}
              initial="initial"
              animate={expandCardsInView ? "animate" : "initial"}
            >
              From Our Journal of Flavors & Feelings
            </motion.h2>
            <motion.p
              className="mt-4"
              variants={slideVariants.right}
              initial="initial"
              animate={expandCardsInView ? "animate" : "initial"}
            >
              A space where stories are stirred, thoughts are blended, and
              inspirations are served fresh just like everything we create.
            </motion.p>
          </div>
          <motion.div
            className="expand-container"
            variants={slideVariants.up}
            initial="initial"
            animate={expandCardsInView ? "animate" : "initial"}
          >
            {cards.map((card) => (
              <React.Fragment key={card.id}>
                <div
                  className={`card ${activeId === card.id ? "active" : ""}`}
                  style={{
                    background: `${
                      activeId === card.id
                        ? `${activeExpandCardBackground}`
                        : `${inActiveExpandCardBackground}`
                    }`,
                  }}
                  onClick={() => {
                    setActiveId(card.id);
                  }}
                >
                  <div
                    className={`card-title ${
                      activeId === card.id ? "active" : ""
                    }`}
                  >
                    {card.title}
                  </div>
                </div>
                {activeId === card.id && (
                  <div
                    className="content-panel"
                    style={{
                      background: `${
                        activeId === card.id
                          ? `${activeExpandCardBackground}`
                          : `${inActiveExpandCardBackground}`
                      }`,
                    }}
                  >
                    <div className="row">
                      <motion.div
                        className="col-lg-4 col-md-12"
                        variants={slideVariants.right}
                        initial="initial"
                        animate={
                          expandCardsInView && expandCardImage
                            ? "animate"
                            : "initial"
                        }
                      >
                        <img
                          src={card.img}
                          alt={card.title}
                          onLoad={() => setExpandCardImage(true)}
                          loading="lazy"
                        />
                      </motion.div>
                      <motion.div
                        className="col-lg-8 col-md-12"
                        variants={slideVariants.right}
                        initial="initial"
                        animate={expandCardsInView ? "animate" : "initial"}
                      >
                        <h2>{card.cardTitle}</h2>
                        <p className="my-4">{card.content}</p>
                        <button
                          className="btn order-now"
                          type="button"
                          style={getButtonStyle("expand-cards-btn")}
                          onMouseEnter={() =>
                            setHoveredButton("expand-cards-btn")
                          }
                          onMouseLeave={() => setHoveredButton(false)}
                          onClick={() => navigate(`/blog/${card.id}`)}
                        >
                          Read More
                        </button>
                      </motion.div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
      {/* ----------------------------------------------Rewards---------------------------------------------- */}
      <div
        key={`rewardsRef-${pageType}`}
        ref={rewardsRef}
        className="Rewards"
        style={{
          background: `${gradient}`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <motion.img
                variants={slideVariants.left}
                initial="initial"
                animate={rewardsInView && specialOffer ? "animate" : "initial"}
                src="/assets/images/home/special-offer.png"
                alt="offer"
                className="offer-image"
                onLoad={() => setSpecialOffer(true)}
                loading="lazy"
              ></motion.img>
            </div>
            <motion.div
              className="col-lg-6"
              variants={slideVariants.right}
              initial="initial"
              animate={rewardsInView ? "animate" : "initial"}
            >
              <h2>“Make Your Dream Fruit Salad & Earn Rewards!”</h2>
              <p className="join-our">
                “Join our fun fruit salad game mix, match, and taste victory
                with exciting rewards!”
              </p>
              <p className="get-ready">
                Get ready for a fun and frosty challenge! In our Play & Win
                section, you’ll create your own fruit salad by choosing
                ingredients in an interactive mini-game
              </p>
              <button
                className="btn order-now"
                type="button"
                style={getButtonStyle("rewards-btn")}
                onMouseEnter={() => setHoveredButton("rewards-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Order now
              </button>
            </motion.div>
          </div>
        </div>
        <motion.img
          variants={slideVariants.up}
          initial="initial"
          animate={rewardsInView && handWithIce ? "animate" : "initial"}
          src="/assets/images/home/hand-with-ice.png"
          alt="ice-cream"
          className="hand-ice"
          onLoad={() => setHandWithIce(true)}
          loading="lazy"
        ></motion.img>
      </div>
      <Footer
        type={pageType}
        buttonColor={buttonColor}
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
        hoverButtonColor={hoverButtonColor}
        background={footerBackgroundGradient}
      />
    </div>
  );
}

export default Home;
