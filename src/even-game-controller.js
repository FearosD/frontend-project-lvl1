import readlineSync from 'readline-sync';

const gameStart = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your Name? ');

  console.log(
    `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`,
  );

  for (let round = 1; round <= 3; round += 1) {
    const randNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = randNum % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }
    if (round === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default gameStart;
