import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [secondsAmount, setSecondsAmout] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (secondsAmount === 0) {
      return;
    }
    setTimeout(() => {
      setSecondsAmout(secondsAmount - 1);
    }, 1000);
    console.log(secondsAmount);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  const startCountDown = () => {
    let value = parseInt(inputValue, 10) * 60;

    setSecondsAmout(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Digite um valor em Minutos</Text>
      <TextInput
        value={inputValue}
        keyboardType="number-pad"
        onChangeText={t => setInputValue(t)}
      />
      <View style={styles.row}>
        <Text>{String(minutes).padStart(2, '0')}</Text>
        <Text>:</Text>
        <Text>{String(seconds).padStart(2, '0')}</Text>
      </View>
      <Button onPress={startCountDown} title="iniciar" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export default App;
