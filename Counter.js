import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Counter = props => {
  const [count, setCount] = useState(props.value);
  const [text, setText] = useState('');

  useEffect(() => {
    if (count % 2 === 0) {
      setText('Hello');
    } else {
      setText('World!');
    }
  }, [count, text]);

  return (
    <View style={styles.counterContainer}>
      <Text>Ciekawa liczba: {count}</Text>
      <Text>{text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1415FF',
    borderRadius: 15,
    width: 50,
    marginHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 30,
  },
  helloText: {
    textDecorationColor: '#f0fc',
    marginVertical: 20,
    marginLeft: 50,
  },
  buttonText: {
    textAlign: 'center',
  },
});
export default Counter;
