import readlineSync from 'readline-sync';

const gameController = (gameData) => {
  const [gameRules, question, getCorrectAnswer] = gameData;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your Name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let round = 1; round <= 3; round += 1) {
    const roundQuestion = question();
    console.log(`Question: ${roundQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(roundQuestion);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (round === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default gameController;
