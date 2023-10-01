import { Link } from "react-router-dom";
import { useParams } from "react-router";
import styles from "./PeopleList.module.css";
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {

  const {id} = useParams();
  
  return (
    <ul className={styles.list}>
      {people.map(({ name, id, img }) => {
        return (
          <li className={styles.list__item} key={id}>
            <Link className={styles.list__link} to={`/people/${id}`}>
              <img className={styles.list__photo} src={img} alt="person" />
              <p className={styles.list__title}>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;
