import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeContent } from "../components/HomeContent";
import { Layout } from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home / {process.env.NEXT_PUBLIC_BRAND_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeContent />
      </Layout>
    </>
  );
};

export default IndexPage;
