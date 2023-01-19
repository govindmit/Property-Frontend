/* eslint-disable @next/next/no-css-tags */

import "../styles/navbar.css";
import "../styles/login.css";
import "../styles/signup.css";
import "../styles/globals.css";
import "../styles/HomePage.css";
import "../styles/landloard.css";
import "../styles/broker.css";
import "../styles/adminSide.css";
import "../styles/users.css";
import "../styles/myProfile.css";
import "../styles/home.css";
import "../styles/buy.css";

import "../styles/myProfile.css";
import "../styles/loginNew.css";

import type { AppProps } from "next/app";
import Header from "./components/Header";
import FooterComp from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./common/loader";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "../services/userService";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    genrateToken();
    router.events.on("routeChangeStart", (url) => {
      setLoading(false);
    });
    router.events.on("routeChangeComplete", (url) => {
      setLoading(true);
    });
  });
  const genrateToken = async () => {
    userService.authToken().then((token) => {
      localStorage.setItem("webToken", JSON.stringify(token.data.authToken));
    });
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../styles/loginNew.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css"
          integrity="sha512-NtU/Act0MEcVPyqC153eyoq9L+UHkd0s22FjIaKByyA6KtZPrkm/O5c5xzaia4pyCfReCS634HyQ7tJwKNxC/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></Script>

      {loading ? (
        <>
          <Header />
          <Component {...pageProps} />
          <ToastContainer />
          <FooterComp />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}