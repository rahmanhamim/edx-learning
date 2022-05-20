import React, { useEffect, useState } from "react";

const End = ({ results, data }: any) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result: any, index: any) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  return (
    <div>
      <h3>Your Result</h3>
      <h4>
        {correctAnswers} of {data.length}
      </h4>
    </div>
  );
};

export default End;
