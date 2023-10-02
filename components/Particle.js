// src/Particle.js
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles/Particle.module.scss";

function Particle(props) {
  const ref = useRef(null);
  const { photo, setPopupSrc } = props;
  const [isHovered, setIsHovered] = useState(false); // Add this line
  const [windowWidth, setWindowWidth] = useState(-1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const portraitXGap = window.innerWidth > 500 ? 282.56 : 141.28;
    const landscapeXGap = window.innerWidth > 500 ? 560 : 280;
    const yGap = window.innerWidth > 500 ? 400 : 200;

    const element = ref.current;
    let speedX = Math.random() * 2 - 1;
    let speedY = Math.random() * 2 - 1;
    let posX =
      photo.orientation === "landscape"
        ? Math.random() * window.innerWidth * 0.75
        : Math.random() * window.innerWidth * 0.75;
    let posY = Math.random() * window.innerHeight * 0.8;

    function animate() {
      posX += speedX;
      posY += speedY;

      if (
        (photo.orientation === "portrait" && posX < 0) ||
        (photo.orientation === "portrait" &&
          posX + portraitXGap > window.innerWidth)
      )
        speedX *= -1;
      if (
        (photo.orientation === "landscape" && posX < 0) ||
        (photo.orientation === "landscape" &&
          posX + landscapeXGap > window.innerWidth)
      )
        speedX *= -1;
      if (posY < 0 || posY + yGap > window.innerHeight) speedY *= -1;

      element.style.transform = `translate(${posX}px, ${posY}px)`;

      requestAnimationFrame(animate);
    }

    animate();

    // Clean up animation on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zIndexStyles = {
    zIndex: isHovered ? 10 : "auto",
  };

  return (
    <div
      className={styles.particle}
      ref={ref}
      style={zIndexStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setPopupSrc(photo.src)}
    >
      <img src={photo.src} alt="particle" onHover />
    </div>
  );
}

export default Particle;
