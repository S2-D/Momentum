const casinoForm = document.querySelector("form");
const rangeInput = document.querySelector("#range-input");
const choseInput = document.querySelector("#chose-input");

const result1 = document.querySelector("span");
const result2 = document.querySelector("h4");

function formSubmit(e) {
  e.preventDefault();
  const rangeNum = Number(rangeInput.value);
  console.log(rangeNum);
  const resultNum = Math.floor(Math.random() * (rangeNum + 1));
  const choseNum = Number(choseInput.value);
  paintResult(resultNum, choseNum);
}

function paintResult(resultNum, choseNum) {
  if (resultNum === choseNum) {
    result1.innerText = `You chose: ${choseNum}, the machine chose :${resultNum}.`;
    result2.innerText = `You Won!🥳`;
  } else {
    result1.innerText = `You chose: ${choseNum}, the machine chose :${resultNum}.`;
    result2.innerText = `You Lost!🙄`;
  }
}

casinoForm.addEventListener("submit", formSubmit);
