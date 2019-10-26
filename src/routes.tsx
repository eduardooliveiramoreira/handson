import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from "./Pages/Main";
import HandsOnPage from "./Pages/HandsOn";
import LecturePage from "./Pages/Palestras";

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/handsOn' component={HandsOnPage} />
      <Route path='/lecture' component={LecturePage} />
    </Switch>
  );
}

export default Routes;

