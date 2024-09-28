import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const Start = () => {

    return (
        <div>
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src="/quizaroo.svg" alt="Quizaroo" width={"200px"} height={"100px"} />
                    </div>
                    <div>
                        <h1 className='font-semibold text-6xl'>Quizaroo!</h1>
                    </div>
                </div>

                <div className='py-6'>
                    <Link to="/start">
                        <button className='bg-orange-300 shadow-[4px_4px_0px_#fb923c] shadow-orange-400 hover:shadow-xl transform hover:translate-x-[2px] hover:translate-y-[2px] transition duration-300 ease-in-out text-[#242424] text-xl rounded-md py-2 px-2'>
                            Start Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start