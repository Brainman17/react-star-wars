import styles from "./ErrorVideo.module.css";
import video from "../video/fail.mp4";

const ErrorVideo = () => {
  return (
    <video className={styles.video} type="video/mp4" autoPlay loop muted>
      <source src={video} />
    </video>
  );
};

export default ErrorVideo;
