import styles from "./SearchInput.module.css";
import cn from "classnames";
import cross from "@static/x.png";

const SearchInput = ({ value, handleInputChange }) => {
  return (
    <form className={styles.form__group}>
      <input
        className={styles.form__field}
        type="text"
        value={value}
        onChange={(evt) => handleInputChange(evt.target.value)}
        placeholder="Input characters's name"
      />
      <img
        disabled
        className={cn(styles.cross, !value && styles.cross__disabled)}
        src={cross}
        alt="cross"
        onClick={() => value && handleInputChange("")}
      />
    </form>
  );
};

export default SearchInput;
