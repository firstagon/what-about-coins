import React, { Fragment } from "react";
import styles from "./InfoMain.module.css";
import { Link } from "react-router-dom";

const InfoMain = () => {
  return (
    <Fragment>
      <section id="info" className={styles.mainContainer}>
        <h6 className={styles.blockName}> Used <span className={styles.textDecorator}> API </span> </h6>
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h4 className={styles.textHeader}> Откуда данные? </h4>
            <div className={styles.textRegular}>
              <Link to="https://docs.coincap.io/" target="_blank" className={styles.textLink}>
                <img
                  className={styles.textImage}
                  src="https://documenter-assets.pstmn.io/favicon.ico"
                  alt="coincap logo"
                />
                &nbsp; CoinCap API 2.0
              </Link>
              <p>
                биржевые данные с тысяч рынков, мы можем предложить прозрачные и точные данные о цене и доступности
                активов.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h4 className={styles.textHeader}> Почем рубль? </h4>
            <div className={styles.textRegular}>
              <Link to="https://freecurrencyapi.com" target="_blank" className={styles.textLink}>
                <p className={styles.textLink}>
                  Freecurrency<span className={styles.apiText}>API</span>
                </p>
              </Link>
              <p>Our currency API provides live & historical exchange rate data ranging from 1999 until today.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InfoMain;
