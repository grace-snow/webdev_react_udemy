// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a React component
const App = () => {
  const buttonText = { text: 'Click me!' };
  // style object
  const style = {
    // button style object 
    buttonStyle: {
      backgroundColor: 'blue', 
      color: '#fff',
      border: 0,
      marginLeft: '10px'
    }
  };

  return (
    <div>
      <label htmlFor="name" className="label" >
        Enter name
      </label>
      <input type="text" id="name" />
      <button style={ style.buttonStyle }>
        { buttonText.text }
      </button>
    </div>
  );
};


// Take the react component and show it on the screen
ReactDOM.render (
  <App/>,
  document.querySelector('#root')
);