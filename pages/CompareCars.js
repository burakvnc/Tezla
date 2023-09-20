import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function CompareCars({ route }) {
  const { carModels, selectedCar, modelName } = route.params;
  const otherCarModels = carModels.filter(
    (car) => car[modelName] !== selectedCar
  );
  const featuresJSON = {};
  const imagesJSON = {};

  otherCarModels.forEach((car, index) => {
    const carName = Object.keys(car)[0];
    const features = car[carName].Features;
    const images = car[carName].Images;
    featuresJSON[carName] = features;
    imagesJSON[carName] = images;
  });
  console.log(imagesJSON);
  return (
    <ScrollView style={styles.container}>
      {Object.entries(featuresJSON).map(([model, features], index) => (
        <View style={styles.row} key={index}>
          <View style={styles.column}>
            <Image
              source={{ uri: selectedCar.Images.FrontView }}
              style={styles.image}
            />
            <Text style={styles.text}>Tesla {modelName}</Text>
            {Object.entries(selectedCar.Features).map(
              ([featureKey, featureValue], featureIndex) => (
                <View key={featureIndex}>
                  <Text style={styles.text2}>{featureKey}</Text>
                  <Text style={styles.text}>{featureValue}</Text>
                </View>
              )
            )}
          </View>
          <View style={styles.column}>
            <Image
              source={{ uri: imagesJSON[model].FrontView }}
              style={styles.image}
            />
            <Text style={styles.text}>Tesla {model}</Text>
            {Object.entries(features).map(
              ([featureKey, featureValue], featureIndex) => (
                <View key={featureIndex}>
                  <Text style={styles.text2}>{featureKey}</Text>
                  <Text style={styles.text}>{featureValue}</Text>
                </View>
              )
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "#111",
    textAlign: "center",
    fontFamily:"poppins-regular"
  },
  text2: {
    color: "#ba46ae",
    textAlign: "center",
    fontFamily:"poppins-regular"
  },
  column: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 100,
  },
});
