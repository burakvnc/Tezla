import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, totalPriceAtom } from "../states/atom";

const Motor = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const handleItemPress = (index, amount, details) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = {
        ...prevFeatures,
        Motor: { Details: details, Amount: amount },
      };
  
      setTotalPrice((prevTotalPrice) => {
        if (prevTotalPrice === 0) {
          const difference = amount - prevFeatures.Motor.Amount;
          return prevTotalPrice + difference;
        } else {
          const difference = amount - prevFeatures.Motor.Amount;
          return prevTotalPrice + difference;
        }
      });
  
      return newFeatures;
    });
  };
  
  console.log(selectedFeatures)
  
  
  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featuresLabel}>Ekstra Eklentiler:</Text>
      <Text style={styles.featureDetailItem}>Motor</Text>
      {addonsData.Motor.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor:
              selectedFeatures.Motor.Amount === item.Amount
                ? "blue"
                : "#5c5e62",
            height: 48,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10,
            marginVertical: 5,
          }}
          onPress={() => handleItemPress(index, item.Amount, item.Details)}
        >
          <Text style={{ flex: 1 }}>{item.Details}</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>${item.Amount}</Text>
        </TouchableOpacity>
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
  featuresLabel: {
    fontSize: 18,
    color: "#B2B2B5",
    fontFamily: "poppins-regular",
  },
});

export default Motor;
