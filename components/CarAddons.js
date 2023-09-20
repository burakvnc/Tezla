import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Wheels from "./Wheels";
import Interior from "./Interior";
import AutoPilot from "./AutoPilot";
import Motor from "./Motor";
import Paint from "./Paint";
import TowHitch from "./TowHitch";
import SelfDriving from "./SelfDriving";

const CarAddons = ({ addonsData }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Motor addonsData={addonsData} />
          <Paint addonsData={addonsData} />
          <Wheels addonsData={addonsData} />
          <Interior addonsData={addonsData} />
          <TowHitch addonsData={addonsData} />
          <AutoPilot addonsData={addonsData} />
          <SelfDriving addonsData={addonsData} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

});

export default CarAddons;
