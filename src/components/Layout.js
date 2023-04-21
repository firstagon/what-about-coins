import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import FooterSection from "../components/MainScreen/FooterSection";

// let headerStyle;

const activeLink = ({ isActive }) => (isActive ? styles.active + " " + styles.link : styles.link);

const Layout = () => {
  const { pathname } = useLocation();

  const info = document.getElementById("info");
  const about = document.getElementById("about");
  const root = document.getElementById("root");

  useEffect(() => {
    if (pathname === "/posts") {
      root.scrollTo({
        top: info ? info.offsetTop : 500,
        left: 0,
        behavior: "instant",
      });
    } else if (pathname === "/") {
      root.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } else if (pathname === "/about") {
      root.scrollTo({
        top: about ? about.offsetTop : 600,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, info, about, root]);

  const scrollTop = () => {
    if (pathname === "/posts") {
      root.scrollTo({
        top: info ? info.offsetTop - 50 : 500,
        left: 0,
        behavior: "instant",
      });
    } else if (pathname === "/") {
      root.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } else if (pathname === "/about") {
      root.scrollTo({
        top: about ? about.offsetTop - 50 : 600,
        left: 0,
        behavior: "instant",
      });
    }
  };

  return (
    <React.Fragment>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoW}>w</div>
            <div className={styles.logoA}>a</div>
            <div className={styles.logoC}>c</div>
          </div>
          <nav className={styles.nav}>
            <NavLink to="/" className={activeLink} onClick={scrollTop}>
              Home
            </NavLink>
            <NavLink to="/posts" preventScrollReset={true} className={activeLink} onClick={scrollTop}>
              Posts
            </NavLink>
            <NavLink to="/about" className={activeLink} onClick={scrollTop}>
              About
            </NavLink>
          </nav>
        </div>
      </header>
      <section className={styles.main}>
        <Outlet />
      </section>
      <footer className={styles.footer}>
        <FooterSection />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
