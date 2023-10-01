import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";
import Favorite from "../Favorite/Favorite";
import logoThemeLight from "../../static/logoThemeLight.png";
import logoThemeDark from "../../static/logoThemeDark.png";
import logoThemeNeutral from "../../static/logoThemeNeutral.png";

import styles from "./Header.module.css";

const Header = () => {
  const [logo, setLogo] = useState(logoThemeLight);

  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setLogo(logoThemeLight); break;
      case THEME_DARK: setLogo(logoThemeDark); break;
      case THEME_NEUTRAL: setLogo(logoThemeNeutral); break;

      default: setLogo(logoThemeLight);
    }
  }, [isTheme]);

  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo"/>
      <ul className={styles.header__list}>
        <li>
          <NavLink className={styles.header__text} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__text} to="/people?page=1">
            People
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__text} to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__text} to="/fail">
            Fail
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__text} to="/not-found">
            NotFound
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </nav>
  );
};

export default Header;
