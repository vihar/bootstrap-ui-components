import React from "react";
// next imports
import App from "next/app";
import Head from "next/head";

// app css
import "../styles/globals.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
