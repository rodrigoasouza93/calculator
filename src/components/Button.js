import React from 'react';
import {bool, func, string} from 'prop-types';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#Fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

const Button = ({double, triple, operation, label, onClick}) => {
  const stylesButton = [styles.button];
  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};

Button.defaultProps = {
  double: false,
  operation: false,
  triple: false,
};

Button.propTypes = {
  double: bool,
  label: string.isRequired,
  onClick: func.isRequired,
  operation: bool,
  triple: bool,
};

export default Button;
