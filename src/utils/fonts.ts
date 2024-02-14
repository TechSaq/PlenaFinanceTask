import { Platform } from "react-native";

export const FONTS = {
  Manrope: Platform.select({
    ios: {
      ManropeExtraLight: "Manrope-ExtraLight",
      ManropeLight: "Manrope-Light",
      ManropeRegular: "Manrope-Regular",
      ManropeMedium: "Manrope-Medium",
      ManropeSemiBold: "Manrope-SemiBold",
      ManropeBold: "Manrope-Bold",
      ManropeExtraBold: "Manrope-ExtraBold",
    },
    android: {
      ManropeExtraLight: "ManropeExtraLight",
      ManropeLight: "ManropeLight",
      ManropeRegular: "ManropeRegular",
      ManropeMedium: "ManropeMedium",
      ManropeSemiBold: "ManropeSemiBold",
      ManropeBold: "ManropeBold",
      ManropeExtraBold: "ManropeExtraBold",
    }
  })
}