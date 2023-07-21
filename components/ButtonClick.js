import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Currency from "./Currency";
import DestroyedPlanets from "./DestroyedPlanets";
import UpgradesList from "./UpgradesList";
import { upgrades } from "../upgrades";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const ButtonClick = () => {
  const [currency, setCurrency] = useState(0);
  const [destroyedPlanets, setDestroyedPlanets] = useState(0);
  const [planetPC, setPlanetPC] = useState(1);
  const [perSecond, setPerSecond] = useState(0);

  const [used, setUsed] = useState(false);
  const addPerSecond = useCallback(() => {
    if (perSecond > 0) {
      setCurrency((prevCurrency) => prevCurrency + perSecond);
      setDestroyedPlanets((prevDestroyed) => prevDestroyed + perSecond);
    }
  }, [perSecond]);

  useEffect(() => {
    let timer = setInterval(() => {
      addPerSecond();
    }, 1000);

    return () => clearInterval(timer);
  }, [addPerSecond]);

  useEffect(() => {
    if (destroyedPlanets > 1000000000 && used === false) {
      setUsed((used) => (used = true));
      playSound();
    }
  }, [destroyedPlanets, used]);

  function handleKeyPress() {
    setCurrency(currency + planetPC);
    setDestroyedPlanets(destroyedPlanets + planetPC);
  }

  function loveYou() {
    if (destroyedPlanets > 10000000000) {
      return "I love you <3";
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.littleContainer}>
        <View style={styles.currencyContainer}>
          <View style={styles.currency1}>
            <Text style={styles.infoText}>{loveYou()}</Text>
          </View>
          <View style={styles.currency2}>
            <Currency currency={currency} />
          </View>
        </View>
        <View style={styles.destroyedPlanetsCont}>
          <View>
            <DestroyedPlanets destroyedPlanets={destroyedPlanets} />
            <TouchableOpacity
              style={styles.mainButton}
              onPress={handleKeyPress}
            >
              <Text style={styles.buttonText}>Destroy a planet</Text>
            </TouchableOpacity>
            <Text style={styles.descText}>
              {planetPC}{" "}
              <MaterialCommunityIcons
                name="weight-lifter"
                size={20}
                color="rgba(255,255,255,0.4)"
              />{" "}
              and {perSecond}{" "}
              <Entypo
                name="back-in-time"
                size={20}
                color="rgba(255,255,255,0.4)"
              />
            </Text>
          </View>
        </View>
        <Text style={styles.upgradesText}>upgrades:</Text>
        <View style={styles.upgradeListContainer}>
          <UpgradesList
            upgrades={upgrades}
            setPlanetPC={setPlanetPC}
            setCurrency={setCurrency}
            currency={currency}
            perSecond={perSecond}
            setPerSecond={setPerSecond}
            planetPC={planetPC}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 50,

    // minHeight: "100%",
  },
  littleContainer: {
    width: "100%",
    // minHeight: "80%",
  },
  currencyContainer: {
    flexDirection: "row",
    marginBottom: windowWidth > 768 ? "1%" : "22%",
  },
  currency1: {
    width: "50%",
    right: -20,
  },
  infoText: {
    color: "rgba(255,255,255,0.4)",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  },
  currency2: {
    width: "50%",
    left: -20,
  },
  destroyedPlanetsCont: {
    // justifyContent: "center",
    // alignItems: "center",
    // height: "50%",
  },
  mainButton: {
    marginTop: "20%",
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: "#03e9f4",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  descText: {
    color: "rgba(255,255,255,0.4)",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: "5%",
  },
  upgradesText: {
    color: "#03e9f4",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginBottom: "5%",
    opacity: 0.7,
  },
  upgradeListContainer: {
    // height: "20%",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
});
export default ButtonClick;
