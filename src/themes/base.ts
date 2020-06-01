import { Theme } from "@material-ui/core";
import { userTheme } from './user';
import { defaultTheme } from './default';

export function getThemeByName(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  userTheme,
  defaultTheme
};