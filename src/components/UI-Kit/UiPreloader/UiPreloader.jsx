import styles from "./UiPreloader.module.css";
import Preloader from "../../../static/Cube-1s-200px.svg";

const UiPreloader = () => {
  return <img className={styles.loader} src={Preloader} alt="Preloader" />;
};

export default UiPreloader;
