import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Toast from 'light-toast';
import {connect} from 'react-redux';
import {updateReview} from '../../actions/mainActions';

class DetailsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
      updateStatus: false,
      image: '',
    };
  }

  onFileChange = file => {
    this.setState({
      movie: {
        ...this.state.movie,
        multimedia: {src: URL.createObjectURL(file.target.files[0])},
      },
      image: URL.createObjectURL(file.target.files[0]),
    });
  };

  changeSummaryTextHandler = text => {
    this.setState({
      movie: {...this.state.movie, summary_short: text},
    });
  };
  changeBylineTextHandler = text => {
    this.setState({
      movie: {...this.state.movie, byline: text},
    });
  };
  changePublicationTextHandler = text => {
    this.setState({
      movie: {...this.state.movie, publication_date: text},
    });
  };

  updateReviewHandler = () => {
    if (JSON.stringify(this.state.movie) === JSON.stringify(this.props.movie)) {
      //alert('Nothing to change'); // eslint-disable-line no-alert
      Toast.info('Nothing to change', 3000);
    } else {
      this.props.updateMovie({
        movieName: this.props.movie.display_title,
        imagePath: this.state.movie.multimedia.src,
        movieHeadline: this.state.movie.headline,
        movieSummary: this.state.movie.summary_short,
        movieByline: this.state.movie.byline,
        moviePublicationDate: this.state.movie.publication_date,
      });
      //alert('Review updated'); // eslint-disable-line no-alert
      Toast.success('Review updated', 3000);
      this.setState({
        updateStatus: false,
      });
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{this.props.movie.display_title}</Text>
          </View>
          <View style={styles.image}>
            {!this.state.image || !this.state.updateStatus ? (
              <Image
                source={{uri: this.props.movie.multimedia.src}}
                style={styles.imageDim}
              />
            ) : (
              <Image
                source={{uri: this.state.movie.multimedia.src}}
                style={styles.imageDim}
              />
            )}
            {this.state.updateStatus ? (
              <input type="file" onChange={this.onFileChange} />
            ) : null}
          </View>
          <View style={styles.summary}>
            {!this.state.updateStatus ? (
              <Text>{this.props.movie.summary_short}</Text>
            ) : (
              <TextInput
                multiline={true}
                numberOfLines={3}
                style={styles.input}
                value={this.state.movie.summary_short}
                onChangeText={this.changeSummaryTextHandler}
              />
            )}
          </View>
          <View style={styles.byline}>
            {!this.state.updateStatus ? (
              <Text>{'By Line: ' + this.props.movie.byline}</Text>
            ) : (
              <TextInput
                style={styles.input}
                value={this.state.movie.byline}
                onChangeText={this.changeBylineTextHandler}
              />
            )}
          </View>
          <View style={styles.date}>
            {!this.state.updateStatus ? (
              <Text>
                {'Publication Date: ' + this.props.movie.publication_date}
              </Text>
            ) : (
              <TextInput
                style={styles.input}
                value={this.state.movie.publication_date}
                onChangeText={this.changePublicationTextHandler}
              />
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.props.history.push('/')}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <Text> </Text>
            {this.state.updateStatus ? (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => this.updateReviewHandler()}>
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            ) : null}
            <Text> </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() =>
                this.setState({updateStatus: !this.state.updateStatus})
              }>
              <Text style={styles.text}>
                {!this.state.updateStatus ? 'Edit' : 'Cancell edit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMovie: movie => dispatch(updateReview(movie)),
  };
};

export default connect(null, mapDispatchToProps)(DetailsData);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    width: '40%',
    height: '40%',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageDim: {
    width: 400,
    height: 250,
    marginBottom: 5,
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
  },
  summary: {
    width: '90%',
    marginBottom: 5,
  },
  byline: {
    width: '90%',
    marginBottom: 5,
  },
  date: {
    width: '90%',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flex: 1,
  },
});
