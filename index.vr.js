import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
// import Menu from './components/menu.vr';

export default class CourtToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
       
      </View>
    );
  } 
};

AppRegistry.registerComponent('CourtToVR', () => CourtToVR);
