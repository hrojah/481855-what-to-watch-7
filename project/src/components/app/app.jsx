import React from 'react';
import Main from '../main/main';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import {FILMS_COUNT, AppRoute, MY_FILMS_COUNT, MORE_LIKE_FILMS, REVIEWS_COUNT} from '../../constants/constants';
import FilmPage from '../film-page/film-page';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {films, myListFilms, moreLikeFilms, reviews} from '../../constants/constants';

const Information = {
  GENRE: 'Drama',
  DATE: 2014,
  NAME: 'The Grand Budapest Hotel',
};

function App() {
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
            films={myListFilms}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            filmInfo
            filmReviews={false}
            genreHeader={Information.GENRE}
            date={Information.DATE}
            name={Information.NAME}
            films={moreLikeFilms}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <FilmPage
            filmsCount={MORE_LIKE_FILMS}
            filmInfo={false}
            filmReviews
            genreHeader={Information.GENRE}
            date={Information.DATE}
            name={Information.NAME}
            reviewsCount={REVIEWS_COUNT}
            films={moreLikeFilms}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

