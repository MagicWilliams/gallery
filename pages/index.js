import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [positions, setPositions] = React.useState([]);
  const handleClick = event => {
    const xPosition = event.clientX;
    const yPosition = event.clientY;
    const newPositions = [...positions, { left: xPosition, top: yPosition }];
    setPositions(newPositions);

    console.log(`X: ${xPosition}, Y: ${yPosition}`);
  };

  const photos = [
    {
      src: '/img/2.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/3.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/4.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/5.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/6.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/7.jpeg',
      orientation: 'landscape',
    },
    {
      src: '/img/8.jpeg',
      orientation: 'landscape',
    },
    {
      src: '/img/9.jpeg',
      orientation: 'portrait',
    },
    {
      src: '/img/10.jpeg',
      orientation: 'portrait',
    },
  ];

  return (
    <div className={styles.Gallery} onClick={handleClick}>
      {photos.map((photo, index) => {
        const orientationStyles =
          photo.orientation === 'landscape'
            ? {
                width: '40vw',
                height: '26.67vw',
                zIndex: 1000,
              }
            : {
                height: '40vw',
                zIndex: '1000',
                width: '26.67vw',
              };

        const leftOffset = !positions[index]
          ? null
          : photo.orientation === 'landscape'
          ? 'calc(' + positions[index].left + 'px - 20vw)'
          : 'calc(' + positions[index].left + 'px - 13.33vw)';
        const positionStyles = positions[index]
          ? {
              position: 'absolute',
              display: 'block',
              left: positions[index].left - 150,
              top: positions[index].top - 150,
            }
          : {
              display: 'none',
            };

        return (
          <div key={index} className={styles.GalleryItem}>
            <Image
              style={{ ...orientationStyles, ...positionStyles }}
              src={photo.src}
              alt="Gallery Image"
              width={300}
              height={300}
            />
          </div>
        );
      })}
      <h3>Click / Tap Anywhere</h3>
    </div>
  );
}
