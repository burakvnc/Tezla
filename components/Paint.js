import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HalfCircle from "./HalfCircle";
import { useAtom } from "jotai";
import { selectedFeaturesAtom } from "../states/atom";

const Paint = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);

  const handleItemPress = (colorName, colorDetails, index) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      newFeatures.Color = { Colors: colorDetails, index: index, Name: colorName };
      return newFeatures;
    });
  };
  

  const colorMappings = {
    "Midnight Silver Metallic": ["#1F1F24", "#000000"],
    "Pearl White Multi-Coat": ["#e3e3e3", "#999"],
    "Deep Blue Metallic": ["#02033B", "#05014a"],
    "Solid Black": ["#000000", "#404040"],
    "Red Multi-Coat": ["#FF0000", "#f44336"],
  };

  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>Renkler</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-around",
          padding:20,
        }}
      >
        {addonsData.Paint.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{
              flexDirection: "row",
              borderRadius:25,
              borderWidth: 2,
              borderColor: selectedFeatures.Color.index === index ? "blue" : "#5c5e62",
              height: 46,
              width: 46,
              alignItems: "center",
            }}
            onPress={() => handleItemPress(item,colorMappings[item], index)}
          >
            <HalfCircle
              color1={colorMappings[item][0]}
              color2={colorMappings[item][1]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureDetailsContainer: {
    marginTop: 8,
  },
  featureDetailItem: {
    fontSize: 16,
    marginTop:20,
    fontFamily: "poppins-regular",
    textAlign:"center"
  },
});

export default Paint;
