import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom } from "../states/atom";
const WheelImages = {
  "18’’ Aero Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-18-aero.png",
  "19’’ Sport Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-19-sport.png",
  "20’’ Sonic Carbon Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/gemini_wheels.png?",
  "22’’ Turbine Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/induction_wheels.png?",
  "19’’ Tempest Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/gemini_wheels.png?",
  "21’’ Arachnid Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/induction_wheels.png?",
  "19’’ Gemini Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/gemini_wheels.png?",
  "20’’ Induction Wheels":
    "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/induction_wheels.png?",
};

const Wheels = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);

  const handleItemPress = (colorName, colorDetails, index) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      newFeatures.Wheels = { Image: colorDetails, index: index, Name: colorName };
      return newFeatures;
    });
  };


  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>Tekerlekler</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {Object.entries(addonsData.Wheels).map(([key, value], index) => (
          <TouchableOpacity
            key={key}
            style={{
              justifyContent: "space-between",
              borderWidth: 2,
              borderColor: selectedFeatures.Wheels.index === index ? "blue" : "#B2B2B5",
              borderRadius: 40,
              height: 46,
              width: 46,
              margin: 5,
            }}
            onPress={() => handleItemPress(value,WheelImages[value],index)}
          >
            {WheelImages[value] && (
              <Image
                source={{ uri: WheelImages[value] }}
                style={{ width: 40, height: 40, margin: 1 }}
              />
            )}
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

export default Wheels;
