import gameController from '../src/index.js';

const gameStart = () => {
  const gamesRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestion = () => Math.floor(Math.random() * 100) + 1;
  const setCorrectAnswer = (question) => {
    const isEven = question % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return correctAnswer;
  };
  const gameData = [gamesRules, gameQuestion, setCorrectAnswer];
  gameController(gameData);
};

export default gameStart;
