import React, { Component } from 'react';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();

    this.state = { counter: 0 };
  }

  render()
  {
    return (
      <div className="App">
        <h1> Hello World! </h1>
      </div>
    );
  }
}

export default App;
