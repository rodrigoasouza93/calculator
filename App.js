import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Display from './src/components/Display';
import CalculatorButtons from './src/components/CalculatorButtons';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

const App = () => {
  const [displayValue, setDisplayValue] = useState(initialState.displayValue);
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay);
  const [operation, setOperation] = useState(initialState.operation);
  const [values, setValues] = useState(initialState.values);
  const [current, setCurrent] = useState(initialState.current);

  const addDigit = n => {
    const hasToClearDisplay = displayValue === '0' || clearDisplay;

    if (n === '.' && !hasToClearDisplay && displayValue.includes('.')) {
      return;
    }

    const currentValue = hasToClearDisplay ? '' : displayValue;
    const newDisplayValue = currentValue + n;
    setDisplayValue(newDisplayValue);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(newDisplayValue);
      const newValues = [...values];
      newValues[current] = newValue;
      setValues(newValues)
    }
  };

  const clearMemory = () => {
    setDisplayValue(initialState.displayValue);
    setClearDisplay(initialState.clearDisplay);
    setOperation(initialState.operation);
    setValues(initialState.values);
    setCurrent(initialState.current);
  };

  const applyOperation = newOperation => {
    if (current === 0) {
      setOperation(newOperation);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = newOperation === '=';
      const newValues = [...values]
      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`);
      } catch (e) {
        newValues[0] = values[0];
      }

      newValues[1] = 0;
      setDisplayValue(newValues[0].toString());
      setOperation(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(true);
      setValues(newValues);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <CalculatorButtons 
        style={styles.buttons}
        clearMemory={clearMemory}
        applyOperation={applyOperation}
        addDigit={addDigit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default App;
