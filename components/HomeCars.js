import React from "react";
import { View, FlatList } from "react-native";
import CarItem from "./CarItem";

const CarList = ({ carModels }) => {
  const renderItem = ({ item }) => {
    const modelName = Object.keys(item)[0];
    const modelData = item[modelName];
    return <CarItem modelName={modelName} carModels={carModels} modelData={modelData} />;
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <FlatList
        data={carModels}
        overScrollMode="never"
        showsHorizontalScrollIndicator="false"
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => Object.keys(item)[0]}
      />
    </View>
  );
};

export default CarList;
