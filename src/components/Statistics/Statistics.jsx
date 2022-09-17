import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p style={{ color: 'green' }}>Good: {good}</p>
      <p style={{ color: 'yellowgreen' }}>Neutral: {neutral}</p>
      <p style={{ color: 'red' }}>Bad: {bad}</p>
      <p style={{ color: 'teal' }}>Total: {total} feedback</p>
      <p style={{ color: 'purple' }}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
