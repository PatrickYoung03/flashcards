import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import Header from './components/common/header';
import CardList from './components/custom/CardList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <Header headerText="Flashcards" />
        <CardList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
