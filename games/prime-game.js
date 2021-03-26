import gameController from '../src/index.js';

const gameQuestion = () => {
  const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
  const question = randNum(1, 1000);
  return question;
};

const setCorrectAnswer = (question) => {
  let correctAnswer = '';
  const firstPrimeNum = [1, 2, 3, 5, 7];
  if (firstPrimeNum.includes(question)) {
    correctAnswer = 'yes';
    return correctAnswer;
  }
  let isPrime = true;
  for (let value = 2; value < 10; value += 1) {
    if (question % value === 0) {
      isPrime = false;
      break;
    }
  }
  correctAnswer = isPrime ? 'yes' : 'no';
  return correctAnswer;
};

const gameStart = () => {
  const gamesRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [gamesRules, gameQuestion, setCorrectAnswer];
  gameController(gameData);
};

export default gameStart;
