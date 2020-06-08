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