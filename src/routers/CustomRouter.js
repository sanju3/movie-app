import React, {useEffect, useState} from 'react';
import {Route, Switch, NativeRouter, Redirect} from 'react-router-native';
import Main from '../screens/Main';
import Details from '../screens/Details';
import AddMovieReview from '../screens/AddMovieReview/AddMovieReview';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import Signup from '../screens/Signup';
import {getDataLocal, storeData} from '../storage';
import Start from '../screens/Start';

const CustomRouter = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [starting, setStarting] = useState(true);
  const auth = useSelector(state => state.auth);
  const {data} = auth;
  useEffect(() => {
    const syncWithLocal = async () => {
      if (await getDataLocal('auth')) {
        setIsLogged(true);
      } else if (data) {
        await storeData('auth', data);
      }
      setStarting(false);
    };
    syncWithLocal();
  }, [data]);

  return (
    <NativeRouter>
      <Switch>
        <Route
          path={'/'}
          exact
          component={starting ? Start : data || isLogged ? Main : Login}
        />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/signup'} exact component={Signup} />
        <Route
          path={'/details'}
          exact
          component={data || isLogged ? Details : Login}
        />
        <Route
          path={'/add'}
          exact
          component={data || isLogged ? AddMovieReview : Login}
        />
        <Redirect to="/login" />
      </Switch>
    </NativeRouter>
  );
};

export default CustomRouter;
