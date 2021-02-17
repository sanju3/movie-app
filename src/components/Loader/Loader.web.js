import React, {Component} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

class Loader extends Component {
  render() {
    return <PropagateLoader color="orange" loading={true} size={30} />;
  }
}

export default Loader;
