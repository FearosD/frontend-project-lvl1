import gameController from '../src/index.js';

const gameQuestion = () => {
  const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
  const progression = [];
  const lengthProgression = randNum(5, 10);
  const firstValue = randNum(1, 100);
  const hiddenValue = randNum(0, lengthProgression - 1);
  const stepProgression = randNum(2, 9);
  let value = firstValue;
  progression.push(value);
  for (let index = 0; index < lengthProgression; index += 1) {
    value += stepProgression;
    progression.push(value);
  }
  progression.splice(hiddenValue, 1, '..');
  const stringProgression = progression.join(' ');
  return stringProgression;
};

const findStepProgression = (progression) => {
  let stepProgression = 0;
  for (let index = 0; index < progression.length; index += 1) {
    const current = progression[index];
    const next = progression[index + 1];
    if (current !== '..' && next !== '..') {
      stepProgression = next - current;
      break;
    }
  }
  return stepProgression;
};

const setCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const stepProgression = findStepProgression(progression);
  const hiddenIndex = progression.indexOf('..');
  let nearValue = 0;
  let correctValue = 0;
  if (hiddenIndex === 0) {
    nearValue = Number(progression[hiddenIndex + 1]);
    correctValue = nearValue - stepProgression;
  } else {
    nearValue = Number(progression[hiddenIndex - 1]);
    correctValue = nearValue + stepProgression;
  }
  return correctValue.toString();
};

const gameStart = () => {
  const gamesRules = 'Find the greatest common divisor of given numbers.';
  const gameData = [gamesRules, gameQuestion, setCorrectAnswer];
  gameController(gameData);
};

export default gameStart;
