import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, totalPriceAtom } from "../states/atom";

const TowHitch = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const handleItemPress = (index, amount, details) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      if (newFeatures.TowHitch && newFeatures.TowHitch.Details === details) {
        delete newFeatures.TowHitch;
        setTotalPrice(totalPrice - amount);
      } else {
        newFeatures.TowHitch = { Details: details, Amount: amount };
        setTotalPrice(totalPrice + amount);
      }
      return newFeatures;
    });
  };

  const isItemSelected = (details) =>
    selectedFeatures.TowHitch && selectedFeatures.TowHitch.Details === details;

  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>Tow Hitch</Text>
      {addonsData.TowHitch.map((item, index) => (
        <View key={index} style={{ alignItems: "center" }}>
          <Text style={styles.pricetext}>
            ${item.Amount.toLocaleString("en-US")}
          </Text>
          <Text style={{ padding: 20, fontFamily: "poppins-regular" }}>
            {item.Details}
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              height: 40,
              backgroundColor: isItemSelected(item.Details)
                ? "#5c5e62"
                : "green",
              width: 100,
              alignContent: "center",
              alignSelf: "center",
              alignItems: "center",
              padding: 10,
            }}
            onPress={() => handleItemPress(index, item.Amount, item.Details)}
          >
            <Text style={styles.addremove}>
              {isItemSelected(item.Details) ? "Çıkar" : "Ekle"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  featureDetailsContainer: {
    marginTop: 8,
  },
  featureDetailItem: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
  pricetext: {
    color: "#202020",
    fontSize: 14,
    fontFamily: "poppins-regular",
  },
  addremove: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "poppins-regular",
  },
});

export default TowHitch;
