import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';

import {connect} from 'react-redux';

import * as actions from '../../actions';

import CardSection from '../common/CardSection';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {card, selectedCardId} = this.props;

    if (card.item.id === selectedCardId) {
      return (
        <CardSection>
          <Text>{this.props.card.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {id, title} = this.props.card.item;

    const handlePress = () => {
      this.props.selectCard(id);
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state) => {
  return {selectedCardId: state.selectedCardId};
};

export default connect(mapStateToProps, actions)(ListItem);
