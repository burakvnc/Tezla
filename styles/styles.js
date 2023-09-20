// styles.js
import { StyleSheet } from "react-native";
const colors = {
  primary: "#A349A4",
  secondary: "#FFC90E",
  background: "#F6F6F6",
  item: "#FEFEFE",
  white: "#fff",
  blue: "#39434F",
};

const textStyles = {
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  paragraph: {
    fontSize: 16,
    color: colors.secondary,
  },
};
export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    resizeMode:"contain",
    width: 100,
    height: 75,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 10,
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.blue,
    color: colors.blue,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 30,
    marginBottom:15
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  loginButton: {
    backgroundColor: colors.blue,
    alignItems: "center",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    marginTop: 40,
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
  },
  OtherButton: {
    backgroundColor: colors.white,
    alignItems: "center",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
  },
  OtherText: {
    color: colors.blue,
    fontSize: 14,
  },
});
export { colors, textStyles };
