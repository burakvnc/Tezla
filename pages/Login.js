import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LoginStyle } from "../styles/styles";
import PasswordInput from "../components/PasswordInput";
import usePasswordToggle from "../hooks/PasswordToggle";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "../states/atom";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, isPasswordVisible, setPassword, togglePasswordVisibility] =
    usePasswordToggle("");
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const handleLogin = async () => {
    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://tezla-backend-production.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseBody = await response.text();
        console.log("JWT Token:", responseBody);

        setIsLoggedIn(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.header}>
        <Image source={require("../assets/icon.png")} style={LoginStyle.logo} />
        <Text style={LoginStyle.title}>Giriş Yap</Text>
        <Text style={LoginStyle.subtitle}>
          Hesabınıza giriş yapmak için lütfen aşağıdaki bilgileri doldurun.
        </Text>
      </View>
      <View style={LoginStyle.formContainer}>
        <TextInput
          style={LoginStyle.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <PasswordInput
          placeholder="Şifre"
          value={password}
          onChangeText={(text) => setPassword(text)}
          isVisible={isPasswordVisible}
          onToggle={togglePasswordVisibility}
        />
        <TouchableOpacity style={LoginStyle.loginButton} onPress={handleLogin}>
          <Text style={LoginStyle.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LoginStyle.OtherButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={LoginStyle.OtherText}>Garson Hesap Lütfen.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
