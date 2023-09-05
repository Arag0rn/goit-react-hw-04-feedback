import { StatList, Number } from "./Statistic.styled";

export const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  return (
    <div>
      <StatList>
        <li>Good: <Number>{good}</Number></li>
        <li>Neutral: <Number>{neutral}</Number></li>
        <li>Bad: <Number>{bad}</Number></li>
        <li>Positive Feedback Percentage: <Number>{Math.round(positivePercentage)}%</Number> </li>
      </StatList>
    </div>
  );
};