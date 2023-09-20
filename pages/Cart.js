import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom,totalPriceAtom } from "../states/atom";

const Cart = () => {
  const [selectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice] = useAtom(totalPriceAtom);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sepetinizdeki Araba</Text>
      <View style={styles.featureContainer}>
        <Text style={styles.featureDetails}>
          Motor: {selectedFeatures.Motor.Details} - Amount: 
          {selectedFeatures.Motor.Amount}
        </Text>
        <Text style={styles.featureDetails}>
          Color: {selectedFeatures.Color.Name}
        </Text>
        <Text style={styles.featureDetails}>
          Wheels: {selectedFeatures.Wheels.Name}
        </Text>
        <Text style={styles.featureDetails}>
          Interior: {selectedFeatures.Interior.Name}
        </Text>
        <Text style={styles.featureDetails}>
          TowHitch:
          {selectedFeatures.TowHitch.Amount}
        </Text>
        <Text style={styles.featureDetails}>
          AutoPilot:
          {selectedFeatures.AutoPilot.Amount}
        </Text>
        <Text style={styles.featureDetails}>
          SelfDrive:
          {selectedFeatures.SelfDrive.Amount}
        </Text>
        <Text style={styles.featureDetails}>
          Total Price:
          ${totalPrice.toLocaleString("en")}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  featureContainer: {
    marginBottom: 16,
  },
  featureName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  featureDetails: {
    fontSize: 14,
  },
});

export default Cart;
