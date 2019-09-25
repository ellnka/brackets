module.exports = function check(str, bracketsConfig) {
  // your solution
  const BRACKET_SET = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"],
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"]
  ];
  const convertedBracketsConfig = bracketsConfig.map(
    item => item[0] + "" + item[1]
  );
  const inputBracketsArray = str.split("");

  let stack = [];
  let result = true;

  for (let i = 0; i < inputBracketsArray.length; i++) {
    let inputBracket = inputBracketsArray[i];
    let brackets = BRACKET_SET.find(bracket => inputBracket === bracket[0]);
    let lastClosingBracket = stack.length && stack[stack.length - 1][1];
    if (brackets && inputBracket !== lastClosingBracket) {
      stack.push(brackets);
    } else {
      if (lastClosingBracket === inputBracket) {
        let lastBracket = stack.pop();
        result = convertedBracketsConfig.includes(lastBracket.join(""));
      } else {
        result = false;
      }
    }
    if (!result) break;
  }
  if (stack.length > 0) {
    result = false;
  }

  return result;
};
