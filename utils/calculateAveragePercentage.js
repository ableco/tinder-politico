const diffValues = {
  0: 100,
  1: 75,
  2: 50,
  3: 25,
  4: 0,
};

export default function calculateAveragePercentage(yourResults, theirResults) {
  const percentages = Object.values(yourResults).map(
    (answerValue, index) =>
      diffValues[Math.abs(answerValue - theirResults[index + 1])],
  );
  const average =
    // eslint-disable-next-line unicorn/no-array-reduce
    percentages.reduce((accumulator, element) => accumulator + element, 0) /
    percentages.length;
  return average;
}
