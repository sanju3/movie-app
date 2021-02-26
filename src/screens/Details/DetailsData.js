import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {updateReview} from '../../actions/mainActions';
import CustomDialog from '../../components/CustomDialog';
import {captureImage, chooseImage} from '../../utils';
import {styles} from './DetailsData.css';

class DetailsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieS: props.movie,
      updateStatus: false,
      dialogStatus: false,
    };
  }

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
  changeImageHandler = () => {
    this.setState({dialogStatus: true});
  };

  captureImageData = response => {
    this.setState({
      movieS: {...this.state.movieS, multimedia: {src: response.uri}},
      dialogStatus: false,
    });
  };

  chooseImageData = response => {
    this.setState({
      movieS: {...this.state.movieS, multimedia: {src: response.uri}},
      dialogStatus: false,
    });
  };

  updateReviewHandler = () => {
    if (
      JSON.stringify(this.state.movieS) === JSON.stringify(this.props.movie)
    ) {
      alert('Nothing to change');
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
      alert('Review updated');
      this.setState({
        updateStatus: false,
      });
      this.props.history.push('/');
    }
  };
  render() {
    const {dialogStatus, movieS, updateStatus} = this.state;
    const {movie} = this.props;
    return (
      <View style={styles.root}>
        {dialogStatus && (
          <CustomDialog
            title="Edit image"
            description="Choose your preffered method"
            operations={[
              {
                method: captureImage,
                operation: this.captureImageData,
                data: 'photo',
                label: 'Camera',
              },
              {
                method: chooseImage,
                operation: this.chooseImageData,
                data: 'photo',
                label: 'Gallery',
              },
            ]}
            visibility={() => this.setState({dialogStatus: !dialogStatus})}
            isVisible={dialogStatus}
          />
        )}
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{movie.display_title}</Text>
          </View>
          <View style={styles.imageContainer}>
            {!updateStatus ? (
              <Image
                style={styles.image}
                source={{uri: movie.multimedia.src}}
              />
            ) : (
              <TouchableOpacity onPress={() => this.changeImageHandler()}>
                <Image
                  style={styles.image}
                  source={{uri: movieS.multimedia.src}}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.summary}>
            {!updateStatus ? (
              <Text>{movie.summary_short}</Text>
            ) : (
              <TextInput
                multiline={true}
                style={styles.input}
                value={movieS.summary_short}
                onChangeText={this.changeSummaryTextHandler}
              />
            )}
          </View>
          <View style={styles.byline}>
            {!updateStatus ? (
              <Text>{'By Line: ' + movie.byline}</Text>
            ) : (
              <TextInput
                style={styles.input}
                value={movieS.byline}
                onChangeText={this.changeBylineTextHandler}
              />
            )}
          </View>
          <View style={styles.publicationDate}>
            {!updateStatus ? (
              <Text>{'Publication Date: ' + movie.publication_date}</Text>
            ) : (
              <TextInput
                style={styles.input}
                value={movieS.publication_date}
                onChangeText={this.changePublicationTextHandler}
              />
            )}
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.props.history.push('/')}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <Text> </Text>
            {updateStatus && (
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => this.updateReviewHandler()}>
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            )}
            <Text> </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.setState({updateStatus: !updateStatus})}>
              <Text style={styles.text}>
                {!updateStatus ? 'Edit details' : 'Cancel edit'}
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
