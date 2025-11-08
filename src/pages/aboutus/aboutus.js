import React from "react";
import { motion } from "framer-motion";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import "./aboutus.css";
import TimelineSection from './TimelineSection';

function AboutUs() {
  // Framer Motion Variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const valueCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <div className="aboutus-hero">
        <Header background="#DCADC9" />
        <div className="aboutus-content container py-5 ">
          <motion.h1
            className="display-6 mb-3"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Frozen Creamery N' Garden
          </motion.h1>
          <motion.p
            className="fs-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A place where indulgence and balance share the
            same space — handcrafted ice creams and farm- 
            fresh salads made with love every day.
          </motion.p>
        </div>
      </div>

      <TimelineSection /> 

      {/* Step Into Our Frozen World Section */}
      <section className="frozen-world-section">
        <div className="frozen-world-overlay"></div>
        <div className="frozen-world-content">
          <motion.h2
            className="frozen-world-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Step Into Our Frozen World
          </motion.h2>
          <motion.p
            className="frozen-world-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our shop isn't just a place to eat – it's an experience. With interiors inspired by
            snow-covered landscapes, frosty designs, and warm corners, every visit feels like
            stepping into a magical frozen escape. From the first glance to the last bite, your
            senses are wrapped in a snowy celebration.
          </motion.p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="aboutus-values-section">
        <motion.h2
          className="aboutus-values-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Our Values
        </motion.h2>
        <div className="aboutus-values-cards">
          {[
            {
              icon: "basket",
              title: "Freshness First",
              desc: (
                <>
                  We source locally whenever possible, ensuring our ingredients are at their peak of flavor and nutrition.
                  <br />
                  From farm to bowl, we prioritize freshness in every bite.
                </>
              )
            },
            {
              icon: "icecream",
              title: "Crafted with Care",
              desc: "Our ice creams are made fresh daily in small batches, while our salads are thoughtfully composed to create perfect harmony in flavor, texture, and nutrition."
            },
            {
              icon: "balance",
              title: "Balance in Every Bite",
              desc: "We believe in the power of balance – between indulgence and nourishment, tradition and innovation, simplicity and complexity – in our food and in life."
            },
            {
              icon: "community",
              title: "Community & Connection",
              desc: "Our spaces are designed to bring people together, where strangers become friends over shared meals and meaningful conversations."
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              className="aboutus-value-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={valueCardVariants}
            >
              <div className={`aboutus-value-icon ${value.icon}`}></div>
              <h3 className="aboutus-value-heading">{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutus-cta-section">
        <div className="aboutus-cta-overlay"></div>
        <div className="aboutus-cta-content">
          <motion.h2
            className="aboutus-cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            "Step in once, and you'll find yourself returning for the feeling."
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <button className="aboutus-cta-button">
              Order Now
            </button>
          </motion.div>
        </div>
      </section>

      <Footer
        backgroundImage={"/assets/images/contactus/footeraboutus.png"}
        buttonColor="#6e1b4d"
        hoverButtonColor="#651243"
        overlay={true}
      />
    </>
  );
}

export default AboutUs;
