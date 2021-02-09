import React from 'react'; // to show the title of the app
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#fffaf0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    elevation: 20,
    position: 'relative',
  },
  textStyle: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600',
  },
};
export default Header;
