import React, { useState, useEffect } from "react";
import "./ComingSoon.css";
import confetti from "canvas-confetti";
import Header from "../../layout/header/header";

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-27T15:11:30").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setLaunched(true);
        triggerConfetti();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerConfetti = () => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="launching-container">
      <div className="overlay"></div>
      <Header background="#DCADC9" />

      <div className="content-wrapper">
        {!launched ? (
          <>
            <h1 className="main-title">Coming Soon</h1>
            <p className="main-subtitle">
              Our next big thing is almost here. Stay tuned and get ready!
            </p>

            <div className="countdown-container">
              <div className="time-box">
                <h2>{String(timeLeft.days).padStart(2, '0')}</h2>
                <span>Days</span>
              </div>
              <div className="time-box">
                <h2>{String(timeLeft.hours).padStart(2, '0')}</h2>
                <span>Hours</span>
              </div>
              <div className="time-box">
                <h2>{String(timeLeft.minutes).padStart(2, '0')}</h2>
                <span>Minutes</span>
              </div>
              <div className="time-box">
                <h2>{String(timeLeft.seconds).padStart(2, '0')}</h2>
                <span>Seconds</span>
              </div>
            </div>
          </>
        ) : (
          <div className="fade-in">
            <h1 className="main-title launched">We're Live!</h1>
            <p className="main-subtitle launched">
              Thank you for waiting — our site is now officially launched!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComingSoon;