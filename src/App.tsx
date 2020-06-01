import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { ThemeContext} from './themes/ThemeProvider';

const App: React.FC = () => {
  // Get the setter function from context
  const setThemeName = useContext(ThemeContext)

  return (
    <div className="App">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setThemeName("userTheme")}
        >
          Set Light Theme
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName("defaultTheme")}
        >
          Set Dark Theme
        </Button>
    </div>
  );
}

export default App;