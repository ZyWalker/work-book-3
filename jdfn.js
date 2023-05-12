let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  let numScores = scores.length;
  for (let i = 0; i < numScores; i++) {
    sum += scores[i];
  }
  let avgScore = sum / numScores;
  return avgScore;
}
let avgScore = getAverage(myScores);
console.log(avgScore);
