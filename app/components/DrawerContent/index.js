import React, { PropTypes } from 'react'

import {
  View,
} from 'react-native';
import Button from '../Button';

class DrawerContent extends React.Component {
  render () {
    return (
      <View>
        <Button onPress={()=>false}>Funny</Button>
        <Button onPress={()=>false}>Fail</Button>
        <Button onPress={()=>false}>Troll</Button>
        <Button onPress={()=>false}>Here</Button>
        <Button onPress={()=>false}>Others</Button>
      </View>
    );
  }
}

export default DrawerContent;
