import React from 'react';
import Instagram from './screens/in';
import Facebook from './screens/fb';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
   
      <AppContainer/>
 
  );
  }
  }
  const AppNavigator = createBottomTabNavigator({
    transaction:{screen:Instagram},
    search:{screen:Facebook}
  })

  const AppContainer = createAppContainer(AppNavigator);
