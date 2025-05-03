const Feedback = ({ state, total, positive }) => {
  console.log("Feedback:", state.bad, state.good);
  return (
    <>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

export default Feedback;
