import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "./Union.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CHAKRA Guru DAO - Coming soon</title>
        <meta name="description" content="Chakra.guru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundColor: "#050625",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src="/Union.svg" alt="logo" height={300} width={300} />
        <text
          style={{
            fontFamily: "Inter, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 120,
            lineHeight: "120%",
            textAlign: "center",
            color: "#5A86F0",
            paddingTop: 48,
          }}
        >
          CHAKRA
        </text>
      </main>
    </div>
  );
};

export default Home;
