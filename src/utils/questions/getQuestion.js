export default function({ currentQuestion, questionsList }) {
  console.log(questionsList)
  let question = questionsList.filter(q => q.id === currentQuestion.id && q.version === currentQuestion.version)[0];

  return question;
};