import PropTypes from "prop-types";
import styles from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";
import UiButton from "../../UI-Kit/UiButton/UiButton";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
    const handleChangePrev = () => getResource(prevPage);
    const handleChangeNext = () => getResource(nextPage);

  return (
    <section className={styles.wrap}>
      <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
        <UiButton
          text="Previous"
          handleChangeNav={handleChangePrev}
          disabled={!prevPage}
        //   theme='light'
        />
      </Link>
      <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
      <UiButton
          text="Next"
          handleChangeNav={handleChangeNext}
          disabled={!nextPage}
        />
      </Link>
    </section>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
