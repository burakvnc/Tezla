import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, totalPriceAtom } from "../states/atom";

const SelfDriving = ({ addonsData }) => {
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const handleItemPress = (index, amount, details) => {
    setSelectedFeatures((prevFeatures) => {
      const newFeatures = { ...prevFeatures };
      if (newFeatures.SelfDrive && newFeatures.SelfDrive.Details === details) {
        delete newFeatures.SelfDrive;
        setTotalPrice(totalPrice - amount);
      } else {
        newFeatures.SelfDrive = { Details: details, Amount: amount };
        setTotalPrice(totalPrice + amount);
      }
      return newFeatures;
    });
  };

  const isItemSelected = (details) =>
    selectedFeatures.SelfDrive &&
    selectedFeatures.SelfDrive.Details === details;

  const SelfDriveData = addonsData.Autopilot.FullSelf_DrivingCapability;

  return (
    <View style={styles.featureDetailsContainer}>
      <Text style={styles.featureDetailItem}>Oto Sürüş Kapasitesi</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.pricetext}>${SelfDriveData.Price}</Text>
        <Text style={styles.pricetext}>{SelfDriveData.CapabilityDetails}</Text>
        {SelfDriveData.AdditionalFeatures.map((feature, index) => (
          <Text style={styles.featureDetailText} key={index}>
            ● {feature}
          </Text>
        ))}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            height: 40,
            backgroundColor: isItemSelected(SelfDriveData.CapabilityDetails)
              ? "#5c5e62"
              : "green",
            width: 100,
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            padding: 10,
          }}
          onPress={() =>
            handleItemPress(
              0,
              SelfDriveData.Price,
              SelfDriveData.CapabilityDetails
            )
          }
        >
          <Text style={styles.addremove}>
            {isItemSelected(SelfDriveData.CapabilityDetails) ? "Çıkar" : "Ekle"}
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
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  addremove: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "poppins-regular",
  },
});

export default SelfDriving;
