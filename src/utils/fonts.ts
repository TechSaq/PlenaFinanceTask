import { Platform } from "react-native";

export const FONTS = {
  ...Platform.select({
    ios: {
      Manrope: "",
      android: {
        ManropeExtraLight: "ManropeExtraLight",
        ManropeLight: "ManropeLight",
        ManropeRegular: "ManropeRegular",
        ManropeMedium: "ManropeMedium",
        ManropeSemiBold: "ManropeSemiBold",
        ManropeBold: "ManropeBold",
        ManropeExtraBold: "ManropeExtraBold",
      }
    }
  })
}