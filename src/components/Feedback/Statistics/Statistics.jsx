import PropTypes from 'prop-types';
import Notification from '../Notification';

import styles from '../feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <>
        <p className={styles.statistics}>Good:{good}</p>
        <p className={styles.statistics}>Neutral:{neutral}</p>
        <p className={styles.statistics}>Bad:{bad}</p>
        <p className={styles.statistics}>Total:{total}</p>
        <p className={styles.statistics}>
          Positive feedback:{positiveFeedback}%
        </p>
      </>
    );
  }
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
