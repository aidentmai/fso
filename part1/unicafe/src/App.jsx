import { useState } from "react";

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" />
            </td>
            <td>
              <StatisticLine value={props.good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" />
            </td>
            <td>
              <StatisticLine value={props.neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" />
            </td>
            <td>
              <StatisticLine value={props.bad} />
            </td>
          </tr>
          <tr>
            <td>all</td>
            <td>
              <StatisticLine value={props.good + props.neutral + props.bad} />
            </td>
          </tr>
          <tr>
            <td>average </td>
            <td>
              {(props.good - props.bad) /
                (props.good + props.neutral + props.bad)}
            </td>
          </tr>
          <tr>
            <td>positive </td>
            <td>
              {(props.good / (props.good + props.neutral + props.bad)) * 100} %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <>
      {props.text} {props.value}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
