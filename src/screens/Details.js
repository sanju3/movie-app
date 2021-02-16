import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {Card} from 'react-native-elements';
import {Text} from 'react-native';
import {Button} from 'react-native';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.route.params.movie,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.root}>
          <Header name="DETAILS" />
          <View style={styles.container}>
            <Card>
              <Card.Title>{this.state.movie.display_title}</Card.Title>
              <Card.Divider />
              <Card.Image source={{uri: this.state.movie.multimedia.src}} />
              <Text style={{marginBottom: 10}}>
                {this.state.movie.summary_short}
              </Text>
              <Text style={{marginBottom: 10}}>
                {'By Line: ' + this.state.movie.byline}
              </Text>
              <Text style={{marginBottom: 10}}>
                {'Publication Date: ' + this.state.movie.publication_date}
              </Text>
              <Button
                title="MAIN PAGE"
                onPress={() => this.props.navigation.navigate('Main')}
              />
            </Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
  },
});
