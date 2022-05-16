import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.button__list}>
    {options.map(el => (
      <li key={el}>
        <button
          type="button"
          name={el}
          className={css.button}
          onClick={onLeaveFeedback}
        >
          {el[0].toUpperCase() + el.slice(1)}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
