import "../styles/globals.css";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <div className="MainDiv">
     <NavBar />
      <Component {...pageProps} /> <SocialIcons/>
    </div>
  );
}

export default MyApp;
