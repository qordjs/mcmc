import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

function App({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [memo, setMemo] = useState('');
  const [notes, setNotes] = useState([]);
  const [showMemoInput, setShowMemoInput] = useState(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowMemoInput(false);
  };

  const handleMonthChange = (month) => {
    setSelectedDate(null);
    setShowMemoInput(false);
  };

  const handleAddMemo = () => {
    if (memo.trim() === '') {
      return;
    }

    const newNote = {
      date: selectedDate,
      memo,
    };
    setNotes([...notes, newNote]);
    setMemo('');
    updateMarkedDates(selectedDate, true);
    setShowMemoInput(false);
  };

  const handleDeleteMemo = (date, memo) => {
    const updatedNotes = notes.filter((note) => !(note.date === date && note.memo === memo));
    setNotes(updatedNotes);
    updateMarkedDates(date, updatedNotes.some((note) => note.date === date));
  };

  const updateMarkedDates = (date, marked) => {
    const updatedMarkedDates = { ...markedDates };
    if (marked) {
      updatedMarkedDates[date] = { selected: true, marked: true, dotColor: '#009688' };
    } else {
      delete updatedMarkedDates[date];
    }
    setMarkedDates(updatedMarkedDates);
  };

  const renderMemoInput = () => {
    if (showMemoInput) {
      return (
        <View style={styles.memoContainer}>
          <Text style={styles.memoLabel}></Text>
          <TextInput
            style={styles.memoInput}
            multiline
            value={memo}
            onChangeText={setMemo}
            placeholder="메모를 입력하세요."
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddMemo}>
            <Text style={styles.addButtonLabel}>메모 추가</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  const filteredNotes = notes.filter((note) => note.date === selectedDate);

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
        onMonthChange={handleMonthChange}
      />
      {selectedDate && (
        <View style={styles.memoContainer}>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => setShowMemoInput(true)}
          >
            <Text style={styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
      {renderMemoInput()}
      <View style={styles.notesContainer}>
        <Text style={styles.notesTitle}></Text>
        {filteredNotes.length === 0 ? (
          <Text></Text>
        ) : (
          filteredNotes.map((note, index) => (
            <View key={index} style={styles.noteItem}>
              <Text style={styles.noteDate}>{note.date}</Text>
              <Text>{note.memo}</Text>
              <TouchableOpacity
                style={[styles.deleteButton, { backgroundColor: '#009688' }]}
                onPress={() => handleDeleteMemo(note.date, note.memo)}
              >
                <Text style={styles.deleteButtonText}>삭제</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
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
  memoContainer: {
    marginVertical: 20,
  },
  plusButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#009688',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  memoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memoInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#009688',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notesContainer: {
    marginTop: 20,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noteItem: {
    marginBottom: 10,
  },
  noteDate: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  deleteButton: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
