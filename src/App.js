import React, {Component} from 'react';
import CustomRouter from './routers/CustomRouter';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <CustomRouter />
      </Provider>
    );
  }
}

export default App;
