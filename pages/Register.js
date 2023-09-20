import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LoginStyle } from "../styles/styles";
import PasswordInput from "../components/PasswordInput";
import usePasswordToggle from "../hooks/PasswordToggle";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "../states/atom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, isPasswordVisible, setPassword, togglePasswordVisibility] =
    usePasswordToggle("");
  const [
    password2,
    isPasswordVisible2,
    setPassword2,
    togglePasswordVisibility2,
  ] = usePasswordToggle("");
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const handleRegister = async () => {
    const requestBody = {
      email: email,
      password: password,
      name: name, // Assuming you want to send 'name' as well
    };

    try {
      const response = await fetch("http://192.168.1.22:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseBody = await response.text();
        const data = jwtDecode(responseBody);

        console.log("Response Data:", data);

        const jwtToken = data.jwtToken;
        console.log("JWT Token:", jwtToken);

        setIsLoggedIn(true);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.header}>
        <Image source={require("../assets/icon.png")} style={LoginStyle.logo} />
        <Text style={LoginStyle.title}>Kayıt Ol</Text>
        <Text style={LoginStyle.subtitle}>
          Hesabınızı güvenli bir şekilde oluşturmak için lütfen aşağıdaki
          bilgileri doldurun.
        </Text>
      </View>
      <View style={LoginStyle.formContainer}>
        <TextInput
          style={LoginStyle.input}
          placeholder="İsim"
          onChangeText={(text) => setName(text)}
        />
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

        <TouchableOpacity
          style={LoginStyle.loginButton}
          onPress={handleRegister}
        >
          <Text style={LoginStyle.loginText}>Kayıt Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LoginStyle.OtherButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={LoginStyle.OtherText}>Zaten Hesabım var.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
