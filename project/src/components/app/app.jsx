import React from 'react';
import Main from '../main/main';
import {FILMS_COUNT} from '../../constants/constants';

const Information = {
  GENRE: 'Drama',
  DATE: '2014',
  NAME: 'The Grand Budapest Hotel',
};

function App() {
  return (
    <Main
      filmsCount={FILMS_COUNT}
      genre={Information.GENRE}
      date={Information.DATE}
      name={Information.NAME}
    />
  );
}

export default App;
