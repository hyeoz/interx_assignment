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
