import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [numberSearched, setNumberSearched] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [gameState, setGameState] = useState('Start');
  const [supposition, setSupposition] = useState(0);
  const [attempt, setAttempt] = useState(1);

  const init = () => {
    setNumberSearched(Math.floor(Math.random() * 100) + 1);
    setMessage('Guess a number between 1 and 100');
    setGameState('Start');
    setSupposition(-1);
    setAttempt(1);
  };

  const verify = () => {
    setGameState("Make a guess");

    if (supposition > numberSearched) {
      setMessage('Your guess his too high');
    }
    else if (supposition < numberSearched) {
      setMessage('Your guess his too low');
    }
    else {
      alert(`You guessed the number in ${attempt} guesses`);
      init();
    }
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>

      <TextInput
        style={styles.textInputStyle}
        keyboardType='numeric'
        onChangeText={value => setSupposition(value)}
        value={supposition}
      />

      <Button title={gameState} onPress={() => {
        setAttempt(att => att + 1);
        verify();
      }} />
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin:10
  }
});
