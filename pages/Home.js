import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import api from "../api/api"; // Axios konfigürasyonlarını içe aktarın
import CarList from "../components/HomeCars";

const Home = () => {
  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    api
      .get("/cars/carlist")
      .then((response) => {
        setCarModels(response.data);
      })
      .catch((error) => {
        console.error("API isteği başarısız: ", error);
      });
  }, []);
  console.log(carModels);
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <CarList carModels={carModels.Models} />
    </View>
  );
};

export default Home;
