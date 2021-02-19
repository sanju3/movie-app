import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import Main from '../screens/Main';
import Details from '../screens/Details';
import AddMovieReview from '../screens/AddMovieReview/AddMovieReview';

class CustomRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/details'} exact component={Details} />
          <Route path={'/add'} exact component={AddMovieReview} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CustomRouter;
