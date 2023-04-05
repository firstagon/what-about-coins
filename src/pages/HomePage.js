import styles from "./HomePage.module.css";
import TrackerSection from "../components/MainScreen/TrakerSection";
import WelcomeBlock from "../components/MainScreen/WelcomeBlock";
import InfoMain from "../components/MainScreen/InfoMain";

const HomePage = (props) => {
  return (
    <section className={styles.main}>
      <WelcomeBlock />
      <TrackerSection />
      <InfoMain />
    </section>
  );
};

export default HomePage;
