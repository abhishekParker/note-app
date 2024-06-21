import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontSize: 32, // Change this to your desired font size
    },
  },
};
