import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class CardList extends Component {
  renderItem(card) {
    return <ListItem card={card} />;
  }

  render() {
    return (
      <FlatList
        keyExtractor={(card) => card.id.toString()}
        data={this.props.cards}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {cards: state.cards};
};

export default connect(mapStateToProps)(CardList);
