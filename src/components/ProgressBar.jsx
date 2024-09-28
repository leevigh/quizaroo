import React, { useState } from 'react';

const ProgressBar = ({ currentQuestion }) => {

  const totalQuestions = 10;

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="p-4">

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-300 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-2 text-lg">
        {currentQuestion} out of {totalQuestions} questions answered
      </p>
    </div>
  );
};

export default ProgressBar;
