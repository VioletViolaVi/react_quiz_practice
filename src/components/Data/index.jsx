const questionObjArr = [
  {
    id: 1,
    question: "What colour added to yellow makes green?",
    optionsArr: [
      { option: "brown", isRight: false },
      { option: "orange", isRight: false },
      { option: "red", isRight: false },
      { option: "blue", isRight: true }
    ]
  },
  {
    id: 2,
    question: "What is the largest country in Asia?",
    optionsArr: [
      { option: "Singapore", isRight: false },
      { option: "China", isRight: true },
      { option: "Thailand", isRight: false },
      { option: "Japan", isRight: false }
    ]
  },
  {
    id: 3,
    question: "How many eggs are in a dozen?",
    optionsArr: [
      { option: 34, isRight: false },
      { option: 7, isRight: false },
      { option: 12, isRight: true },
      { option: 65, isRight: false }
    ]
  },
  {
    id: 4,
    question: "Which is the largest planet in the solar system?",
    optionsArr: [
      { option: "Jupiter", isRight: true },
      { option: "Pluto", isRight: false },
      { option: "Earth", isRight: false },
      { option: "Mars", isRight: false }
    ]
  },
  {
    id: 5,
    question: "What is the square root of 676?",
    optionsArr: [
      { option: 26, isRight: true },
      { option: 24, isRight: false },
      { option: 22, isRight: false },
      { option: 20, isRight: false }
    ]
  }
];

export default questionObjArr;
