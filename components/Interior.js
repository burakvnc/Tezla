import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HalfCircle from "./HalfCircle";
import { useAtom } from "jotai";
import { selectedFeaturesAtom } from "../states/atom";


const Interior = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);

  const handleItemPress = (colorName, colorDetails, index) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      newFeatures.Interior = { Colors: colorDetails, index: index, Name: colorName };
      return newFeatures;
    });
  };
  const InteriorColor = {
    "All Black": ["#1F1F24", "#000000"],
    "Black and White": ["#e3e3e3", "#111"],
    "Black and Tan": ["#918151", "#111"],
  };
  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>İç Renk</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {Object.entries(addonsData.Interior).map(([key, value], index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{
              justifyContent: "space-between",
              borderWidth: 2,
              borderColor: "#B2B2B5",
              borderRadius: 40,
              height: 46,
              width: 46,
              margin: 5,
              backgroundColor: index === selectedFeatures.Interior.index ? "blue" : "transparent",
            }}
            onPress={() => handleItemPress(value,InteriorColor[value], index)}
          >
            <HalfCircle color1={InteriorColor[value][0]} color2={InteriorColor[value][1]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  featuresLabel: {
    fontSize: 18,
    color: "#B2B2B5",
    fontFamily: "poppins-regular",
  },
  featureDetailsContainer: {
    marginTop: 8,
  },
  featureDetailItem: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
});

export default Interior;
