// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>콘</Text>
    <Image
      style={styles.image}
      source={require('./kkk.jpeg')}
      ></Image>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 