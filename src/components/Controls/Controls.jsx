import React from 'react';
import PropTypes from 'prop-types';
import Button from './Controls.styled';

const Controls = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
          data-type={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

Controls.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;