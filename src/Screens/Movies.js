import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
//import Header from '../components/Header';
import Urll from '../components/Urll';
//`http://api.tvmaze.com/search/shows?q=${this.state.text}`
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: 'Batman',
      url: null,
      link: 'http://api.tvmaze.com/search/shows?q=',
    };
  }
  async componentDidMount() {
    let url = `http://api.tvmaze.com/search/shows?q=${this.state.link +
      this.state.text}`;

    const response = await fetch(this.state.link + this.state.text);
    var data1 = await response.json();
    this.setState({
      data: data1,
      url: url,
    });
  }

  render() {
    const {data} = this.state;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.textStyle}> Welcome Movie App </Text>
          <TextInput
            placeholder="Search here...Batman"
            placeholderTextColor="white"
            style={styles.inputStyle}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={() =>
            data.map(item => (
              <View
                key={item.id}
                style={{marginBottom: 10, marginLeft: 2, marginTop: 2}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 1}}>
                    <Image
                      source={{uri: item.show.image.medium}}
                      style={{width: ww / 2, height: hh / 3}}
                    />
                  </View>

                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 'bold',
                        color: 'red',
                        borderBottomWidth: 1,
                      }}>
                      {item.show.name}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          }
        />
      </View>
    );
  }
}
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
