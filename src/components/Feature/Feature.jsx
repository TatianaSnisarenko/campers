import css from "./Feature.module.css";
const Feature = ({ icon, description }) => {
  return (
    <div className={css.feature}>
      <svg className={css.featureIcon}>
        <use href={`/src/assets/icons/icons.svg#icon-${icon}`} />
      </svg>
      <p className={css.featureDescription}>{description}</p>
    </div>
  );
};

export default Feature;
