import React, {Component} from 'react';
import {View, Button, Image} from 'react-native';
import Header from '../../components/Header';
import InputBox from '../../components/InputBox';
import {connect} from 'react-redux';
import {createReview} from '../../actions/mainActions';
import {stylesWeb} from './AddMovieReview.css';

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
      alert('Fill all the Fields'); // eslint-disable-line no-alert
    } else if (!this.state.imagePath) {
      alert('Please insert an image'); // eslint-disable-line no-alert
    } else {
      this.props.insertMovie({
        movieName: this.state.movieName,
        imagePath: this.state.imagePath,
        movieSummary: this.state.movieSummary,
        movieByline: this.state.movieByline,
        moviePublicationDate: this.state.moviePublicationDate,
        movieHeadline: this.state.movieHeadline,
      });
      alert('Review added'); // eslint-disable-line no-alert
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
      <View style={stylesWeb.root}>
        <View style={stylesWeb.header}>
          <Header name="Add Movie Review" />
        </View>
        <View style={stylesWeb.container}>
          <View style={stylesWeb.element}>
            <InputBox
              textTitle="Movie Name"
              textValue={movieName}
              changeValue={this.changeNameTextHandler}
            />
          </View>
          <View style={stylesWeb.element}>
            <InputBox
              textTitle="Movie Headline"
              textValue={movieHeadline}
              changeValue={this.changeHeadlineTextHandler}
            />
          </View>
          <View style={stylesWeb.element}>
            <InputBox
              textTitle="Movie Summary"
              textValue={movieSummary}
              changeValue={this.changeSummaryTextHandler}
            />
          </View>
          <View style={stylesWeb.element}>
            <InputBox
              textTitle="Movie By Line"
              textValue={movieByline}
              changeValue={this.changeBylineTextHandler}
            />
          </View>
          <View style={stylesWeb.element}>
            <InputBox
              textTitle="Movie Publication Date"
              textValue={moviePublicationDate}
              changeValue={this.changePublicationDateTextHandler}
            />
          </View>
          <View style={stylesWeb.element}>
            {imagePath && (
              <Image style={stylesWeb.image} source={{uri: imagePath}} />
            )}

            <input type="file" onChange={this.onFileChange} />
          </View>
          <View style={stylesWeb.element}>
            <Button
              title="Add review"
              onPress={() => this.addReviewHandler()}
            />
          </View>
          <View style={stylesWeb.element}>
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
