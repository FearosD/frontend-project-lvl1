import gameController from '../src/index.js';

const gameQuestion = () => {
  const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
  const firstNum = randNum(1, 100);
  const secondNum = randNum(1, 100);
  const numbers = `${firstNum} ${secondNum}`;
  return numbers;
};

const isCommonDivisor = (firstNum, secondNum, divisor) => {
  const flag = firstNum % divisor === 0 && secondNum % divisor === 0;
  if (flag) return true;
  return false;
};

const setCorrectAnswer = (question) => {
  let maxDivisor = 0;
  const [firstNum, secondNum] = question.split(' ');
  for (let divisor = 1; divisor <= firstNum; divisor += 1) {
    const commonDivisor = isCommonDivisor(firstNum, secondNum, divisor);
    if (commonDivisor) {
      if (maxDivisor < divisor) {
        maxDivisor = divisor;
      }
    }
  }
  return maxDivisor.toString();
};

const gameStart = () => {
  const gamesRules = 'Find the greatest common divisor of given numbers.';
  const gameData = [gamesRules, gameQuestion, setCorrectAnswer];
  gameController(gameData);
};

export default gameStart;
