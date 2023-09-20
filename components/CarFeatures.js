import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarFeatures = ({ featureData }) => {
  const features = ["Mesafe", "Maksimum Hız", "Hızlanma (0-60)","Araç Tipi"];

  return (
    <View style={styles.container}>
      <Text style={styles.featuresLabel}>Özellikler:</Text>
      <View style={styles.featureDetailsContainer}>
        {Object.entries(featureData).map(([key, value], index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.featureDetailItem}>{features[index]}</Text>
            <Text style={styles.featureDetailItem}>
              {Array.isArray(value) ? value.join(", ") : value}
              {index === 0 ? " mi" : index === 1 ? " mph" : index === 2 ? " sec" : ""}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    fontFamily: "poppins-regular",
  },
});

export default CarFeatures;
