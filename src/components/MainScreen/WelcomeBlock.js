import { Fragment } from "react";
import styles from "./WelcomeBlock.module.css";
import bitcoinImage from "../../img/bitcoin.png";
import etheriumImage from "../../img/etheriumcoin.png";

const WelcomeBlock = () => {
  return (
    <Fragment>
      <div className={styles.textArea}>
        <img className={styles.coinImageLeft} src={bitcoinImage} alt="bitcoin coin" />
        <div className={styles.textContainer}>
          <h4 className={styles.welcome}> What about coins </h4>
          <p> Самый наипростейший трекер различных криптовалют. </p>
        </div>
        <img className={styles.coinImageRight} src={etheriumImage} alt="bitcoin coin" />
      </div>
    </Fragment>
  );
};

export default WelcomeBlock;
