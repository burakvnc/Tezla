import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CarItem = ({ modelData, modelName,carModels }) => {
  const formattedPrice = modelData.PurchasePrice.VehiclePrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const propertyValuePairs = Object.entries(modelData.Features).map(([key, value]) => `${value}`);
  const result = propertyValuePairs.join(", ");

  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate("CarDetail", { modelData, modelName, formattedPrice,carModels });
  };
   return (
     <TouchableOpacity
       style={styles.container}
       activeOpacity={1}
       onPress={navigateToDetail}
     >
       <Image source={{ uri: modelData.Images.FrontView }} style={styles.Image} />
       <Text style={styles.modelName}>Tesla {modelName}</Text>
       <Text style={styles.modelFeatures} numberOfLines={2} ellipsizeMode="tail">
         {result}
       </Text>
       <View style={styles.priceArea}>
         <Text style={styles.estDelivery}>{modelData.EstDelivery}</Text>
         <Text style={styles.price}>{formattedPrice}</Text>
       </View>
     </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    margin: "2%",
    width: "46%",
    shadowColor: "#d5d5d5",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modelName: {
    fontSize: 16,
    fontWeight: "400",
    padding: 5,
    color: "#B2B2B5",
    fontFamily:"poppins-regular"
  },
  modelFeatures: {
    fontSize: 18,
    padding: 5,
    fontWeight: "400",
    color: "#000",
    fontFamily:"poppins-regular"
  },
  price: {
    fontSize: 14,
    color: "green",
    fontFamily:"poppins-regular"
  },
  priceArea: {
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  estDelivery: {
    fontSize: 12,
    fontFamily:"poppins-regular"
  },
  orderButton: {
    backgroundColor: "blue",
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  Image: {
    marginTop: 25,
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },
  orderButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default CarItem;
