import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Genre(props) {
  const {genre, index} = props;
  return  (
    <li className={index === 0 ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <Link to="#" className="catalog__genres-link">{genre}</Link>
    </li>
  );
}

Genre.propTypes = {
  index: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Genre;
