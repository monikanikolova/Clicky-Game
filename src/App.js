import React, { Component } from 'react';
import './App.css';
// import Cards from "./components/Cards";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
// import pictures from "./pictures.json";

class App extends Component {
    
  render(){
    return (
      <Wrapper>
        <div className="header">
            <Title>
              Emojis Gone Wild
            </Title>
          </div>
      </Wrapper>
    )
  }
}


export default App;
