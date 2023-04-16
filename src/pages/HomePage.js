import styles from "./HomePage.module.css";
import TrackerSection from "../components/MainScreen/TrakerSection";
import WelcomeBlock from "../components/MainScreen/WelcomeBlock";
import InfoMain from "../components/MainScreen/InfoMain";
import HowWorks from "../components/MainScreen/HowWorks";

const HomePage = () => {

  return (
    <section className={styles.main}>
      <WelcomeBlock />
      <TrackerSection />
      <InfoMain />
      <HowWorks />
    </section>
  );
};

export default HomePage;
