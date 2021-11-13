import { useEffect } from "react";
import FrontPageBody from "../components/Landing_Page/FrontPageBody";
import Header from "../components/Landing_Page/Header";
import Navbar from "../components/Landing_Page/Navbar";
import classes from "./FrontPage.module.css";

const FrontPage = () => {
  useEffect(() => {
    document.querySelector("html").classList.add(classes.html);

    return () => document.querySelector("html").classList.remove(classes.html);
  }, []);
  return (
    <main>
      <Navbar />
      <Header />
      <FrontPageBody />
    </main>
  );
};

export default FrontPage;
