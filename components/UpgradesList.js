import React from "react";
import { View, StyleSheet } from "react-native";
import Upgrade from "./Upgrade";

const UpgradesList = ({
  upgrades,
  currency,
  setCurrency,
  setPlanetPC,
  perSecond,
  setPerSecond,
  planetPC,
}) => {
  const upgradeList = upgrades
    .filter((upgrade) => upgrade.price <= currency)
    .sort((a, b) => b.price - a.price)
    .map((upgrade) => (
      <Upgrade
        key={upgrade.id}
        upgrade={upgrade}
        setPlanetPC={setPlanetPC}
        setCurrency={setCurrency}
        currency={currency}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
        planetPC={planetPC}
      />
    ));
  return <View style={styles.upgradeList}>{upgradeList}</View>;
};

const styles = StyleSheet.create({
  upgradeList: {
    flexDirection: "row", // Layout children in a line horizontally
    justifyContent: "center", // Align children with equal space around them
    alignItems: "center", // Align children in the center
    flexWrap: "wrap", // Allow multiple lines of components if necessary
    width: "100%", // Full width
  },
});

export default UpgradesList;
