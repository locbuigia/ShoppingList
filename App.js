import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import ShoppingList from './components/shoppingList/ShoppingList';

const App = () => {
  return (
    <View style={styles.container}>
      <ShoppingList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
