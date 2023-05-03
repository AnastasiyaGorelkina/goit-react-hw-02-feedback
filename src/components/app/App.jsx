import React, { Component } from 'react';
import Container from './App.styled';
import Controls from 'components/Controls/Controls';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  hendelIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  
  hendelIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  hendelIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };


  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        
        <Controls onIncrementGood={this.hendelIncrementGood} onIncrementNeutral={this.hendelIncrementNeutral} onIncrementBad={this.hendelIncrementBad}
        />
              
        <h3>Statistics</h3>

        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
          
      </Container >
    );
  };
};
  