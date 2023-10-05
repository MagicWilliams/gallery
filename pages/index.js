import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import ParticleContainer from "../components/ParticleContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandstorm</title>
        <meta name="description" content="Sandstorm" />
      </Head>

      <ParticleContainer />
    </div>
  );
}
