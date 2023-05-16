import React, { Component } from 'react';
import Controls from 'components/Controls/Controls';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Container from './App.styled';

const options = ['good', 'bad', 'neutral'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

  onClickButton = e => {
    const element = e.currentTarget.dataset.type;
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

  render() {
  
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please Leave feedback">
          <Controls
            options={options}
            onLeaveFeedback={this.onClickButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification massege="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
