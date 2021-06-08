import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';

function FilmReviews(props) {
  const {reviewsCount} = props;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {new Array(reviewsCount).fill().map((i) => <Review key={i}/>)}
      </div>
      <div className="film-card__reviews-col">
        {new Array(reviewsCount).fill().map((i) => <Review key={i}/>)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  reviewsCount: PropTypes.number.isRequired,
};

export default FilmReviews;
