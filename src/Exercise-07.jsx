import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
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
      <div className="Exercise_07">
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {good + neutral + bad}</p>
        <p>Average {((good - bad) / (good + neutral + bad)).toFixed(2)} </p>
        <p>Positive {((good / (good + neutral + bad)) * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default App;
