import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Upgrade = ({
  upgrade,
  setPlanetPC,
  setCurrency,
  currency,
  perSecond,
  setPerSecond,
  planetPC,
}) => {
  const changeDPC = () => {
    setPlanetPC(planetPC + upgrade.DPC);
    setCurrency(currency - upgrade.price);
  };
  const changePerSecond = () => {
    setPerSecond(perSecond + upgrade.persecond);
  };
  const decider = () => {
    if (upgrade.DPC > 0) {
      return (
        <>
          <View style={styles.container}>
            <Text style={styles.upgradeInfo}>
              {upgrade.DPC}{" "}
              <MaterialCommunityIcons
                name="weight-lifter"
                size={20}
                color="#03e9f4"
              />
            </Text>
            <Text style={styles.upgradeInfo}>{upgrade.price}$</Text>
          </View>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.container}>
            <Text style={styles.upgradeInfo}>
              {upgrade.persecond}{" "}
              <Entypo name="back-in-time" size={20} color="#03e9f4" />
            </Text>
            <Text style={styles.upgradeInfo}>{upgrade.price}$</Text>
          </View>
        </>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.upgradeButton}
      onPress={() => {
        changeDPC();
        changePerSecond();
      }}
    >
      {decider()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  upgradeButton: {
    width: "45%",
    padding: 10,
    backgroundColor: "#050801",
    color: "#03e9f4",

    fontWeight: "bold",
    borderRadius: 5,
    margin: 2.5,
    overflow: "hidden",
  },
  upgradeInfo: {
    color: "#03e9f4",
    fontSize: 20,
  },
});

export default Upgrade;
