import css from "./Checkbox.module.css";
import clsx from "clsx";

const Checkbox = ({ name, checked, onChange, label }) => {
  return (
    <label className={clsx(css.filterButton, { [css.active]: checked })}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={css.hiddenInput}
      />
      <svg className={css.icon}>
        <use href={`/src/assets/icons/icons.svg#icon-${name}`} />
      </svg>
      {label}
    </label>
  );
};

export default Checkbox;
