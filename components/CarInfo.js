import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const CarInfo = ({ modelName, estDelivery }) => {

  return (
    <View style={styles.container}>

      <Text style={styles.modelName}>Tesla {modelName}</Text>
      <View style={styles.colorContainer}>
      </View>
      <View style={styles.estDeliveryContainer}>
        <Text style={styles.estDeliveryLabel}>Tahmini Teslimat Zamanı</Text>
        <Text style={styles.estDeliveryValue}>{estDelivery}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modelName: {
    fontSize: 20,
    fontFamily: "poppins-semibold",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorLabel: {
    fontSize: 16,
    marginTop: 8,
    paddingHorizontal: 15,
    fontFamily: "poppins-regular",
  },
  colorList: {
    flexDirection: "row",
    marginLeft: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "blue",
    borderWidth: 1,
    padding: 3,
    marginHorizontal: 5,
  },
  estDeliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  estDeliveryLabel: {
    fontSize: 16,
    marginTop: 8,
    paddingHorizontal: 15,
    fontFamily: "poppins-regular",
  },
  estDeliveryValue: {
    fontSize: 16,
    marginTop: 8,
    paddingHorizontal: 15,
    fontFamily: "poppins-semibold",
  },
});

export default CarInfo;
