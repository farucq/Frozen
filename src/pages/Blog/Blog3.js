import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../layout/header/header";
import { motion } from "framer-motion";
import Footer from "../../layout/footer/footer";

function Blog3() {
  useEffect(() => {
      AOS.init({
        duration: 600, // smooth speed
        once: true,    // animate only once
        easing: "ease-in-out",
        offset: 100,   // small trigger offset
      });
    }, []);
useEffect(() => {
    // Step 1: Disable smooth scrolling temporarily
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    // Step 2: Jump instantly to top after mount (slight delay ensures Framer Motion mounts)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      // Step 3: Restore smooth scroll (for user-initiated scrolls later)
      html.style.scrollBehavior = prevBehavior || "smooth";
    }, 1); // 100ms ensures animations still trigger properly

    return () => clearTimeout(timeout);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="blog1">
      {/* Hero Section */}
      <div className="blog-hero"  style={{
    backgroundImage: `url('/assets/images/Blog/Blog3Banner.png')`
  }}>
      {/* Header Section */}
      <Header background="#DCADC9" />

      {/* Hero Content */}
      <div className="blog-content container py-5 text-center">
        <motion.h1
          className="display-5 mb-3"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Indulgence Meets Imagination.
        </motion.h1>

        <motion.p
          className="fs-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Each dessert at Frozen Creamery N’ Garden is more than sweetness  it’s a craft of flavor, color, and comfort, created with love and natural goodness.
        </motion.p>
      </div>
    </div>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">

          {/* Section 1 */}
          <div className="row align-items-center mb-5">
            <div
              className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-left"
            >
              <h3 className="section-title">Pure Ingredients, Honest Flavors</h3>
              <p>
                At Frozen Creamery N’ Garden, every scoop begins with nature’s finest. We handcraft each flavor using farm-fresh fruits, pure milk, and just the right hint of sweetness — no artificial colors or preservatives. From the tang of fresh strawberries to the calm of creamy vanilla, every batch is made in small quantities to preserve flavor, freshness, and purity. It’s not just ice cream — it’s nature in a cup.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img
                src="/assets/images/Blog/Blog3img1.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Pure Ingredients"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="row align-items-center mb-5 flex-lg-row-reverse">
            <div
              className="contentLeft col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-right"
            >
              <h3 className="section-title">Made Fresh, Every Single Day</h3>
              <p>
                Each morning, our kitchen becomes a blend of color and aroma — milk simmering gently, fruits being freshly pureed, and ice cream being churned to perfection.
                Every cup you taste is made fresh that day — rich, smooth, and wholesome. We don’t store; we create daily. That’s our promise of purity and love in every serving.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img
                src="/assets/images/Blog/Blog3img3.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Made Fresh Daily"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="row align-items-center">
            <div
              className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-left"
            >
              <h3 className="section-title d-flex">Scoop Happiness, Naturally</h3>
              <p>
                At Frozen Creamery N’ Garden, we believe nature offers everything we need to make people smile. Our ice creams are proof that simple, honest ingredients can create magic.
                Each flavor captures a moment of joy — the sweetness of summer, the calm of vanilla evenings, and the freshness of real fruit mornings. Every cup is a reminder that happiness can be both delicious and natural.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img
                src="/assets/images/Blog/Blog3img2.png"
                className="img-fluid rounded-4 shadow content-img"
                alt="Scoop Happiness"
              />
            </div>
          </div>
        </div>
      </section>
       <Footer
              backgroundImage={"/assets/images/contactus/footeraboutus.png"}
              buttonColor="#6e1b4d"
              hoverButtonColor="#651243"
              overlay={true}
            />
    </div>
  );
}

export default Blog3;
