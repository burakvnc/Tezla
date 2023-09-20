import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Home from "../pages/Home";
import CarDetail from "../pages/CarDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CompareCars from "../pages/CompareCars";
import Cart from "../pages/Cart";
import { useAtom } from "jotai";
import { selectedFeaturesAtom, resetSelectedFeatures } from "../states/atom";
const Stack = createNativeStackNavigator();

export default function InsideNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerMode: "screen",
          headerTitleStyle: {
            fontFamily: "poppins-regular",
          },
          headerTitleAlign: "center",
          headerTintColor: "#000",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "#5151C6",
          },
          headerShadowVisible: false,
        })}
      >
        <Stack.Screen
          options={({ navigation }) => ({
            // headerLeft: () => <CustomSettingsIcon navigation={navigation} />,
            headerRight: () => <CustomCartIcon navigation={navigation} />,
            headerShown: true,
            title: "Ana Sayfa",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            // headerLeft: () => <CustomGoBackIcon navigation={navigation} />,
            headerShown: false,
            title: "Kayıt Ol",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="Register"
          component={Register}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            // headerLeft: () => <CustomGoBackIcon navigation={navigation} />,
            headerShown: false,
            title: "Giriş Yap",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => <CustomGoBackIcon2 navigation={navigation} />,
            headerRight: () => <CustomCartIcon navigation={navigation} />,
            headerShown: true,
            title: "Sipariş Ver",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="CarDetail"
          component={CarDetail}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => <CustomGoBackIcon navigation={navigation} />,
            headerRight: () => <CustomCartIcon navigation={navigation} />,
            headerShown: true,
            title: "Karşılaştır",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="CompareCars"
          component={CompareCars}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => <CustomGoBackIcon navigation={navigation} />,
            headerShown: true,
            title: "Sepet",
            presentation: "fullScreenModal",
            animationTypeForReplace: "push",
            headerStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          })}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const CustomGoBackIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../assets/images/back.png")}
        style={{ width: 24, height: 24, marginRight: 10 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
const CustomGoBackIcon2 = () => {
  const navigation = useNavigation();
  const [, setSelectedFeatures] = useAtom(selectedFeaturesAtom);

  const handleGoBack = () => {
    const resetValue = resetSelectedFeatures();
    setSelectedFeatures(resetValue);

    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Image
        source={require("../assets/images/back.png")}
        style={{ width: 24, height: 24, marginRight: 10 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const CustomCartIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <Image
        source={require("../assets/images/cart.png")}
        style={{
          width: 24,
          height: 24,
          marginRight: 10,
          resizeMode: "contain",
          tintColor: "#404040",
        }}
      />
    </TouchableOpacity>
  );
};

// const CustomProfileIcon = () => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//       <Image
//         source={require("../assets/images/wanda.png")}
//         style={{ width: 36, height: 36, marginRight: 10 }}
//         resizeMode="contain"
//       />
//     </TouchableOpacity>
//   );
// };
