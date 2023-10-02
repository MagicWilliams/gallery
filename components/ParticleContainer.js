// src/ParticleContainer.js
import React from "react";
import Particle from "./Particle";
import styles from "./styles/ParticleContainer.module.scss";

function ParticleContainer() {
  const [popupSrc, setPopupSrc] = React.useState(null);
  const photos = [
    {
      src: "/img/2.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/3.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/4.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/5.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/6.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/7.jpeg",
      orientation: "landscape",
    },
    {
      src: "/img/8.jpeg",
      orientation: "landscape",
    },
    {
      src: "/img/9.jpeg",
      orientation: "portrait",
    },
    {
      src: "/img/10.jpeg",
      orientation: "portrait",
    },
  ];

  const blurStyles = {
    filter: !!popupSrc ? "blur(5px)" : "none",
  };

  return (
    <>
      {!!popupSrc && (
        <div className={styles.popup} onClick={() => setPopupSrc(null)}>
          <img
            src={popupSrc}
            alt="popup"
            onClick={() => setPopupSrc(null)}
            className={styles.photo}
          />
          <img src="/img/x.svg" alt="close" className={styles.close} />
        </div>
      )}

      <div className={styles.particleContainer} style={blurStyles}>
        {photos.map((photo, i) => {
          return <Particle key={i} photo={photo} setPopupSrc={setPopupSrc} />;
        })}
        <h2>SANDSTORM</h2>
      </div>
    </>
  );
}

export default ParticleContainer;
