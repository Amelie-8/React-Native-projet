
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.component {
  render () {
    return (
    <View style={styles.container}>
      <Text>Salut ça va!</Text>
      <Text>Change automatiquement.</Text>
      <Text>Secoue ton téléphone pour ouvrir le menu développeur.</Text>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
