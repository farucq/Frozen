import {
  faXTwitter,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideVariants } from "../../animations/motionVariants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ 
  hoveredButton = false,
  setHoveredButton = () => {},
  type,
  buttonColor,
  hoverButtonColor,
  background,
  backgroundImage,
  overlay = false, // Add overlay prop
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const getButtonStyle = (id) => ({
    background: hoveredButton === id ? hoverButtonColor : buttonColor,
    transition: "all 0.3s ease",
  });

  return (
    <div
      key={type}
      ref={ref}
      className="Footer"
      style={{
        background: backgroundImage
          ? `url('${backgroundImage}') no-repeat center center / cover, var(--gradient-chocolate)`
          : background,
        position: 'relative', // Ensure positioning context for overlay
      }}
    >
      {/* Overlay layer */}
      {overlay && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(101, 18, 67, 0.15)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        ></div>
      )}

      {/* Content wrapper with z-index */}
      <div className="container-fluid" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <motion.div
            className="col-6 col-md-6 col-lg-4 p-4"
            variants={slideVariants.left}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <div className="d-flex align-items-center">
              <h2 className="fs-2 fs-md-1 heading-initial">A</h2>
              <h2 className="fs-2 fs-md-1 heading">bout Us</h2>
            </div>
            <p className="mb-5 fs-md-5 text-start">
              At Frozen Creamery N' Garden, indulgence and balance sit side by
              side, creating a story you didn't know you were craving!
            </p>
            <h3 className="text-start second-heading">Follow Us</h3>
            <div className="d-flex flex-wrap justify-content-start gap-2">
              <button
                type="button"
                className="btn social-btns"
                style={getButtonStyle("facebook-btn")}
                onMouseEnter={() => setHoveredButton("facebook-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <FontAwesomeIcon icon={faFacebookF} className="fs-20" />
              </button>
              <button
                type="button"
                className="btn social-btns"
                style={getButtonStyle("linkedin-btn")}
                onMouseEnter={() => setHoveredButton("linkedin-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="fs-20" />
              </button>
              <button
                type="button"
                className="btn social-btns"
                style={getButtonStyle("insta-btn")}
                onMouseEnter={() => setHoveredButton("insta-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <FontAwesomeIcon icon={faInstagram} className="fs-20" />
              </button>
              <button
                type="button"
                className="btn social-btns"
                style={getButtonStyle("twitter-btn")}
                onMouseEnter={() => setHoveredButton("twitter-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <FontAwesomeIcon icon={faXTwitter} className="fs-20" />
              </button>
            </div>
          </motion.div>
          <div className="col-6 col-md-6 col-lg-4 p-4">
            <motion.div
              variants={slideVariants.down}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <h2 className="heading">Contact Us</h2>
            </motion.div>
            <motion.ul
              variants={slideVariants.up}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <li style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faPhone} className="fs-20" />
                <span className="">905-328-776</span>
              </li>
              <li style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faWhatsapp} className="fs-20" />
                <span className="">905-328-776</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="fs-20" />
                <span className="">31 Ontario St, St Catharines, L2R5J3</span>
              </li>
              <li style={{ alignItems: "center" }}>
                <FontAwesomeIcon icon={faEnvelope} className="fs-20" />
                <span className="">info@thehempire.ca</span>
              </li>
            </motion.ul>
          </div>
          <motion.div
            className="col-12 col-lg-4 p-4"
            variants={slideVariants.right}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <h2 className="heading">Contact Us</h2>
            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Fullname"
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Phone Number"
              />
              <textarea
                type="text"
                className="form-control mb-3"
                placeholder="Message"
              ></textarea>
              <button
                type="button"
                className="btn contact-us w-100"
                style={getButtonStyle("contact-us-btn")}
                onMouseEnter={() => setHoveredButton("contact-us-btn")}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Contact Us
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Footer;