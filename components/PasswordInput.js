import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { LoginStyle } from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

export default function PasswordInput({ placeholder, value, onChangeText, isVisible, onToggle }) {
  return (
    <View>
      <TextInput
        style={LoginStyle.input}
        placeholder={placeholder}
        secureTextEntry={!isVisible}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={LoginStyle.eyeIcon} onPress={onToggle}>
        <FontAwesome
          name={isVisible ? "eye" : "eye-slash"}
          size={20}
          color="#3B4054"
        />
      </TouchableOpacity>
    </View>
  );
}
