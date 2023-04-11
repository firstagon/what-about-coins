import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import FooterSection from '../components/MainScreen/FooterSection';

// let headerStyle;


const activeLink = ({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link;


const Layout = () => {
  // https://medium.com/strise/making-use-of-observers-in-react-a29b1fd05fa7
  // const head = useRef();

  // const options = {
  //   root: document.getElementById('root'),
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // };

  // const cb = function(entries, observer) {
  //   return headerStyle = styles.blackHeader;
  // };

  // const observer = new IntersectionObserver(cb, options);
  // const target = head.current;
  // console.log(target)
  // observer.observe(target);

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
      <footer> <FooterSection /> </footer>
    </React.Fragment>
  );
};

export default Layout;
