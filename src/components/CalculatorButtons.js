import React from 'react';
import {func, string} from 'prop-types';
import {View} from 'react-native';

import Button from './Button';

const CalculatorButtons = ({style, clearMemory, applyOperation, addDigit}) => {
  return (
    <View style={style}>
      <Button label="AC" triple onClick={clearMemory} />
      <Button label="/" operation onClick={applyOperation} />
      <Button label="7" onClick={addDigit} />
      <Button label="8" onClick={addDigit} />
      <Button label="9" onClick={addDigit} />
      <Button label="*" operation onClick={applyOperation} />
      <Button label="4" onClick={addDigit} />
      <Button label="5" onClick={addDigit} />
      <Button label="6" onClick={addDigit} />
      <Button label="-" operation onClick={applyOperation} />
      <Button label="1" onClick={addDigit} />
      <Button label="2" onClick={addDigit} />
      <Button label="3" onClick={addDigit} />
      <Button label="+" operation onClick={applyOperation} />
      <Button label="0" double onClick={addDigit} />
      <Button label="." onClick={addDigit} />
      <Button label="=" operation onClick={applyOperation} />
    </View>
  );
};

CalculatorButtons.propTypes = {
  addDigit: func.isRequired,
  applyOperation: func.isRequired,
  clearMemory: func.isRequired,
  style: string.isRequired,
};

export default CalculatorButtons;
