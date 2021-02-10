import {combineReducers} from 'redux';
import CardReducer from './CardReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  cards: CardReducer,
  selectedCardId: SelectionReducer,
});
