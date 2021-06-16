import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';

function UserBlock() {

  const history = useHistory();

  return (
    <ul onClick={() => history.push(AppRoute.SIGN_IN)} className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to='#' className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
