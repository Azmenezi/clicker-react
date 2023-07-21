import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Currency = ({ currency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>{currency}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    currency: {
      fontSize: 24,
      textAlign: 'right',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 5,
    },
  });

export default Currency;
