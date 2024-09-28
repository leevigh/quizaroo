import React from 'react'

const Answer = ({ question, onPlayerAnswer, isLoading, selectedOption }) => {

    if (!question || isLoading) return null;

    const allOptions = [question?.correctAnswer, ...question?.incorrectAnswers].sort((a,b) => a < b ? -1 : 1)

  return (
    <div className='flex flex-col gap-4'>
        {!isLoading && allOptions?.map((option) => (
            <button
                    key={option}
                    className={`bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2
                    ${
                        selectedOption === option
                            ? 'shadow-none border-2 border-orange-600' // Pressed down state
                            : ''
                    }`}
                    onClick={() => onPlayerAnswer(option)}
                >
                    {option}
                </button>
        ))}
    </div>
  )
}

export default Answer