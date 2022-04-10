import './App.css';
import React from 'react';

function App() {
  const color = ["green", "orange", "yellow", "blue", "white", "pink", "white", "brown", "gray", "purple"]
  let [colors, setColors] = React.useState("white");

  function getColor(){
    let color1 = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[color1]; 
    setColors(color[color1]);
  }

return (
    <div className="App">
       <div id='containerText'>
        <p id='tittleColor'>Background Color: {colors}</p>
        <button onClick={getColor}>Click me</button>
      </div>
    </div>
  );
}

export default App;
