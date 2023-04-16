import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import FooterSection from "../components/MainScreen/FooterSection";

// let headerStyle;

const activeLink = ({ isActive }) => (isActive ? styles.active + " " + styles.link : styles.link);

const Layout = () => {
  const { pathname } = useLocation();


  // console.log(info.offsetHeight);
  // console.log(info.offsetHeight);

  const scrollHandler = () => {
    const info = document.getElementById('info');
    const root = document.getElementById("root");
    if (pathname === "/posts") {
      root.scrollTo({
        top: info ? info.offsetHeight + 300 : 300,
        left: 0,
        behavior: "instant",
      });
    } else if (pathname === "/" || pathname === '/about') {
      root.scrollTo({
        top: 0,
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
            <NavLink to="/" className={activeLink} onClick={scrollHandler}>
              Home
            </NavLink>
            <NavLink
              to="/posts"
              preventScrollReset={true}
              className={activeLink}
              onClick={scrollHandler()}
            >
              Posts
            </NavLink>
            <NavLink to="/about" className={activeLink}>
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
