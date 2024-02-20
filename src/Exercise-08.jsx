import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(2);
  const positivePercentage = ((good / total) * 100).toFixed(2);

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const SetToValue = (newValue, SetValue) => SetValue(newValue);

  return (
    <div>
      <div className="Exercise_06">
        <h1>Give Feedback</h1>
        <button onClick={() => SetToValue(good + 1, setGood)}>Good</button>
        <button onClick={() => SetToValue(neutral + 1, setNeutral)}>
          neutral
        </button>
        <button onClick={() => SetToValue(bad + 1, setBad)}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
