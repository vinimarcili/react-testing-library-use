import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <>
      <button style={{backgroundColor: !buttonDisabled ? buttonColor : 'gray'}} onClick={() => setButtonColor(buttonColor === 'red' ? 'blue' : 'red')} disabled={buttonDisabled}>
        Change to {replaceCamelWithSpaces(newColor)}
      </button>
      <input type="checkbox" name='disabled-button-color' id='disabled-button-color' onChange={(e) => setButtonDisabled(e.target.checked)} aria-checked={buttonDisabled} defaultChecked={buttonDisabled} />
      <label htmlFor='disabled-button-color'>Disable button</label>
    </>
  )
}

export default App;
