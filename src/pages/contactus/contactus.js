import React, { useState, useEffect, useRef } from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import "./contactus.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  // Check screen size on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP ScrollTrigger animation for form
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 50%",
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
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
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
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    }
  };

  return (
    <>
      <div className="contactus-hero">
        <Header background="#DCADC9" />
        <div className="contactus-content container py-5 ">
          <motion.h1
            className="display-6 mb-3 "
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            "We're Here To Hear From You"
          </motion.h1>
          <motion.p
            className="fs-3 "
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Got a question, feedback, or just craving a frozen treat?
            Reach out to us anytime.
          </motion.p>
        </div>
      </div>

      <div className="contactform-hero py-5" style={{ width: "100%" }}>
        <div className="container-fluid d-flex justify-content-center">
          <form 
            ref={formRef}
            className="contactus-form shadow-lg p-4 rounded bg-transparent w-100"
          >
            <motion.div 
              className="row mb-4 "
              variants={formHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="col-12 col-md-6">
                <h1 className="contactus-title display-6 fw-bold">"Your Scoop Starts Here"</h1>
              </div>
              <div className="col-12 col-md-6">
                <p className="contactus-caption fs-5">
                  "Fill out the form and our team will get back to you faster than your ice cream can melt!"
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
                  rows={isMobile ? "2" : "5"}
                ></textarea>
              </div>
            </div>

            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.button
                type="submit"
                className="btn contactus-submit-btn py-3 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Send Enquiry
              </motion.button>
            </motion.div>
          </form>
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

export default ContactUs;
