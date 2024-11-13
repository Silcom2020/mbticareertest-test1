export function calculateMBTI(answers: number[]): string {
  // E/I - 質問1-5で判定
  const eScore = answers.slice(0, 5).reduce((sum, answer) => {
    return sum + (answer <= 1 ? 2 : answer >= 3 ? 0 : 1);
  }, 0);
  const firstLetter = eScore >= 5 ? 'E' : 'I';

  // S/N - 質問6-10で判定
  const sScore = answers.slice(5, 10).reduce((sum, answer) => {
    return sum + (answer <= 1 ? 2 : answer >= 3 ? 0 : 1);
  }, 0);
  const secondLetter = sScore >= 5 ? 'S' : 'N';

  // T/F - 質問11-15で判定
  const tScore = answers.slice(10, 15).reduce((sum, answer) => {
    return sum + (answer <= 1 ? 2 : answer >= 3 ? 0 : 1);
  }, 0);
  const thirdLetter = tScore >= 5 ? 'T' : 'F';

  // J/P - 質問16-20で判定
  const jScore = answers.slice(15, 20).reduce((sum, answer) => {
    return sum + (answer <= 1 ? 2 : answer >= 3 ? 0 : 1);
  }, 0);
  const fourthLetter = jScore >= 5 ? 'J' : 'P';

  return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
}