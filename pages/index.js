import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ParticleContainer from "../components/ParticleContainer";

export default function Home() {
  const [positions, setPositions] = React.useState([]);
  const handleClick = event => {
    const xPosition = event.clientX;
    const yPosition = event.clientY;
    const newPositions = [...positions, { left: xPosition, top: yPosition }];
    setPositions(newPositions);
  };

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

  return (
    <div>
      <ParticleContainer />
    </div>
  );
}
