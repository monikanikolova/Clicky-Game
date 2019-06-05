import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";

let correctGuesses = 0;
let bestScore = 0;
let message = "Click on a minion to begin!";

class App extends Component {

  state = {
    pictures,
    correctGuesses,
    bestScore,
    message
  };
    
  render(){
    return (
      <Wrapper>
        <div className="header">
            <Title>
              Emojis Gone Wild
            </Title>
            <div className= "scoreBoard">
                <h2 className="scoreSummary">
                    Click on an image to earn points, but don't click on any of them more than once!
                </h2>
                
                <h3 className="scoreSummary">
                    {this.state.message}
                </h3>
                
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.correctGuesses}   ︱   Best Score: {this.state.bestScore}
                </h3>
                
            </div>
          </div>
        

      </Wrapper>
    )
  }
}


export default App;
