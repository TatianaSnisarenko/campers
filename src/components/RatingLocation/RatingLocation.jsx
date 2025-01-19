import clsx from "clsx";
import css from "./RatingLocation.module.css";

export default function RatingLocation({ reviewsCount, rating, location }) {
  return (
    <div className={css.ratingLocation}>
      <div className={css.ratingDetails}>
        <svg
          className={clsx(css.ratingIcon, {
            [css.active]: reviewsCount > 0,
          })}
        >
          <use href={`/src/assets/icons/icons.svg#icon-star`} />
        </svg>
        {reviewsCount > 0 ? (
          <p className={css.rating}>
            {rating}({reviewsCount} Reviews)
          </p>
        ) : (
          <p className={css.rating}>(No reviews yet)</p>
        )}
      </div>
      <div className={css.locationDetails}>
        <svg className={css.locationIcon}>
          <use href="/src/assets/icons/icons.svg#icon-Map" />
        </svg>
        <p className={css.location}>{location}</p>
      </div>
    </div>
  );
}
