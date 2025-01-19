import css from "./SearchBar.module.css";
import icons from "../../assets/icons/icons.svg";
import { useId, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import Button from "../Button/Button";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { selectFilters } from "../../redux/filters/selectors";
import { useSelector, useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import { defaultParams } from "../../utils/params";

export default function SearchBar({ handleSearch }) {
  const locationId = useId();
  const dispatch = useDispatch();
  const filtersFromRedux = useSelector(selectFilters);
  const [formState, setFormState] = useState(filtersFromRedux);

  const clearFilters = () => {
    dispatch(resetFilters());
    setFormState(defaultParams);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(formState);
    e.target.reset();
  };

  return (
    <form className={css.searchBar} onSubmit={handleFormSubmit}>
      <div className={css.locationSection}>
        <label className={css.locationLabel} htmlFor={locationId}>
          Location
          <div className={css.inputWrapper}>
            <svg
              className={`${css.inputIcon} ${
                formState.location ? css.filled : ""
              }`}
            >
              <use href={`${icons}#icon-Map`} />
            </svg>
            <input
              id={locationId}
              type="text"
              name="location"
              value={formState.location || ""}
              onChange={handleInputChange}
              placeholder="Ukraine, Kyiv"
              className={css.locationInput}
            />
          </div>
        </label>
      </div>

      <div className={css.filterSection}>
        <p className={css.filter}>Filters</p>
        <h3 className={css.filterGroupTitle}>Vehicle equipment</h3>
        <div className={css.horizontalLine}></div>
        <div className={css.buttonGroup}>
          <Checkbox
            name="AC"
            checked={formState.AC}
            onChange={() => handleCheckboxChange("AC", !formState.AC)}
            icon="wind"
            label="AC"
          />
          <Checkbox
            name="transmission"
            checked={formState.transmission == "automatic"}
            onChange={() =>
              handleCheckboxChange(
                "transmission",
                formState.transmission == "automatic" ? "" : "automatic"
              )
            }
            label="Automatic"
          />

          <Checkbox
            name="kitchen"
            checked={formState.kitchen}
            onChange={() => handleCheckboxChange("kitchen", !formState.kitchen)}
            label="Kitchen"
          />
          <Checkbox
            name="TV"
            checked={formState.TV}
            onChange={() => handleCheckboxChange("TV", !formState.TV)}
            label="TV"
          />
          <Checkbox
            name="bathroom"
            checked={formState.bathroom}
            onChange={() =>
              handleCheckboxChange("bathroom", !formState.bathroom)
            }
            label="Bathroom"
          />
          <Checkbox
            name="microwave"
            checked={formState.microwave}
            onChange={() =>
              handleCheckboxChange("microwave", !formState.microwave)
            }
            label="Microwave"
          />
          <Checkbox
            name="radio"
            checked={formState.radio}
            onChange={() => handleCheckboxChange("radio", !formState.radio)}
            label="Radio"
          />
          <Checkbox
            name="refrigerator"
            checked={formState.refrigerator}
            onChange={() =>
              handleCheckboxChange("refrigerator", !formState.refrigerator)
            }
            label="Refrigerator"
          />
          <Checkbox
            name="gas"
            checked={formState.gas}
            onChange={() => handleCheckboxChange("gas", !formState.gas)}
            label="Gas"
          />
          <Checkbox
            name="water"
            checked={formState.water}
            onChange={() => handleCheckboxChange("water", !formState.water)}
            label="Water"
          />
          <Checkbox
            name="engine"
            checked={formState.engine == "petrol"}
            onChange={() =>
              handleCheckboxChange(
                "engine",
                formState.engine == "petrol" ? "" : "petrol"
              )
            }
            label="Petrol"
          />
        </div>

        <h3 className={css.filterGroupTitle}>Vehicle type</h3>
        <div className={css.horizontalLine}></div>
        <div className={css.buttonGroup}>
          <RadioButton
            name="form"
            value="panelTruck"
            checked={formState.form === "panelTruck"}
            onChange={handleRadioChange}
            icon="van"
            label="Van"
          />
          <RadioButton
            name="form"
            value="fullyIntegrated"
            checked={formState.form === "fullyIntegrated"}
            onChange={handleRadioChange}
            icon="integrated"
            label="Fully Integrated"
          />
          <RadioButton
            name="form"
            value="alcove"
            checked={formState.form === "alcove"}
            onChange={handleRadioChange}
            icon="alcove"
            label="Alcove"
          />
        </div>
      </div>
      <div className={css.searchButtonGroup}>
        <Button message="Search" type="submit" />
        <SecondaryButton message="Clear Filters" onClick={clearFilters} />
      </div>
    </form>
  );
}
