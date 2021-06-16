import React from 'react';
import Main from '../main/main';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import {FILMS_COUNT, AppRoute, MY_FILMS_COUNT, STAR_COUNT} from '../../constants/constants';
import FilmPage from '../film-page/film-page';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';

const Information = {
  GENRE: 'Drama',
  DATE: 2014,
  NAME: 'The Grand Budapest Hotel',
};

function App(props) {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            films={films}
            filmsCount={FILMS_COUNT}
            genreHeader={Information.GENRE}
            date={Information.DATE}
            name={Information.NAME}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList
            filmsCount={MY_FILMS_COUNT}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            filmInfo
            filmReviews={false}
            genreHeader={Information.GENRE}
            date={Information.DATE}
            name={Information.NAME}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview film={films[0]} starCount={STAR_COUNT}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player film={films[0]}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;

