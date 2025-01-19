import css from "./RadioButton.module.css";
import clsx from "clsx";

const RadioButton = ({ name, value, checked, onChange, icon, label }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(name, checked ? null : value);
  };

  return (
    <label
      className={clsx(css.filterButton, checked && css.active, css[icon])}
      onClick={handleClick}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        readOnly
        className={css.hiddenInput}
      />
      <svg className={css.icon}>
        <use href={`/src/assets/icons/icons.svg#icon-${icon}`} />
      </svg>
      {label}
    </label>
  );
};

export default RadioButton;
