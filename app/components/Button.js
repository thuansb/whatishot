import React, { PropTypes } from 'react'

import RN, {
  View,
  Platform,
  Text,
} from 'react-native';

const Touchable = Platform.select({
  'ios': RN.TouchableHighlight,
  'android': RN.TouchableNativeFeedback
})();

const Button = (props) => {
  return (
    <Touchable onPress={this.props.onPress}>
      <Text>
        {this.props.children}
      </Text>
    </Touchable>
  )
}

Button.props = {
  text: PropTypes.string.required,
  onPress: PropTypes.func.required,
}

export default Button;
