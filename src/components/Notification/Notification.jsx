import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css';

const Notification = ({ message }) => <p className={css.text}>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
