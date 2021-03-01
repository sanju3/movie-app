import React, {Component} from 'react';
import {View} from 'react-native';
import CustomCard from '../../components/CustomCard/CustomCard';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import {connect} from 'react-redux';
import {deleteReview, getDataFromAPI} from '../../actions/mainActions';
import {storeData} from '../../storage';
import styles from './MainData.css';

class MainData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    !this.props.data && this.props.fetchData();
    this.props.data && this.updateData();
  }

  componentDidUpdate() {
    this.updateData();
  }
  updateData = async () => {
    if (
      this.props.data &&
      JSON.stringify(this.state.data) !== JSON.stringify(this.props.data)
    ) {
      //console.log(this.props.data);
      await storeData('state', this.props.data);
      this.setState({data: this.props.data});
    }
  };

  render() {
    const {data} = this.state;
    const {history, loading, error, deleteR} = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}

          {data &&
            data.length !== 0 &&
            data.map(movie => (
              <View
                style={styles.seporator}
                key={Math.floor(Math.random() * 20000)}>
                <CustomCard movie={movie} history={history} deleteR={deleteR} />
              </View>
            ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.main.loading,
    data: state.main.data,
    error: state.main.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: async () => await dispatch(getDataFromAPI()),
    deleteR: name => dispatch(deleteReview(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainData);
