import React, { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../layout/header/header";
import { motion } from "framer-motion";
import Footer from "../../layout/footer/footer";

function Blog3() {
  // Initialize AOS for smooth animations
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
      offset: 100,
      delay: 0,
      anchorPlacement: "center-bottom",
    });
    AOS.refresh();
  }, []);

  // ✅ Scroll to top immediately on page load
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Framer Motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="blog1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div
        className="blog-hero"
        style={{
          backgroundImage: `url('/assets/images/Blog/Blog3Banner.png')`,
        }}
      >
        <Header background="#DCADC9" />

        {/* Hero Content */}
        <div className="blog-content container py-5 text-center text-md-start">
          <motion.h1
            className="display-5 mb-3"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Indulgence Meets Imagination
          </motion.h1>

          <motion.p
            className="lead"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Each dessert at Frozen Creamery N’ Garden is more than sweetness — 
            it’s a craft of flavor, color, and comfort, created with love and 
            natural goodness.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          {/* Section 1 */}
          <div
            className="row align-items-center mb-5"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <div
              className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="250"
              data-aos-delay="100"
            >
              <h3 className="section-title">Pure Ingredients, Honest Flavors</h3>
              <p data-aos="fade-up" data-aos-duration="250" data-aos-delay="200">
                At Frozen Creamery N’ Garden, every dessert begins with nature’s
                finest. We handcraft each delight using farm-fresh fruits, pure
                milk, and the perfect touch of sweetness — no artificial colors
                or preservatives. From the richness of cocoa to the calm of
                creamy vanilla, every batch is made in small quantities to
                preserve freshness and purity. It’s not just dessert — it’s
                nature’s art.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/Blog3img1.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Pure Ingredients"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div
            className="row align-items-center mb-5 flex-lg-row-reverse"
            data-aos="fade-up"
          >
            <div
              className="contentLeft col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="250"
            >
              <h3 className="section-title">Made Fresh, Every Single Day</h3>
              <p>
                Every morning, our kitchen fills with the aroma of pure milk,
                melting chocolate, and freshly whipped cream. Each dessert you
                savor is made fresh that day — smooth, rich, and indulgent. We
                don’t store; we create daily. It’s our promise of purity, care,
                and love in every bite.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/Blog3img3.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Made Fresh Daily"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration="250"
          >
            <div
              className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-left"
            >
              <h3 className="section-title d-flex">Dessert with a Heart</h3>
              <p>
                At Frozen Creamery N’ Garden, we believe desserts bring people
                together — they make celebrations brighter and quiet evenings
                warmer. Our creations are not just recipes, they’re reflections
                of joy, nostalgia, and nature’s magic. Every spoonful celebrates
                love, care, and creativity — because the best desserts are made
                not just with skill, but with heart.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
            >
              <img
                src="/assets/images/Blog/Blog3img2.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Dessert with a Heart"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        backgroundImage={"/assets/images/contactus/footeraboutus.png"}
        buttonColor="#6e1b4d"
        hoverButtonColor="#651243"
        overlay={true}
      />
    </motion.div>
  );
}

export default Blog3;
