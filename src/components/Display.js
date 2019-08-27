import React from 'react';
import {string} from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});

const Display = ({value}) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

Display.propTypes = {
  value: string.isRequired,
};

export default Display;
