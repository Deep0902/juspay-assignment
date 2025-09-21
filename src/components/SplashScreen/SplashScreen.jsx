import { memo, useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 4500);

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

export default memo(SplashScreen);
