import gameController from '../src/index.js';

const gameStart = () => {
  const gamesRules = 'What is the result of the expression?';
  const gameQuestion = () => {
    const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    const firstNum = randNum(1, 100);
    const secondNum = randNum(1, 100);
    const indexOperators = randNum(0, 2);
    let expression = '';
    switch (indexOperators) {
      case 0:
        expression = `${firstNum} + ${secondNum}`;
        break;
      case 1:
        expression = `${firstNum} - ${secondNum}`;
        break;
      case 2:
        expression = `${firstNum} * ${secondNum}`;
        break;
      default:
        expression = '';
    }
    return expression;
  };
  const setCorrectAnswer = (question) => {
    let correctAnswer = 0;
    const [firstNum, operator, secondNum] = question.split(' ');
    switch (operator) {
      case '+':
        correctAnswer = Number(firstNum) + Number(secondNum);
        break;
      case '-':
        correctAnswer = Number(firstNum) - Number(secondNum);
        break;
      case '*':
        correctAnswer = Number(firstNum) * Number(secondNum);
        break;
      default:
        correctAnswer = 0;
    }
    return correctAnswer.toString();
  };
  const gameData = [gamesRules, gameQuestion, setCorrectAnswer];
  gameController(gameData);
};

export default gameStart;
