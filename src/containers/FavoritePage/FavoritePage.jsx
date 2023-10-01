import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          name: item[1].name,
          img: item[1].img,
          // ...img[1]
        };
      });
      setPeople(res);
    }
  }, [storeData]);

  return (
    <div>
      <h1 className='title'>FavoritesPage</h1>
      {people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No data</h2>}
      
    </div>
  );
};

export default FavoritePage;
