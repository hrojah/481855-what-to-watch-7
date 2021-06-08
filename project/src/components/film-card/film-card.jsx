import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {name, poster} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default FilmCard;
