import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DestroyedPlanets = ({ destroyedPlanets }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.destroyedPlanets}>{destroyedPlanets}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    destroyedPlanets: {
      fontSize: 80,
      color: '#03e9f4',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      textShadowColor: '#03e9f4',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
  });

export default DestroyedPlanets;
