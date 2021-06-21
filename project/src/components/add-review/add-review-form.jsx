import React, {useState} from 'react';
import Star from './star';
import {STAR_COUNT} from '../../constants/constants';

function AddReviewForm() {
  const [userReview, setUserReview] = useState([8, 'Review text']);

  const ratingClickHandler = (evt) => {
    setUserReview([evt.target.value, userReview[1]]);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {new Array(STAR_COUNT).fill().map((item, index) => <Star key={`star-${STAR_COUNT - index}`} ratingClickHandler={ratingClickHandler} index={STAR_COUNT - index}/>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={(evt) => setUserReview([userReview[0], evt.target.value])} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;