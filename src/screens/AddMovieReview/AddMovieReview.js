import React, {Component} from 'react';
import {View, StyleSheet, Image, Button, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import InputBox from '../../components/InputBox';
import {createReview} from '../../actions/mainActions';
import {captureImage, chooseImage} from '../../utils';

class AddMovieReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      imagePath: {},
      movieSummary: '',
      movieByline: '',
      moviePublicationDate: '',
      movieHeadline: '',
    };
  }

  captureImageData = response => {
    this.setState({imagePath: response});
  };

  chooseImageData = response => {
    this.setState({imagePath: response});
  };

  changeNameTextHandler = text => {
    this.setState({movieName: text});
  };
  changeSummaryTextHandler = text => {
    this.setState({movieSummary: text});
  };
  changeBylineTextHandler = text => {
    this.setState({movieByline: text});
  };
  changePublicationDateTextHandler = text => {
    this.setState({moviePublicationDate: text});
  };
  changeHeadlineTextHandler = text => {
    this.setState({movieHeadline: text});
  };

  addReviewHandler = () => {
    if (
      !(
        this.state.movieName &&
        this.state.movieSummary &&
        this.state.movieByline &&
        this.state.moviePublicationDate
      )
    ) {
      alert('Fill all the Fields');
    } else if (!this.state.imagePath.uri) {
      alert('Capture or insert an image');
    } else {
      this.props.insertMovie({
        movieName: this.state.movieName,
        imagePath: this.state.imagePath.uri,
        movieSummary: this.state.movieSummary,
        movieByline: this.state.movieByline,
        moviePublicationDate: this.state.moviePublicationDate,
        movieHeadline: this.state.movieHeadline,
      });
      alert('Review added');
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <Header name="Add Movie Review" />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Name"
                textValue={this.state.movieName}
                changeValue={this.changeNameTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Headline"
                textValue={this.state.movieHeadline}
                changeValue={this.changeHeadlineTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Summary"
                textValue={this.state.movieSummary}
                changeValue={this.changeSummaryTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie By Line"
                textValue={this.state.movieByline}
                changeValue={this.changeBylineTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Publication Date"
                textValue={this.state.moviePublicationDate}
                changeValue={this.changePublicationDateTextHandler}
              />
            </View>
            {this.state.imagePath.uri ? (
              <View style={styles.element}>
                <Image
                  source={{uri: this.state.imagePath.uri}}
                  style={styles.imageStyle}
                />
              </View>
            ) : null}
            <View style={styles.elementButtons}>
              <Button
                title="Capture Image"
                onPress={() => captureImage('photo', this.captureImageData)}
              />

              <Button
                title="Choose Image"
                onPress={() => chooseImage('photo', this.chooseImageData)}
              />

              <Button
                title="Clear Image"
                onPress={() =>
                  this.setState({
                    imagePath: {},
                  })
                }
              />
            </View>
            <View style={styles.element}>
              <Button
                title="Add review"
                onPress={() => this.addReviewHandler()}
              />
            </View>
            <View style={styles.element}>
              <Button
                title="Home"
                onPress={() => this.props.history.push('/')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    insertMovie: movie => dispatch(createReview(movie)),
  };
};

export default connect(null, mapDispatchToProps)(AddMovieReview);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    margin: 10,
    marginBottom: 40,
  },
  element: {
    marginBottom: 10,
  },
  elementButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
});
