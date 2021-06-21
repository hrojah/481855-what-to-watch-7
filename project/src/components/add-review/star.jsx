import React from 'react';
import PropTypes from 'prop-types';

function Star(props) {
  const {ratingClickHandler, index} = props;
  return (
    <>
      <input onClick={ratingClickHandler} className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

Star.propTypes = {
  ratingClickHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Star;
