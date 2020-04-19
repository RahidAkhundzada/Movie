import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: 'Batman',
      url: 'http://api.tvmaze.com/search/shows?q=Batman',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Welcome Movie App </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="white"
            onFocus={() => this.onFocus()}
            style={styles.inputStyle}
            onChangeText={text => this.textChanged(text)}
            value={this.state.text}
          />
          <TouchableOpacity onPress={() => this.Search()}>
            <Image
              style={{height: hh / 15, width: ww / 15}}
              source={require('../Images/search2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0076FB',
    height: hh / 10,
  },
  textStyle: {
    fontSize: hh / 30,
    fontWeight: 'bold',
  },
  inputStyle: {
    backgroundColor: '#006CBB',
    width: '90%',
    height: hh / 20,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
    fontSize: hh / 50,
    color: 'white',
  },
});
