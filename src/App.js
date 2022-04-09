import React, {useState} from "react";
import './App.css';

function App() {
  // array for collectiong background colors
  let bgColors = [
    '#1e90ff',
    '#f44336',
    '#b37676',
    '#7e0303',
    '#800080',
    '#69dfb0',
    '#018824',
    '#6b6be9',
    '#808080',
  ]

  let [bgBoxes, setBgBoxes] = useState(bgColors) // variable for bgBoxes

  // fuction for change color style and set to bgBoxes
  const changeStyle = () => {
    for (let i = bgColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bgColors[i], bgColors[j]] = [bgColors[j], bgColors[i]];
    }
    setBgBoxes({
      ...bgColors,
      bgBoxes: bgColors
    });
  };

  return (
    <div className="App">
      <div className="main-box-1">
        <div className="boxes box-1" style={{backgroundColor: bgBoxes[0]}} onClick={changeStyle}>1</div>
        <div className="sub-box-1">
          <div className="boxes box-2" style={{backgroundColor: bgBoxes[1]}} onClick={changeStyle}>2</div>
          <div className="sub-box-2">
            <div className="boxes box-3" style={{backgroundColor: bgBoxes[2]}} onClick={changeStyle}>3</div>
            <div className="boxes box-4" style={{backgroundColor: bgBoxes[3]}} onClick={changeStyle}>4</div>
          </div>
        </div>
      </div>

      <div className="main-box-2">
        <div className="boxes box-7" style={{backgroundColor: bgBoxes[6]}} onClick={changeStyle}>7</div>
        <div className="sub-box-3">
          <div className="boxes box-5" style={{backgroundColor: bgBoxes[4]}} onClick={changeStyle}>5</div>
          <div className="boxes box-6" style={{backgroundColor: bgBoxes[5]}} onClick={changeStyle}>6</div>
        </div>
        <div className="sub-box-4">
          <div className="boxes box-8" style={{backgroundColor: bgBoxes[7]}} onClick={changeStyle}>8</div>
          <div className="boxes box-9" style={{backgroundColor: bgBoxes[8]}} onClick={changeStyle}>9</div>
        </div>
      </div>
    </div>
  );
}

export default App;
