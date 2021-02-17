import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Main from '../screens/Main';
import Details from '../screens/Details';

class CustomRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/details'} exact component={Details} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CustomRouter;
