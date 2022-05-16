import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={css.title}>{title}</h2>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
