import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bookMark from "@static/bookmark.svg";
import styles from "./Favorite.module.css";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [counter, setCounter] = useState(0);
  const storeData = useSelector((store) => store.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;

    length.toString().length > 2 ? setCounter("...") : setCounter(length);
  }, [storeData]);

  return (
    <div className={styles.wrap}>
      <Link className={styles.header__text} to="/favorites">
        <span className={styles.counter}>{counter}</span>
        <img className={styles.icon} src={bookMark} alt="favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
