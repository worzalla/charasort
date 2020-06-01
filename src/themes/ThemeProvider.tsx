// Todo: Use userTheme iff one is provided, else use default theme

import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName } from './base';

export const ThemeContext = React.createContext((themeName: string): void => {});

const ThemeProvider: React.FC = (props) => {
    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState('userTheme');

    // Retrieve the theme object by theme name
    const theme = getThemeByName(themeName);

    return (
        <ThemeContext.Provider value={_setThemeName}>
          <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </ThemeContext.Provider>
      );
}

export default ThemeProvider;

//const styles: (theme: Theme) => StyleRules<string> = theme =>
// createStyles({
//   root: {
    
//   },
//   app: {
//     textAlign: "center"
//   },
//   appLogo: {
//     height: "40vmin",
//     pointerEvents: "none",
//     "@media (prefers-reduced-motion: no-preference) ": {
//       animation: "App-logo-float infinite 3s ease-in-out"
//     }
//   },
//   appHeader: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "calc(10px + 2vmin)"
//   },
//   appLink: {
//     color: "rgb(112, 76, 182)"
//   }
// });