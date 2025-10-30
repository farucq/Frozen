import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

const timelineData = [
  {
    id: 1,
    image: "/assets/images/aboutus/card1.png",
    title: "Origins Across the World",
    description: "Our story began across continents—in Dubai, Amsterdam, and England—where a chef discovered that food could be more than just a meal.",
    position: "left",
  },
  {
    id: 2,
    image: "/assets/images/aboutus/card2.png",
    title: "The Realization",
    description: "Food can weave memories, spark smiles, and connect people in ways words never could.",
    position: "right",
  },
  {
    id: 3,
    image: "/assets/images/aboutus/card3.png",
    title: "The Pairing",
    description: "Two dishes remained timeless: the innocence of ice creams and the freshness of salads. In 2015, they finally came together.",
    position: "left",
  },
  {
    id: 4,
    image: "/assets/images/aboutus/card4.png",
    title: "The Vision",
    description: "A space where indulgence meets balance, where every scoop and every leaf tells a story.",
    position: "right",
  },
  {
    id: 5,
    image: "/assets/images/aboutus/card5.png",
    title: "The Craftsmanship",
    description: "Handcrafted with love, every flavor is a journey, every salad a celebration of freshness.",
    position: "left",
  },
  {
    id: 6,
    image: "/assets/images/aboutus/card6.png",
    title: "Today",
    description: "From a dream to reality—Frozen Creamery N' Garden welcomes you to experience the magic.",
    position: "right",
  },
];

function Timeline() {
  return (
    <section className="timeline-section">
      {/* Sticky background */}
      <div className="timeline-background-container">
        <div className="timeline-background"></div>
        <div className="timeline-background-overlay"></div>
      </div>

      {/* Content above background */}
      <div className="timeline-content">
        <motion.h2
          className="timeline-main-title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Frozen Creamery N' Garden
        </motion.h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${item.position}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pointer: dot + arrow */}
              <div className="timeline-pointer">
                <div className="timeline-dot"></div>
                <div className="timeline-arrow"></div>
              </div>
              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-card-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="timeline-card-image"
                    draggable={false}
                  />
                </div>
                <div className="timeline-card-content">
                  <h3 className="timeline-card-title">{item.title}</h3>
                  <p className="timeline-card-description">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
