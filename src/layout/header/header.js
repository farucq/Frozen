import "./header.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { slideVariants, zoomVariants } from "../../animations/motionVariants";
import { Link, useLocation } from "react-router-dom";

function Header({ background, type }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallDesktop, setIsSmallDesktop] = useState(window.innerWidth < 1400);
  const [menuOpen, setMenuOpen] = useState(false);

  const [tabWolfLoaded, setTabWolfLoaded] = useState(false);
  const [tabLogoLoaded, setTabLogoLoaded] = useState(false);
  const [desktopWolfLoaded, setDesktopWolfLoaded] = useState(false);
  const [desktopLogoLoaded, setDesktopLogoLoaded] = useState(false);

  // Reset menuOpen state when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallDesktop(window.innerWidth < 1400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to check if route is active
  const isActive = (path) => location.pathname === path;

  // Active link styles
  const activeLinkStyle = {
    backgroundColor: "rgba(101, 18, 67, 1)",
    padding: "8px 16px",
    borderRadius: "20px",
    color: "white",
    transition: "all 0.3s ease",
  };
  return (
    <div
      key={type}
      ref={ref}
      className="Header"
      style={{ padding: isMobile ? "20px 0 0 0" : "50px 0 0 0" }}
    >
      {!isMobile && (
        <div
          className="container"
          style={{
            background: background,
          }}
        >
          <ul style={{ gap: !isSmallDesktop ? "4rem" : "2rem" }}>
            <motion.li
              variants={slideVariants.left}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <a href="#menu" style={{ textDecoration: "none", color: "inherit" }}>
                Menu
              </a>
            </motion.li>
            <motion.li
              variants={slideVariants.right}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <Link
                to="/franchise"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ...(isActive("/franchise") && activeLinkStyle),
                }}
              >
                Franchise
              </Link>
            </motion.li>
            <motion.li
              variants={slideVariants.left}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <Link
                to="/gallery"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ...(isActive("/gallery") && activeLinkStyle),
                }}
              >
                Gallery
              </Link>
            </motion.li>
            <motion.li
              variants={zoomVariants.in}
              initial="initial"
              animate={
                inView && desktopWolfLoaded && desktopLogoLoaded
                  ? "animate"
                  : "initial"
              }
            >
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/wolf-logo.png`}
                  alt="wolf"
                  className="Wolf"
                  onLoad={() => setDesktopWolfLoaded(true)}
                  loading="lazy"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                  alt="frozen"
                  className="Logo"
                  onLoad={() => setDesktopLogoLoaded(true)}
                  loading="lazy"
                />
              </Link>
            </motion.li>
            <motion.li
              variants={slideVariants.right}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <Link
                to="/aboutus"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ...(isActive("/aboutus") && activeLinkStyle),
                }}
              >
                About Us
              </Link>
            </motion.li>
            <motion.li
              variants={slideVariants.left}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <Link
                to="/rewards"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ...(isActive("/rewards") && activeLinkStyle),
                }}
              >
                Rewards
              </Link>
            </motion.li>
            <motion.li
              variants={slideVariants.right}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              <Link
                to="/contactus"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  ...(isActive("/contactus") && activeLinkStyle),
                }}
              >
                Contact Us
              </Link>
            </motion.li>
          </ul>
        </div>
      )}
      {isMobile && (
        <div>
          <div className="mobile-header">
            <div className=""></div>
            <motion.div
              variants={zoomVariants.in}
              initial="initial"
              animate={
                inView && tabWolfLoaded && tabLogoLoaded ? "animate" : "initial"
              }
            >
              <Link to="/">
                <img
  src={`${process.env.PUBLIC_URL}/assets/images/wolf-logo.png`}
  alt="wolf"
  className="Wolf"
  onLoad={() => setTabWolfLoaded(true)}
  loading="lazy"
/>
<img
  src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
  alt="frozen"
  className="Logo"
  onLoad={() => setTabLogoLoaded(true)}
  loading="lazy"
/>

              </Link>
            </motion.div>
            <motion.button
              variants={slideVariants.right}
              initial="initial"
              animate="animate"
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </motion.button>
          </div>
          {menuOpen && (
            <div
              className={`mobile-menu justify-content-end ${
                menuOpen ? "slide-down" : "slide-up"
              }`}
              style={{ background }}
            >
              <motion.ul
                variants={slideVariants.right}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className="navbar-nav mb-2 mb-lg-0"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/franchise"
                    onClick={() => setMenuOpen(false)}
                    style={isActive("/franchise") ? activeLinkStyle : {}}
                  >
                    Franchise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    onClick={() => setMenuOpen(false)}
                    style={isActive("/gallery") ? activeLinkStyle : {}}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/aboutus"
                    onClick={() => setMenuOpen(false)}
                    style={isActive("/aboutus") ? activeLinkStyle : {}}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/rewards"
                    onClick={() => setMenuOpen(false)}
                    style={isActive("/rewards") ? activeLinkStyle : {}}
                  >
                    Rewards
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contactus"
                    onClick={() => setMenuOpen(false)}
                    style={isActive("/contactus") ? activeLinkStyle : {}}
                  >
                    Contact Us
                  </Link>
                </li>
              </motion.ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;