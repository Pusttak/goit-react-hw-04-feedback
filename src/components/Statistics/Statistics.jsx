import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <ul>
      <li>
        <p className={css.rating}>Good: {good}</p>
      </li>
      <li>
        <p className={css.rating}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.rating}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.rating}>Total: {total}</p>
      </li>
      <li>
        <p className={css.rating}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
