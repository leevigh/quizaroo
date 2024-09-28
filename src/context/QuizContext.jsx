// AppContext.js
import React, { createContext, useState } from 'react';

// Create a context
export const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  const [state, setState] = useState("Hello, world!");

  const [questions, setQuestions] = useState([]);

  const [currQuestionPointer, setCurrQuestionPointer] = useState(0);
  const [score, setScore] = useState(0);

  const [quizState, setQuizState] = useState("not started");

  return (
    <QuizContext.Provider value={{ state, setState, questions, score, quizState, setQuizState }}>
      {children}
    </QuizContext.Provider>
  );
};
