import axios from "axios";

export const getQuestions = async () => {

    const response = await axios.get("https://the-trivia-api.com/api/questions?limit=10")
  
    // const questions = await response.json();
  
    return response.data;
};