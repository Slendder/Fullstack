import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.title}</button>
);

const Buttons = ({ setGood, setNeutral, setBad }) => (
  <div className="Exercise_06">
    <h1>Give Feedback</h1>
    <Button
      handleClick={() => setGood((prev) => prev + 1)}
      title="Good"
    />
    <Button
      handleClick={() => setNeutral((prev) => prev + 1)}
      title="Neutral"
    />
    <Button
      handleClick={() => setBad((prev) => prev + 1)}
      title="Bad"
    />
  </div>
);

const StatisticLine = (prop) => <h3>{`${prop.name}: ${prop.value}`}</h3>;

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(2);
  const positive = ((good / total) * 100).toFixed(2);

  if (total === 0) return <h2>No feedback given</h2>;

  return (
    <div>
      <StatisticLine name="Good" value={good} />
      <StatisticLine name="Neutral" value={neutral} />
      <StatisticLine name="Bad" value={bad} />
      <StatisticLine name="Total" value={total} isLast />
      <StatisticLine name="Positive percentage" value={`${positive}%`} isLast />
      <StatisticLine name="Average" value={average} isLast />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Buttons setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
