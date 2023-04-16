import React, { Fragment } from "react";
import styles from "./AboutBox.module.css";
import htmlLogo from "../../img/html.png";
import cssLogo from "../../img/css.png";
import routerLogo from "../../img/react-router.png";

const AboutBox = () => {
  return (
    <Fragment>
      <p className={styles.textArea}> Used </p>
      <div className={styles.infoContainer}>
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <img src={htmlLogo} alt="html" className={styles.imgLogo}></img>
            <h5 className={styles.textHeader}> HTML </h5>
          </div>
          <div className={styles.infoBlock}>
            <img src={cssLogo} alt="css" className={styles.imgLogo}></img>
            <h5 className={styles.textHeader}> Module CSS </h5>
          </div>
          <div className={styles.infoBlock}>
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.reactLogo}
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            <h5 className={styles.textHeader}> React </h5>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.imgLogo}>
              <img
                src={routerLogo}
                alt="reouter logo with three separated dots and three linked dots"
                className={styles.imgLogoRouter}
              />
            </div>
            <h5 className={styles.textHeader}> React Router v6</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutBox;
