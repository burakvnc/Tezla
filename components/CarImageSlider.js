import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const CarImageSlider = ({ images }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        height={Dimensions.get("window").width * 0.4}
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 275,
  },
  wrapper: {},
  slide: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default CarImageSlider;
