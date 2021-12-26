import { useState } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Button from '../Button';
import Title from '../Title';
import { GOOD, NEUTRAL, BAD } from '../../helpers/constants';
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = function (option) {
    if (option === GOOD) setGood(state => state + 1);
    if (option === NEUTRAL) setNeutral(state => state + 1);
    if (option === BAD) setBad(state => state + 1);
  };
  const onResetButton = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };
  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return total ? Math.floor((good / total) * 100) : 0;
  };
  const percent = countPositiveFeedbackPercentage();
  const stateArray = [GOOD, NEUTRAL, BAD];
  return (
    <>
      <Section flex={false} vertical={false}>
        <Title title="Cafe Expresso" titleType={true} titleStyles="accented" />
        <Title
          title="Please leave feedback"
          titleType={false}
          titleStyles="normal"
        />
        <FeedbackOptions
          options={stateArray}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section flex={true} vertical={true}>
        <Title title="Statistics" titleType={false} titleStyles="accented" />
        {total ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
              listItemStyles="green"
              handleClick={onResetButton}
            />
            <Button
              handleClick={onResetButton}
              title="Reset values"
              content="reset"
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
