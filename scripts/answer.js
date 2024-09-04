const checkStringComplete = () => {
  let isComplete;

  const inputValue = document.getElementById("question-1-input").value;
  const filteredValue = inputValue
    .split("")
    .filter((value) => value === "(" || value === ")");

  let startIdx = 0;
  let closeIdx = 0;

  for (let i = 0; i < filteredValue.length; i++) {
    if (i === 0 && filteredValue[i] === ")") {
      isComplete = false;
      break;
    }
    if (filteredValue[i] === "(") {
      startIdx++;
    } else {
      closeIdx++;
    }
  }

  if (isComplete !== false && startIdx === closeIdx) {
    isComplete = true;
  }

  document.getElementById("answer-1-string").innerText = isComplete
    ? "문자열이 정상적으로 처리되었습니다."
    : "문자열이 정상적으로 처리되지 않았습니다.";
};

document
  .getElementById("question-1-button")
  .addEventListener("click", checkStringComplete);

let fibonacciCount = 10;

const getFibonacci = (n) => {
  let a = 0,
    b = 1,
    temp,
    text = "";

  for (let i = 2; i <= n; i++) {
    text += `${b} `;
    temp = a + b;
    a = b;
    b = temp;
  }

  document.getElementById("question-2-string").innerText = text;
};

getFibonacci(fibonacciCount);
document.getElementById("question-2-button").addEventListener("click", () => {
  fibonacciCount += 10;
  getFibonacci(fibonacciCount);
});
