import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import CarImageSlider from "../components/CarImageSlider";
import CarInfo from "../components/CarInfo";
import CarFeatures from "../components/CarFeatures";
import CarAddons from "../components/CarAddons";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, totalPriceAtom } from "../states/atom";
import { useNavigation } from "@react-navigation/native";
const CarDetail = ({ route }) => {
  const { modelData, modelName, carModels } = route.params;
  const [selectedFeatures, setSelectedFeatures] = useAtom(selectedFeaturesAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);
  const navigation = useNavigation();
  const compareCars = () => {
    navigation.navigate("CompareCars", {
      carModels: carModels,
      selectedCar: modelData,
      modelName: modelName,
    });
  };
  const addCart = () => {
    navigation.navigate("Cart", {
      carModels: carModels,
      selectedCar: modelData,
      modelName: modelName,
    });
  };
  useEffect(() => {
    setTotalPrice(modelData.PurchasePrice.VehiclePrice);
  }, [modelData.PurchasePrice.VehiclePrice]);

  const updateSelectedFeatures = (newFeatures) => {
    setSelectedFeatures(newFeatures);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <CarImageSlider images={Object.values(modelData.Images)} />
        <CarInfo
          modelName={modelName}
          formattedPrice={modelData.PurchasePrice.VehiclePrice}
          estDelivery={modelData.EstDelivery}
        />
        <CarFeatures
          featureData={modelData.Features}
          updateSelectedFeatures={updateSelectedFeatures}
        />
        <CarAddons addonsData={modelData.FeatureDetails} />
      </ScrollView>
      <View style={styles.priceContainer}>
        <TouchableOpacity style={styles.addCart} onPress={compareCars}>
          <Text style={styles.priceLabel}>Karşılaştır</Text>
        </TouchableOpacity>
        <Text style={styles.price}>${totalPrice.toLocaleString("en-EN")}</Text>
        <TouchableOpacity style={styles.addCart} onPress={addCart}>
          <Text style={styles.priceLabel}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e1e1e1",
    height: 65,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  addCart: {
    backgroundColor: "#39434F",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  priceLabel: {
    fontSize: 18,
    color: "white",
    fontFamily: "poppins-regular",
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 18,
    color: "black",
    fontFamily: "poppins-regular",
    paddingHorizontal: 15,
  },
});

export default CarDetail;
