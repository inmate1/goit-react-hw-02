import PropTypes from "prop-types";

import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        className={css.optionButton}
        aria-label='button'
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionButton}
        aria-label='button'
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionButton}
        aria-label='button'
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button
          className={css.optionButton}
          aria-label='button'
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};
export default Options;
