import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorageConstants = {
  APP_THEME_MODE: 'appThemeMode'
}

export const LocalStorage = {
  getItem: async (key: string, defaultValue: any = null) => {
    let value = await AsyncStorage.getItem(key) as string;
    value = JSON.parse(value);
    value = value == undefined ? defaultValue : value;
    return value;
  },
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
};
