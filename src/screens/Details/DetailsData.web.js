import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import Toast from 'light-toast';
import {connect} from 'react-redux';
import {updateReview} from '../../actions/mainActions';
import {stylesWeb} from './DetailsData.css';

class DetailsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieS: props.movie,
      updateStatus: false,
      image: '',
    };
  }

  onFileChange = file => {
    this.setState({
      movieS: {
        ...this.state.movieS,
        multimedia: {src: URL.createObjectURL(file.target.files[0])},
      },
      image: URL.createObjectURL(file.target.files[0]),
    });
  };

  changeSummaryTextHandler = text => {
    this.setState({
      movieS: {...this.state.movieS, summary_short: text},
    });
  };
  changeBylineTextHandler = text => {
    this.setState({
      movieS: {...this.state.movieS, byline: text},
    });
  };
  changePublicationTextHandler = text => {
    this.setState({
      movieS: {...this.state.movieS, publication_date: text},
    });
  };

  updateReviewHandler = async () => {
    if (
      JSON.stringify(this.state.movieS) === JSON.stringify(this.props.movieS)
    ) {
      //alert('Nothing to change'); // eslint-disable-line no-alert
      Toast.info('Nothing to change', 3000);
    } else {
      const {movieS} = this.state;
      this.props.updateMovie({
        movieName: this.props.movie.display_title,
        imagePath: movieS.multimedia.src,
        movieHeadline: movieS.headline,
        movieSummary: movieS.summary_short,
        movieByline: movieS.byline,
        moviePublicationDate: movieS.publication_date,
      });
      Toast.success('Review updated', 3000);
      this.setState({
        updateStatus: false,
      });
      this.props.history.push('/');
    }
  };

  render() {
    const {image, movieS, updateStatus} = this.state;
    const {movie} = this.props;

    return (
      <View style={stylesWeb.root}>
        <View style={stylesWeb.container}>
          <View style={stylesWeb.title}>
            <Text>{movie.display_title}</Text>
          </View>
          <View style={stylesWeb.image}>
            {!image || !updateStatus ? (
              <Image
                source={{uri: movie.multimedia.src}}
                style={stylesWeb.imageDim}
              />
            ) : (
              <Image
                source={{uri: movieS.multimedia.src}}
                style={stylesWeb.imageDim}
              />
            )}
            {updateStatus && <input type="file" onChange={this.onFileChange} />}
          </View>
          <View style={stylesWeb.summary}>
            {!updateStatus ? (
              <Text>{movie.summary_short}</Text>
            ) : (
              <TextInput
                multiline={true}
                numberOfLines={3}
                style={stylesWeb.input}
                value={movieS.summary_short}
                onChangeText={this.changeSummaryTextHandler}
              />
            )}
          </View>
          <View style={stylesWeb.byline}>
            {!updateStatus ? (
              <Text>{'By Line: ' + movie.byline}</Text>
            ) : (
              <TextInput
                style={stylesWeb.input}
                value={movieS.byline}
                onChangeText={this.changeBylineTextHandler}
              />
            )}
          </View>
          <View style={stylesWeb.date}>
            {!updateStatus ? (
              <Text>{'Publication Date: ' + movie.publication_date}</Text>
            ) : (
              <TextInput
                style={stylesWeb.input}
                value={movieS.publication_date}
                onChangeText={this.changePublicationTextHandler}
              />
            )}
          </View>
          <View style={stylesWeb.buttonContainer}>
            <TouchableOpacity
              style={stylesWeb.primaryButton}
              onPress={() => this.props.history.push('/')}>
              <Text style={stylesWeb.text}>Home</Text>
            </TouchableOpacity>
            <Text> </Text>
            {updateStatus && (
              <TouchableOpacity
                style={stylesWeb.primaryButton}
                onPress={() => this.updateReviewHandler()}>
                <Text style={stylesWeb.text}>Update</Text>
              </TouchableOpacity>
            )}
            <Text> </Text>
            <TouchableOpacity
              style={stylesWeb.primaryButton}
              onPress={() => this.setState({updateStatus: !updateStatus})}>
              <Text style={stylesWeb.text}>
                {!updateStatus ? 'Edit' : 'Cancell edit'}
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
