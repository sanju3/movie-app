import React from 'react';
import {Route, Switch, NativeRouter, Redirect} from 'react-router-native';
import Main from '../screens/Main';
import Details from '../screens/Details';
import AddMovieReview from '../screens/AddMovieReview/AddMovieReview';

class CustomRouter extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/details'} exact component={Details} />
          <Route path={'/add'} exact component={AddMovieReview} />
          <Redirect to="/" />
        </Switch>
      </NativeRouter>
    );
  }
}

export default CustomRouter;
