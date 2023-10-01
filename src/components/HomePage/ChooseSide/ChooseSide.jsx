import cn from "classnames";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";
import falcon from "@static/falcon.jpg";
import darkSide from "@static/dark-side.jpg";
import lightSide from "@static/light-side.jpg";
import styles from "./ChooseSide.module.css";

const sideItemArray = [
  {
    theme: THEME_LIGHT,
    text: "light Side",
    image: lightSide,
    classes: styles.item__light,
  },
  {
    theme: THEME_DARK,
    text: "dark Side",
    image: darkSide,
    classes: styles.item__dark,
  },
  {
    theme: THEME_NEUTRAL,
    text: "Falcon",
    image: falcon,
    classes: styles.item__neutral,
  },
];

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <h3 className={cn(styles.text, classes)}>{text}</h3>
      <img className={styles.image} src={img} alt={text} />
    </div>
  );
};

const ChooseSide = () => {
  return (
    <div className={styles.wrap}>
      {sideItemArray.map(({ theme, text, image, classes }, index) => {
        return (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={image}
            classes={classes}
          />
        );
      })}
    </div>
  );
};

export default ChooseSide;
