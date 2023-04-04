import { Fragment } from "react";
import styles from "./WelcomeBlock.module.css";

const WelcomeBlock = () => {
  return (
    <Fragment>
      <p className={styles.welcome}> Welcome </p>
      <p> Самый наипростейший трекер различных криптовалют. </p>
    </Fragment>
  );
};

export default WelcomeBlock;
