import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logoLink}>
      <svg className={css.logo}>
        <use href="/src/assets/icons/icons.svg#icon-logo" />
      </svg>
    </NavLink>
  );
}
