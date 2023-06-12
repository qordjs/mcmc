import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarView({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    navigation.navigate('Memo', { date: day.dateString });
  };

  const handleMemoAdded = (date, memo) => {
    const updatedMarkedDates = { ...markedDates };
    updatedMarkedDates[date] = { selected: true, marked: true, dotColor: '#009688' };
    setMarkedDates(updatedMarkedDates);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
        onDayPress={handleDayPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
