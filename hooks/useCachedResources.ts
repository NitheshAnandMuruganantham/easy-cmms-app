import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import Logger from "../utils/logger";

const logger = new Logger("cache");

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        logger.info("Loading fonts");
        await Font.loadAsync({
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
          "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
          "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
          "Poppins-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
          "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
          "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
          "Poppins-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
          "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
          "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
          "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "Poppins-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
          "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
          "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
          "Poppins-ThinItalic": require("../assets/fonts/Poppins-ThinItalic.ttf"),
          "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        logger.info("set loading complete");
        setLoadingComplete(true);
        logger.info("hiding splash screen");
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
