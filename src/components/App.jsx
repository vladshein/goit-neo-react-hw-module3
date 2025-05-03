import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notifications from "./Notifications/Notifications";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  let positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        state={feedback}
        total={totalFeedback}
        update={updateFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback state={feedback} total={totalFeedback} positive={positive} />
      ) : (
        <Notifications />
      )}
      {console.log("In between")}
    </>
  );
};

export default App;
