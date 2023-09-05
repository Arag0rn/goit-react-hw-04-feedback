import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistic/Statistic";
import { Section } from './Section/Section';
import { Notification } from "./Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback();
    if (total === 0) {
      return 0;
    }
    return (feedback.good / total) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};