import React, { useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";

function Blog2() {
  // Initialize AOS animations
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

  // ✅ Scroll page to top before paint
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Framer Motion text animations
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
          backgroundImage: `url('/assets/images/Blog/Blog2img.png')`,
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
            Scoop of Nature
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Pure indulgence, crafted with nature’s touch — every cup tells a
            story of freshness and joy.
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
                At Frozen Creamery N’ Garden, every scoop begins with nature’s
                finest. We handcraft each flavor using farm-fresh fruits, pure
                milk, and just the right hint of sweetness — no artificial
                colors or preservatives. From the tang of fresh strawberries to
                the calm of creamy vanilla, every batch is made in small
                quantities to preserve flavor, freshness, and purity. It’s not
                just ice cream — it’s nature in a cup.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/blog2img1.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="ice cream prep"
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
                Each morning, our kitchen becomes a blend of color and aroma — 
                milk simmering gently, fruits being freshly pureed, and ice 
                cream being churned to perfection. Every cup you taste is made 
                fresh that day — rich, smooth, and wholesome. We don’t store; 
                we create daily. That’s our promise of purity and love in every 
                serving.
              </p>
            </div>
            <div
              className="col-lg-5 col-md-12 text-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <img
                src="/assets/images/Blog/blog2img3.png"
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
              <h3 className="section-title d-flex">Scoop Happiness, Naturally</h3>
              <p>
                At Frozen Creamery N’ Garden, we believe nature offers
                everything we need to make people smile. Our ice creams are
                proof that simple, honest ingredients can create magic. Each
                flavor captures a moment of joy — the sweetness of summer, the
                calm of vanilla evenings, and the freshness of real fruit
                mornings. Every cup is a reminder that happiness can be both
                delicious and natural.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img
                src="/assets/images/Blog/blog2img2.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="ice cream bowl"
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

export default Blog2;
