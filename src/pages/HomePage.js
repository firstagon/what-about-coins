import styles from "./HomePage.module.css";
import TrackerSection from "../components/MainScreen/TrakerSection";
import WelcomeBlock from "../components/MainScreen/WelcomeBlock";

const HomePage = (props) => {
  return (
    <section className={styles.main}>
      <WelcomeBlock />
      <TrackerSection />
    </section>
  );
};

export default HomePage;
