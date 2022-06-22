import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { InstagramContent } from "../components/InstagramContent";
import { Layout } from "../components/Layout";

const InstagramPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Instagram / {process.env.NEXT_PUBLIC_BRAND_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InstagramContent />
      </Layout>
    </>
  );
};

export default InstagramPage;
