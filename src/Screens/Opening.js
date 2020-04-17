import React, {Component} from 'react';
import {View, ActivityIndicator, Image, Dimensions} from 'react-native';

const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

export default class Opening extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('Movies');
    }, 3000);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../Images/movie.png')}
          style={{width: ww, height: hh / 2}}
        />
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}
