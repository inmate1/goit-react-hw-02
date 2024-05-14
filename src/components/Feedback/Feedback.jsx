import styles from "./Feedback.module.css";

const Feedback = ({
  feedbackGood,
  feedbackNeutral,
  feedbackBad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Good: {feedbackGood}</p>
      <p className={styles.text}>Neutral: {feedbackNeutral}</p>
      <p className={styles.text}>Bad: {feedbackBad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {`${positiveFeedback}%`}</p>
    </div>
  );
};

export default Feedback;
