import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {`${positiveFeedback}%`}</p>
    </div>
  );
};

// Определение типов пропсов с использованием prop-types
Feedback.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
