import { useTheme } from "@react-navigation/native"
import { ThemeType } from "../theming"

export const useCustomTheme = () => {

  const theme = useTheme() as ThemeType;

  return theme;

}