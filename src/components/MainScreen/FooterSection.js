import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import gitLogo from "../../img/Git-Logo-White.png";
import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <Fragment>
      <div className={styles.footerContainer}>
        <div className={styles.mediaContainer}>
          <Link to="https://github.com/firstagon/what-about-coins" target="_blank" className={styles.link}>
            <img src={gitLogo} alt="Git" className={styles.gitLogo} style={{ width: "70px" }} />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterSection;
