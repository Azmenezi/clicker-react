import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ButtonClick from "./components/ButtonClick";

function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <ButtonClick />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    minHeight: 1000,
  },
});

export default App;
