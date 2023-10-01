import { useNavigate } from "react-router-dom";
import styles from "./PersonLinkBack.module.css";
import img from "../../../static/left-arrow.png";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <button className={styles.link} onClick={() => navigate(-1)}>
        <img className={styles.image} src={img} alt="Go Back" />
      </button>
      <span className={styles.inscription} >Go Back</span>
    </div>
  );
};

export default PersonLinkBack;
