const percentCalculator = (questionId, questions) => {
  let currQuestion = questionId;
  let allQuestions = Object.keys(questions).length;
  return (currQuestion / allQuestions) * 100;
}

export default percentCalculator;
