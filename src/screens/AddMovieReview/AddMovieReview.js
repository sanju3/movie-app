import React, {Component} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import InputBox from '../../components/InputBox';
import {createReview} from '../../actions/mainActions';
import {styles} from './AddMovieReview.css';
import ImagePickerContainer from '../../components/imagePickerContainer/ImagePickerContainer';

class AddMovieReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      imagePath: '',
      movieSummary: '',
      movieByline: '',
      moviePublicationDate: '',
      movieHeadline: '',
    };
  }

  imageDataHandler = response => {
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
    } else if (!this.state.imagePath) {
      alert('Capture or insert an image');
    } else {
      this.props.insertMovie({
        movieName: this.state.movieName,
        imagePath: this.state.imagePath,
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
    const {
      movieName,
      movieHeadline,
      movieSummary,
      movieByline,
      moviePublicationDate,
      imagePath,
    } = this.state;
    return (
      <View style={styles.root}>
        <Header name="Add Movie Review" />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Name"
                textValue={movieName}
                changeValue={this.changeNameTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Headline"
                textValue={movieHeadline}
                changeValue={this.changeHeadlineTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Summary"
                textValue={movieSummary}
                changeValue={this.changeSummaryTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie By Line"
                textValue={movieByline}
                changeValue={this.changeBylineTextHandler}
              />
            </View>
            <View style={styles.element}>
              <InputBox
                textTitle="Movie Publication Date"
                textValue={moviePublicationDate}
                changeValue={this.changePublicationDateTextHandler}
              />
            </View>
            {imagePath !== '' && (
              <View style={styles.element}>
                <Image source={{uri: imagePath}} style={styles.imageStyle} />
              </View>
            )}
            <View style={styles.element}>
              <ImagePickerContainer handleImagePicker={this.imageDataHandler} />
            </View>
            <View style={styles.element}>
              <Button
                title="Clear Image"
                onPress={() =>
                  this.setState({
                    imagePath: '',
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
