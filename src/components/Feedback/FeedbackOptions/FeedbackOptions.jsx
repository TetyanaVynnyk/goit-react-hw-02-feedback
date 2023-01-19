import styles from '../feedback.module.css';

const FeedbackOptions = ({ increaseVotes }) => {
  return (
    <>
      <ul className={styles.btnWrapper}>
        <li>
          <button
            onClick={() => increaseVotes('good')}
            className={styles.btn}
            type="button"
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => increaseVotes('neutral')}
            className={styles.btn}
            type="button"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => increaseVotes('bad')}
            className={styles.btn}
            type="button"
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default FeedbackOptions;
