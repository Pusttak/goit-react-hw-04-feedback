import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setRating = evt => {
    const { name } = evt.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, feedback) => acc + feedback,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((100 / this.countTotalFeedback()) * this.state.good) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttonsName = Object.keys(this.state);

    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'start',
          marginTop: '150px',
          alignItems: 'start',
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={buttonsName}
            onLeaveFeedback={this.setRating}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
