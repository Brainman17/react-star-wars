import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./UiButton.module.css";

const UiButton = ({
  handleChangeNav,
  disabled,
  text,
  theme = "dark",
  classes,
}) => {
  return (
    <button
      onClick={handleChangeNav}
      disabled={disabled}
      className={cn(styles.btn, styles[theme], classes)}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  handleChangeNav: PropTypes.func,
  navPage: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UiButton;
