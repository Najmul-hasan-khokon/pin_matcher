// create random number function in 4 digit
function getRandom() {
  const mathRandom = Math.round(Math.random() * 10000);
  const getRandom = mathRandom + "";
  if (getRandom.length == 4) {
    return getRandom;
  } else if (getRandom == undefined) {
    return (getRandom = 0);
  }
}

// left side btn and input
const pinGenarateBtn = document.getElementById("pinGenarateBtn");
pinGenarateBtn.addEventListener("click", function () {
  // call getRandom function here
  const getRandomNumber = getRandom();
  const totalGenarate = (document.getElementById("pinGenarateInput").value =
    getRandomNumber);
});

// right side btn and input
document.getElementById("calcBtn").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const currentInput = document.getElementById("submitSecInput");

  if (isNaN(number)) {
    if (number == "C") {
      currentInput.value = "";
    }
  } else {
    const totalInput = currentInput.value + number;
    const pp = (currentInput.value = totalInput);
    //    getPinMatcerNumber(pp)
  }
});

// finally submit with leftSide and rightSide pin

// function getPinMatcerNumber(pinLeftInput){
document.getElementById("submitBtn").addEventListener("click", function () {
  const currentGenarate = document.getElementById("pinGenarateInput").value;
  const currentPin = document.getElementById("submitSecInput").value;
  if (currentGenarate == currentPin) {
    document.getElementById("correctNotify").style.display = "block";
    document.getElementById("crossNotify").style.display = "none";
  } else {
    document.getElementById("crossNotify").style.display = "block";
    document.getElementById("correctNotify").style.display = "none";
  }
});
// }
