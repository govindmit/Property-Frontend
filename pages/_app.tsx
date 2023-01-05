import '../styles/navbar.css'
import "../styles/login.css";
import "../styles/signup.css";
import "../styles/globals.css";
import "../styles/HomePage.css";
import "../styles/landloard.css";
import "../styles/broker.css";
import "../styles/adminSide.css";
import '../styles/users.css'
import '../styles/myProfile.css'


import type { AppProps } from 'next/app';
import Header from './components/Header';
import FooterComp from './components/Footer';
import { useEffect, useState } from 'react';
import Loader from './common/loader'
import { useRouter } from "next/router";
import userService from '../services/userService';

export default function App({ Component, pageProps }: AppProps) {
  const [token,setToken] = useState();

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    genrateToken()
    router.events.on('routeChangeStart', (url) => {
      setLoading(false);
    });
    router.events.on('routeChangeComplete', (url) => {
      setLoading(true);
    });
  })
  const genrateToken =async()=>{
    userService.authToken().then((token)=>{
     localStorage.setItem('webToken',JSON.stringify(token.data.authToken))
    })
  }
  return (
    <>
      {
        loading ? (
          <>
            <Header />
            <Component {...pageProps} />
            <FooterComp />
          </>) : <Loader />}
    </>
  )
}
