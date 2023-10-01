import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import favorites_unshaded from "@static/favorite.png";
import favorites_shaded from "@static/favorite-two.png";
import styles from "./PersonPhoto.module.css";
import {
  addPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        addPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <div className={styles.wrap}>
      <img className={styles.photo} src={personPhoto} alt={personName} />
      <button className={styles.btn} onClick={dispatchFavoritePeople}>
        {personFavorite ? (
          <img className={styles.img} src={favorites_shaded} alt="favorites" />
        ) : (
          <img
            className={styles.img}
            src={favorites_unshaded}
            alt="favorites"
          />
        )}
      </button>
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
