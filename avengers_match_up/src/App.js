import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";

class App extends Component {
  // Setting this.state.avengers to the friends json array
  state = {
    avengers: avengers
  };

  chooseAvenger = id => {
    // Filter this.state.avengers for avengers with an id not equal to the id being removed
    const avengers = this.state.avengers.filter(avenger => avenger.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ avengers: avengers });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Avengers Assemble</Title>
        {this.state.avengers.map(avenger => (
          <AvengerCard
            id={avenger.id}
            image={avenger.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
