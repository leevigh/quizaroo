import React, { useState } from 'react';

const ProgressBar = ({ currentQuestion }) => {

  const totalQuestions = 10;

  // State to track number of questions answered
//   const [answered, setAnswered] = useState(0);

  // Calculate percentage for progress bar
  const progress = (currentQuestion / totalQuestions) * 100;

  // Handler to move to the next question
  const handleAnswerQuestion = () => {
    if (answered < totalQuestions) {
      setAnswered(answered + 1);
    }
  };

  return (
    <div className="p-4">

      {/* Progress Bar Container */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-300 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Text Showing Progress */}
      <p className="mt-2 text-lg">
        {currentQuestion} out of {totalQuestions} questions answered
      </p>

      {/* Button to answer next question */}
      {/* <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={handleAnswerQuestion}
      >
        Answer Next Question
      </button> */}
    </div>
  );
};

export default ProgressBar;
