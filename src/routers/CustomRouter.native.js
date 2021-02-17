import React from 'react';
import {Route, Switch, NativeRouter, Redirect} from 'react-router-native';
import Main from '../screens/Main';
import Details from '../screens/Details';

class CustomRouter extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/details'} exact component={Details} />
          <Redirect to="/" />
        </Switch>
      </NativeRouter>
    );
  }
}

export default CustomRouter;
