import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog1.css";
import Header from "../../layout/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Footer from "../../layout/footer/footer";

function Blog1() {
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
    backgroundImage: `url('/assets/images/Blog/Banner1.png')`
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
          Freshness in Every Bowl
        </motion.h1>

        <motion.p
          className="fs-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Play the Fruit challenge game, grab scratch cards, and win indulgent
            treats & offers.
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
              <h3 className="section-title">
                Where Every Leaf Tells a Story
              </h3>
              <p>
                At Frozen Creamery N’ Garden, every salad is a story of nature’s
                simplicity. We partner with local farmers to source the freshest
                produce — ensuring every ingredient carries the warmth of care
                and the crispness of the field. Freshness isn’t just a choice —
                it’s our promise.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img src="/assets/images/Blog/img1.png" className="content-img" alt="salad prep" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="row align-items-center mb-5 flex-lg-row-reverse">
            <div
              className="contentLeft col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-right"
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
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img src="/assets/images/Blog/img3.png" className="content-img" alt="fresh ingredients" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="row align-items-center">
            <div
              className="contentRight col-lg-7 col-md-12 text-start mb-4 mb-lg-0"
              data-aos="fade-left"
            >
              <h3 className="section-title">
                <span
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "2.5rem",
                    marginRight: "6px",
                    fontWeight: "900",

                  }}
                >
                  A
                </span>
                Bowl Full of Positivity
              </h3>
              <p>
                Our salads aren’t just meals — they’re moments of care.
                Perfect for every mood and moment, they balance taste and
                wellness effortlessly. We serve not just food, but mindful
                experiences where freshness meets emotion in every bite.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-center" data-aos="fade-up">
              <img src="/assets/images/Blog/img2.png" className="content-img" alt="salad bowl" />
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

export default Blog1;
