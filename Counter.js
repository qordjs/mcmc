import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const Counter = () => {
  const { count, increment } = useContext(AppContext);

  const handleIncrement = () => {
    increment();
  };

  return (
    <View>
      <Text style={styles.text}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <View style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Increment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  text:{
    marginTop:300
  },
  button:{
    marginTop:30
  }

})

export default Counter;
