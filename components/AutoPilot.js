import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, totalPriceAtom } from "../states/atom";

const AutoPilot = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const handleItemPress = (index, amount, details) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      if (newFeatures.AutoPilot && newFeatures.AutoPilot.Details === details) {
        delete newFeatures.AutoPilot;
        setTotalPrice(totalPrice - amount);
      } else {
        newFeatures.AutoPilot = { Details: details, Amount: amount };
        setTotalPrice(totalPrice + amount);
      }
      return newFeatures;
    });
  };

  const isItemSelected = (details) =>
    selectedFeatures.AutoPilot && selectedFeatures.AutoPilot.Details === details;

  const autopilotData = addonsData.Autopilot;

  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>Geliştirilmiş Oto Pilot</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.pricetext}>${autopilotData.EnhancedAutopilot}</Text>
        <Text style={styles.pricetext}>Özellikler</Text>
        {autopilotData.Features.map((feature, index) => (
          <Text style={styles.featureDetailText} key={index}>
            - {feature}
          </Text>
        ))}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            height: 40,
            backgroundColor: isItemSelected(autopilotData.Features) ? "#5c5e62" : "green",
            width: 100,
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            padding: 10,
          }}
          onPress={() => handleItemPress(0, autopilotData.EnhancedAutopilot, autopilotData.Features)}
        >
          <Text style={styles.addremove}>
            {isItemSelected(autopilotData.Features) ? "Çıkar" : "Ekle"}
          </Text>
        </TouchableOpacity>
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
    marginTop: 20,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
  featureDetailText: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: "#606060",
    textAlign: "center",
  },
  pricetext: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
  addremove: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "poppins-regular",
  },
});

export default AutoPilot;
