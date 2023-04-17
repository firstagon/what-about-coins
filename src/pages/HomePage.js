import styles from "./HomePage.module.css";
import TrackerSection from "../components/MainScreen/TrakerSection";
import WelcomeBlock from "../components/MainScreen/WelcomeBlock";
import InfoMain from "../components/MainScreen/InfoMain";
import AboutBox from "../components/AboutPage/AboutBox";

const HomePage = () => {

  return (
    <section className={styles.main}>
      <WelcomeBlock />
      <TrackerSection />
      <InfoMain />
      <AboutBox />
    </section>
  );
};

export default HomePage;
