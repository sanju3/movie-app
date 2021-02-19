import React, {Component} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import Header from '../../components/Header';
import InputBox from '../../components/InputBox';
import {connect} from 'react-redux';
import {createReview} from '../../actions/mainActions';

export class AddMovieReview extends Component {
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

  onFileChange = file => {
    this.setState({
      imagePath: URL.createObjectURL(file.target.files[0]),
    });
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
      alert('Please insert an image');
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
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Header name="Add Movie Review" />
        </View>
        <View style={styles.container}>
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
          <View style={styles.element}>
            {this.state.imagePath ? (
              <Image
                style={styles.image}
                source={{uri: this.state.imagePath}}
              />
            ) : null}

            <input type="file" onChange={this.onFileChange} />
          </View>
          <View style={styles.element}>
            <Button
              title="Add review"
              onPress={() => this.addReviewHandler()}
            />
          </View>
          <View style={styles.element}>
            <Button title="Home" onPress={() => this.props.history.push('/')} />
          </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    height: 40,
    width: '100%',
  },
  container: {
    margin: 10,
    width: '40%',
    alignItems: 'center',
    padding: 10,
  },
  element: {
    width: '70%',
    marginBottom: 10,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
