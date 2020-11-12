import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";


function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i+1));
    let hold = array[i];
    array[i] = array[x];
    array[x] = hold
  }
  return array
};


class App extends Component {
  // Setting this.state.avengers to the friends json array
  state = {
    avengers, 
    score: 0,
    highScore: 0,
    chooseCard: []
  };


  chooseAvenger = id => {
    // Scores based on avenger selected and randomizes the deck.
      let chooseCard = this.state.chooseCard;
      let score = this.state.score;
      let highScore = this.state.highScore;
  
      if (chooseCard.indexOf(id) === -1) {
        chooseCard.push(id);
        this.scoreIncrement();
        this.randoAvenger();
      } 
      
      else if (this.state.score === 10) {
        alert("WINNER")
        this.setState({
          score: 0,
          chooseCard: []
        });
      } 
      
      else {
        this.setState({
          score: 0,
          chooseCard: []
        });
        alert("YOU LOSE")
      }
  
      if (score > highScore) {
        highScore = score;
        this.setState({ highScore })
      }
    };
  
    scoreIncrement = () => {
      this.setState({ score: this.state.score + 1 });
    }
  
    randoAvenger = () => {
      this.setState({ avengers: randomize(avengers) })
    }
  
  
    render() {
      return (    
        <Wrapper>
           <Title 
              score={this.state.score}
              highScore={this.state.highScore} />
  
              {this.state.avengers.map(avenger => (
                <AvengerCard
                  id={avenger.id}
                  image={avenger.image}
                  chooseAvenger={this.chooseAvenger}
                  />
              ))}
        
      
        </Wrapper>
      ); 
    }
  }
  
  export default App;

