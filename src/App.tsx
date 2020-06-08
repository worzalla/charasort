import React from 'react';
import EmphasizedButton from './components/Atoms/Buttons/EmphasizedButton';

const App: React.FC = () => {
  return (
    <div className="App">
     <EmphasizedButton text="Click Me!" onClick={() => { console.log('uwu;;;'); }} />
    </div>
  );
}

export default App;