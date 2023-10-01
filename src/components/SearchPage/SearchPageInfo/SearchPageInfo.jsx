import styles from "./SearchPageInfo.module.css";
import { Link } from "react-router-dom";
import Preloader from '../../Preloader/Preloader';

const SearchPageInfo = ({ people, isLoading }) => {
  return (
    <>
      {people.length > 0 ? (
        <ul className={styles.list}>
          {people.map(({ id, name, img }) => {
            return (
              <li className={styles.list__item} key={id}>
                <Link to={`/people/${id}`}>
                  <img className={styles.person__photo} src={img} alt={name} />
                  <p className={styles.person__name}>{name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (isLoading ? <Preloader /> :
        <span className={styles.person__cmnt}>No results</span>
      )}
    </>
  );
};

export default SearchPageInfo;
