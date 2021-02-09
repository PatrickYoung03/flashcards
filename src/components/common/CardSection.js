import React from 'react'; //section details
import {View} from 'react-native';

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#4b0082',
    position: 'relative',
  },
};
export default CardSection;
