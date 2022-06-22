import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout";
import { TikTokContent } from "../components/TikTokContent";

const TikTokPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tik Tok / {process.env.NEXT_PUBLIC_BRAND_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TikTokContent />
      </Layout>
    </>
  );
};

export default TikTokPage;
