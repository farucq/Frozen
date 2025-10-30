import React, { useState, useEffect, useRef } from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import "./franchise.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Franchise() {
  const [hoveredButton, setHoveredButton] = useState(false);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const ctaRef = useRef(null);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    // Animate form container
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Animate form inputs with stagger
    if (inputRefs.current.length > 0) {
      gsap.fromTo(
        inputRefs.current,
        {
          opacity: 0,
          x: -40,
          rotateY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Animate CTA section
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate CTA text with parallax effect
      const ctaTitle = ctaRef.current.querySelector('.franchise-cta-title');
      const ctaSubtitle = ctaRef.current.querySelector('.franchise-cta-subtitle');

      if (ctaTitle) {
        gsap.fromTo(
          ctaTitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      if (ctaSubtitle) {
        gsap.fromTo(
          ctaSubtitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const heroTextVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const formHeaderVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } 
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="franchise-hero">
        <Header background="#DCADC9" />
        <div className="franchise-content text-start container py-6">
          <motion.h1
            className="display-5 mb-3 "
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            "Own a Frozen Creamery N' Garden Franchise"
          </motion.h1>
          <motion.p
            className="fs-3"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Bring the joy of fresh ice creams & salads to your city 
            
            with our proven concept and support
          </motion.p>
        </div>
      </div>

      {/* Franchise Form Section with Different Background */}
      <div className="franchiseform-hero py-5">
        <div className="container d-flex justify-content-center">
          <form
            ref={formRef}
            className="contactus-form shadow-lg p-4 rounded bg-transparent w-100"
          >
          <motion.div 
  className="row mb-4 align-items-center"
  variants={formHeaderVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="col-12 col-md-6">
    <h1 className="contactus-title display-6">
      Apply for a Frozen Creamery N' Garden Franchise
    </h1>
  </div>
  <div className="col-12 col-md-6">
    <p className="contactus-caption fs-5 text-md-end text-center">
      Fill out the form below and take the first step toward owning your dream business.
    </p>
  </div>
</motion.div>

            <div className="row g-3">
              <div className="col-12 col-md-6" ref={el => inputRefs.current[0] = el}>
                <label className="form-label text-white">Full Name</label>
                <input type="text" className="form-control" placeholder="Type your full name" />
              </div>
              <div className="col-12 col-md-6" ref={el => inputRefs.current[1] = el}>
                <label className="form-label text-white">Email Address</label>
                <input type="email" className="form-control" placeholder="Type your Email Address" />
              </div>
              <div className="col-12 col-md-6" ref={el => inputRefs.current[2] = el}>
                <label className="form-label text-white">Phone Number</label>
                <input type="text" className="form-control" placeholder="Type your Mobile Number" />
              </div>
              <div className="col-12 col-md-6" ref={el => inputRefs.current[3] = el}>
                <label className="form-label text-white">Subject</label>
                <input type="text" className="form-control" placeholder="Type your Subject" />
              </div>
              <div className="col-12" ref={el => inputRefs.current[4] = el}>
                <label className="form-label text-white">How can we help</label>
                <textarea
                  className="form-control"
                  placeholder="Type your message"
                  rows={window.innerWidth < 768 ? "2" : "5"}
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>

            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                type="submit"
                className="btn py-3 text-white"
                style={{ backgroundColor: "#651243", borderRadius: "10px", fontWeight: "600", fontSize: "1.1rem", width: "80%" }}
                whileHover={{ scale: 1.05, backgroundColor: "#501033" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Send Enquiry
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>

      <div 
        ref={ctaRef}
        className="franchise-cta"
      >
        <div className="franchise-cta-content">
          <h2 className="franchise-cta-title">"Ready to Start Your Journey?"</h2>
          <p className="franchise-cta-subtitle">
            Join the Frozen Creamery N' Garden family and spread<br />
            sweetness & freshness in your city.
          </p>
        </div>
      </div>

      <Footer
        backgroundImage={"/assets/images/contactus/footeraboutus.png"}
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
        buttonColor="#6e1b4d"
        hoverButtonColor="#651243"
        overlay={true} 
      />
    </>
  );
}

export default Franchise;