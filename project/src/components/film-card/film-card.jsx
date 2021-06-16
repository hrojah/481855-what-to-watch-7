import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../constants/constants';

function FilmCard(props) {
  const {name, previewImage, setFilm, id} = props;

  const history = useHistory();

  return (
    <article onClick={() => history.push(AppRoute.FILM)} onMouseEnter={() => setFilm(id)} id={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="#">{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  setFilm: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FilmCard;
