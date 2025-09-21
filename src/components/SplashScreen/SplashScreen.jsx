import React, { useState, useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete animation and hide splash screen after fade out
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 4500); // 3.5s + 1s fade out

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-logo">
        <img src="/juspaylogo.svg" alt="JusPay Logo" />
      </div>

      <div className="splash-text">
        <h1 className="splash-title">Assignment submitted by Deep</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
