import React, { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";

function Blog1() {
  useEffect(() => {
    // Initialize AOS animations
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

  // ✅ Ensure page starts from top on navigation
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Framer Motion animation for text
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
          backgroundImage: `url('/assets/images/Blog/Banner1.png')`,
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
            Freshness in Every Bowl
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Play the Fruit Challenge game, grab scratch cards, and win indulgent
            treats & offers.
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
            <div className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0">
              <h3
                className="section-title"
                data-aos="fade-right"
                data-aos-duration="250"
                data-aos-delay="100"
              >
                Where Every Leaf Tells a Story
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="250"
                data-aos-delay="200"
              >
                At Frozen Creamery N' Garden, every salad is a story of nature's
                simplicity. We partner with local farmers to source the freshest
                produce — ensuring every ingredient carries the warmth of care
                and the crispness of the field. Freshness isn't just a choice —
                it's our promise.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/img1.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="salad prep"
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
              <h3 className="section-title">
                Simple Ingredients, Thoughtful Creations
              </h3>
              <p>
                Every bowl is created from wholesome ingredients — crunchy
                greens, juicy tomatoes, refreshing cucumbers, and homemade
                dressings that complement nature’s flavor. Each salad not only
                nourishes your body but also brings peace to your mind.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/img3.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="fresh ingredients"
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
              <h3 className="section-title d-flex">A Bowl Full of Positivity</h3>
              <p>
                Our salads aren’t just meals — they’re moments of care. Perfect
                for every mood and moment, they balance taste and wellness
                effortlessly. We serve not just food, but mindful experiences
                where freshness meets emotion in every bite.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img
                src="/assets/images/Blog/img2.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="salad bowl"
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

export default Blog1;
