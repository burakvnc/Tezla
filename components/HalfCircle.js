import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const HalfCircle = ({ color1, color2 }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.halfCircle, { backgroundColor: color1 }]} />
      <View style={[styles.halfCircle, { backgroundColor: color2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius:20,
    overflow: "hidden",
    margin:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
  },
  halfCircle: {
    flex: 1,
    borderBottomRightRadius: Dimensions.get("window").width * 0,
    borderTopRightRadius: Dimensions.get("window").width * 0,
  },
});

export default HalfCircle;
