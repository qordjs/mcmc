// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>춘식이</Text>
      <Image
        style={styles.image}
        source={require('./chun.png')}
        ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen; 