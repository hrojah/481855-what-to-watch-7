import React from 'react';

function Review() {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed films in years.</p>

        <footer className="review__details">
          <cite className="review__author">Kate Muir</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">8,9</div>
    </div>
  );
}

export default Review;
