import React, { useEffect, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import { getQuestions } from '../services/questions';
import Answer from './Answer';
import ProgressBar from './ProgressBar';

import { FaArrowLeft, FaArrowRight, FaRedoAlt } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const QuizBox = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [questions, setQuestions] = useState([]);

    const [currQuestionPointer, setCurrQuestionPointer] = useState(0);
    const [score, setScore] = useState(0);

    const [error, setError] = useState("");

    const [selectedOptions, setSelectedOptions] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handlePlayerAnswer = (guess) => {

        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [currQuestionPointer]: guess,
        }));

        if (guess === questions[currQuestionPointer]?.correctAnswer) {
          setScore(score + 1);
        }
    
        if (currQuestionPointer < questions.length - 1) {
            setCurrQuestionPointer(currQuestionPointer + 1);
        }
        // setCurrQuestionPointer(currQuestionPointer + 1);
    };

    const handleQuizCompletion = () => {
        setQuizCompleted(true);
        setCurrQuestionPointer(questions.length)
    };

    useEffect(() => {
        setIsLoading(true)

        // const response = getQuestions();
        getQuestions()
            .then(data => {
                setQuestions(data)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setIsLoading(false)
                setTimeout(() => {
                    setError("")
                }, 3000)
            })
        // setQuestions(response.data);

    }, [])

    const goToPreviousQuestion = () => {
        setCurrQuestionPointer((prevState) => {
            if (prevState > 0) {
                return prevState - 1;
            }
            return prevState;
        });
    };

    const goToNextQuestion = () => {
        setCurrQuestionPointer((prevState) => {
            
            if (prevState <= questions.length - 1) {
                return prevState + 1;
            }
            return prevState;
        });
    };

    const handleRestartQuiz = () => {
        setCurrQuestionPointer(0)
        setScore(0)
        setSelectedOptions({})
        setQuizCompleted(false)
    }

    const handleEndQuiz = () => {
        navigate('/', { replace: true })
    }

  return (
    <div>
        {/* {JSON.stringify(questions[currQuestionPointer])} */}
        <div className='max-w-[1200px]'>
            {isLoading ? 
                <>
                    <div>Loading...</div>
                </> 
            : 
                <>
                    <div className='max-w-[500px] mx-auto'>
                        <ProgressBar currentQuestion={currQuestionPointer} />
                    </div>
                    <section className='relative shadow-xl p-8 rounded-md'>
                        
                        {quizCompleted ? 
                            <>
                                <section>
                                    <div className='flex flex-row-reverse justify-center items-center py-8'>
                                        <div className='hidden lg:flex'>
                                            <img 
                                                src='/questionroo.svg' 
                                                alt="Questionroo"
                                                width={'100px'}
                                                height={'100px'} />
                                        </div>

                                        <div className='text-6xl font-semibold px-6 text-orange-400'>{score}/10</div>
                                    </div>

                                    <div className='flex gap-8 justify-center'>
                                        <button className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2 
                                        `}
                                        onClick={handleRestartQuiz}>
                                            <FaRedoAlt />
                                        </button>

                                        <button className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2 
                                        `}
                                        onClick={handleEndQuiz}>
                                            <MdOutlineCancel />
                                        </button>
                                    </div>

                                </section>
                            </> 
                        : 
                            <>
                                <div className='max-w-[700px] flex items-center justify-center gap-4 py-10'>
                                    <div>
                                        <p className='font-semibold text-2xl'>{questions[currQuestionPointer]?.question}</p>
                                    </div>
                                    <div className='hidden md:flex'>
                                        <img 
                                            src='/questionroo.svg' 
                                            alt="Questionroo"
                                            width={'80px'}
                                            height={'80px'} />
                                    </div>
                                </div>
                                <div className='max-w-[600px] mx-auto'>
                                    {questions.length > 0 && 
                                    <Answer 
                                        question={questions[currQuestionPointer]}
                                        onPlayerAnswer={handlePlayerAnswer}
                                        isLoading={isLoading}
                                        selectedOption={selectedOptions[currQuestionPointer]} />
                                    }
                                </div>
                            </>
                        }
                        
                        {!quizCompleted &&
                            <div className='max-w-[600px] mx-auto py-8 flex justify-between items-center'>
                                <div >
                                    <button className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2 
                                    ${
                                        currQuestionPointer === 0
                                            ? 'shadow-none border-2 border-orange-600' // Pressed down state
                                            : ''
                                    }`}
                                    onClick={goToPreviousQuestion} disabled={currQuestionPointer === 0}>
                                        <FaArrowLeft />
                                    </button>
                                </div>
                                <div >
                                    {currQuestionPointer === questions.length - 1 && selectedOptions[currQuestionPointer] ? (
                                        <button className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2 
                                        `} onClick={handleQuizCompletion} disabled={!selectedOptions[currQuestionPointer]}>
                                            Roo!
                                        </button>
                                    ) : (
                                        <button className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2 
                                        ${
                                            currQuestionPointer === questions.length - 1
                                                ? 'shadow-none border-2 border-orange-600' // Pressed down state
                                                : ''
                                        }`} onClick={goToNextQuestion} disabled={currQuestionPointer === questions.length - 1}>
                                            <FaArrowRight />
                                        </button>
                                    ) }
                                </div>
                            </div>
                        }
                    </section>
                </>
            }
        </div>
    </div>
  )
}

export default QuizBox