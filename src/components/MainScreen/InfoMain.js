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
              <Link to="https://docs.coincap.io/" target="_blank" className={styles.textLiink}>
                <img className={styles.textImage} src="https://documenter-assets.pstmn.io/favicon.ico" alt="coincap logo" /> &nbsp; CoinCap API 2.0
              </Link>
              — это полезный инструмент для ценообразования и рыночной активности в режиме реального времени для более
              чем 1000 криптовалют. Собирая биржевые данные с тысяч рынков, мы можем предложить прозрачные и точные
              данные о цене и доступности активов.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h4 className={styles.textHeader}> Как присваивают ранк? </h4>
            <p className={styles.textRegular}>
              ранг находится в порядке возрастания - это число напрямую связано с рыночной капитализацией, тогда как
              самая высокая рыночная капитализация получает ранг 1
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InfoMain;
