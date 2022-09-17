import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section
      style={{
        color: 'rgb(27, 63, 72)',
        border: ' 2px solid black',
        borderRadius: '30%',
        padding: '30px',
        backgroundColor: ' rgb(214, 219, 221)',
      }}
    >
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
