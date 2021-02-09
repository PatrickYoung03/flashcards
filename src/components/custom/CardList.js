import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

const CardList = () => {
  return <View></View>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {cards: state.cards};
};

export default connect(mapStateToProps)(CardList);
