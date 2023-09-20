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

const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
