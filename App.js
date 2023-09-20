import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Provider,useAtom,createStore } from "jotai";
import InsideNavigator from "./navigation/InsideNavigator";
import LoginNavigator from "./navigation/LoginNavigator";
import { isLoggedInAtom } from "./states/atom"; // isLoggedInAtom'u içeri aktarın

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);
  const myStore = createStore();

  myStore.set(isLoggedInAtom, false);
  
  const unsub = myStore.sub(isLoggedInAtom, (newValue) => {
    setIsLoggedIn(newValue)
    console.log("isLoggedInAtom value is changed to", newValue);
  });


  return (
    <Provider store={myStore}>
      {fontLoaded ? (
        isLoggedIn === undefined ? (
          <InsideNavigator />
        ) : (
          <LoginNavigator />
        )
      ) : null}
    </Provider>
  );
}
