import React from 'react';
import {View, StyleSheet} from 'react-native';
import Counter from './Counter';

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Counter value={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CounterScreen;
