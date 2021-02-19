import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {updateReview} from '../../actions/mainActions';
import CustomDialog from '../../components/CustomDialog';
import {captureImage, chooseImage} from '../../utils';

class DetailsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
      updateStatus: false,
      dialogStatus: false,
    };
  }

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
  changeImageHandler = () => {
    this.setState({dialogStatus: true});
  };

  captureImageData = response => {
    this.setState({
      movie: {...this.state.movie, multimedia: {src: response.uri}},
      dialogStatus: false,
    });
  };

  chooseImageData = response => {
    this.setState({
      movie: {...this.state.movie, multimedia: {src: response.uri}},
      dialogStatus: false,
    });
  };

  updateReviewHandler = () => {
    if (JSON.stringify(this.state.movie) === JSON.stringify(this.props.movie)) {
      alert('Nothing to change');
    } else {
      this.props.updateMovie({
        movieName: this.props.movie.display_title,
        imagePath: this.state.movie.multimedia.src,
        movieHeadline: this.state.movie.headline,
        movieSummary: this.state.movie.summary_short,
        movieByline: this.state.movie.byline,
        moviePublicationDate: this.state.movie.publication_date,
      });
      alert('Review updated');
      this.setState({
        updateStatus: false,
      });
      this.props.history.push('/');
    }
  };
  render() {
    return (
      <View style={styles.root}>
        {this.state.dialogStatus ? (
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
            visibility={() =>
              this.setState({dialogStatus: !this.state.dialogStatus})
            }
            isVisible={this.state.dialogStatus}
          />
        ) : null}
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{this.props.movie.display_title}</Text>
          </View>
          <View style={styles.imageContainer}>
            {!this.state.updateStatus ? (
              <Image
                style={styles.image}
                source={{uri: this.props.movie.multimedia.src}}
              />
            ) : (
              <TouchableOpacity onPress={() => this.changeImageHandler()}>
                <Image
                  style={styles.image}
                  source={{uri: this.state.movie.multimedia.src}}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.summary}>
            {!this.state.updateStatus ? (
              <Text>{this.props.movie.summary_short}</Text>
            ) : (
              <TextInput
                multiline={true}
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
          <View style={styles.publicationDate}>
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
          <View style={styles.buttons}>
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
                {!this.state.updateStatus ? 'Edit details' : 'Cancel edit'}
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
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
    height: 700,
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageContainer: {
    height: '30%',
    marginBottom: 10,
  },
  summary: {
    marginBottom: 10,
  },
  byline: {
    marginBottom: 10,
  },
  publicationDate: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
  },
});
