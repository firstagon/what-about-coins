import React, { Fragment } from "react";
import styles from "./InfoMain.module.css";
import { Link } from "react-router-dom";

const InfoMain = () => {
  return (
    <Fragment>
      <section className={styles.mainCointainer}>
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h4 className={styles.textHeader}> Откуда данные? </h4>
            <p className={styles.textRegular}>
              <Link to="https://docs.coincap.io/" target="_blank" className={styles.textLink}>
                <img
                  className={styles.textImage}
                  src="https://documenter-assets.pstmn.io/favicon.ico"
                  alt="coincap logo"
                />
                &nbsp; CoinCap API 2.0
              </Link>
              биржевые данные с тысяч рынков, мы можем предложить прозрачные и точные данные о цене и доступности
              активов.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h4 className={styles.textHeader}> Почем рубль? </h4>
            <p className={styles.textRegular}>
              <Link to="https://freecurrencyapi.com" target="_blank" className={styles.textLink}>
                <p className={styles.textLink}>Freecurrency<span className={styles.apiText}>API</span></p>
              </Link>
              The 100% free solution for handling exchange rate conversions. Our currency API provides live & historical
              exchange rate data ranging from 1999 until today.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InfoMain;
