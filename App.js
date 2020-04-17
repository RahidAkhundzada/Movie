import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Opening from './src/Screens/Opening';
import Movies from './src/Screens/Movies';

const StackApp = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="Opening">
          <StackApp.Screen
            name="Opening"
            component={Opening}
            options={() => ({headerShown: false})}
          />
          <StackApp.Screen
            name="Movies"
            component={Movies}
            options={() => ({headerShown: false})}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
