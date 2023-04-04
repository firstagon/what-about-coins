import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const activeLink = ({isActive}) => isActive ? styles.active : '';

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        <nav className={styles.nav}>
          <NavLink to="/" className={activeLink}> Home </NavLink>
          <NavLink to="/posts" className={activeLink}> Posts </NavLink>
          <NavLink to="/about" className={activeLink}> About </NavLink>
        </nav>
      </header>
      <section className={styles.main}>
        <Outlet />
      </section>
      <footer> 2023 </footer>
    </React.Fragment>
  );
};

export default Layout;
