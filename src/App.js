// Import React and components
import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";

//Set up variables to track score and guesses
let correctGuesses = 0;
let topScore = 0;
let message = "Click on a emoji to begin!";


class App extends Component {

  state = {
    pictures,
    correctGuesses,
    topScore,
    message
  };


  setClicked = id => {

    const pictures = this.state.pictures;
    const clickedPicture = pictures.filter(match => match.id === id);

    // If picture was not clicked
    if (clickedPicture[0].clicked === false) {

      clickedPicture[0].clicked = true;
      correctGuesses++;
      message = "You Got It!";

      // Handles the top score display
      if (correctGuesses > topScore) {
        topScore = correctGuesses;
        this.setState({ topScore });
      }
      pictures.sort((a, b) => { return 0.5 - Math.random() });

      this.setState({ pictures });
      this.setState({ correctGuesses });
      this.setState({ message });

    }
    // If picture was clicked
    else {
      correctGuesses = 0;
      message = "You already chose that emoji! Begin New Game";

      for (let i = 0; i < pictures.length; i++) {
        pictures[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ correctGuesses });
      this.setState({ pictures });
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="heading shadow">
          <Title>
            EMOJIS HAVING FUN
            </Title>
          <div className="scoreBoard">
            <h2 className="scoreSummary">
              Click on an image to earn points, but don't click on any of them more than once!
                </h2>

            <h3 className="scoreSummary">
              {this.state.message}
            </h3>

            <h3 className="scoreSummary">
              Score: {this.state.correctGuesses}   ︱   Best Score: {this.state.topScore}
            </h3>

          </div>
        </div>

        {this.state.pictures.map(match => (
          <Card
            setClicked={this.setClicked}
            id={match.id}
            key={match.id}
            image={match.image}
          />
        ))}
      </Wrapper>
    )
  }
}


export default App;
