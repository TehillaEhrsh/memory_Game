function init() {
  const array = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
  ];
  const arrayToShaffle = getrandom(
    array.concat(array),
    array.concat(array).length - 1
  );
  // console.log(toshyffle);
 
  const starts = "*".repeat(arrayToShaffle.length - 1).split("");

  let open = [];

  arrayToShaffle.forEach((v, i) => {
        const boardElement = document.getElementsByClassName("allcard")[0];

    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerText = "";
    cardElement.value = v;
    boardElement.appendChild(cardElement);

    cardElement.onclick = (e) => {
      if (!open.includes(cardElement) && open.length < 3) {
        cardElement.style.background = `url(${e.target.value})`;
        open.push(cardElement);
      }
      if (open.length === 2) {
        if (open[0].value === open[1].value) {
          open[0].onclick = "";
          open[1].onclick = "";
          open = [];
        } else {
          closeCards(open)
          open=[]
        }
      }
    };
  });
}
init();
// toochoice(afterShuffle, starts)

// cardElement.onclick()

function getrandom(arrayToShaffle, max, min = 0) {
  for (let conter = 0; conter < arrayToShaffle.length; conter++) {
    let randomIndex = Math.floor(Math.random() * (max - min) + min);
    let j = arrayToShaffle[conter];
    arrayToShaffle[conter] = arrayToShaffle[randomIndex];
    arrayToShaffle[randomIndex] = j;
  }
  return arrayToShaffle;
}
function closeCards (arr){
  arr[0].style.backgroundImage = '' ;
  arr[1].style.backgroundImage= ''
}

// function getIndex() {
//   return Number(prompt("please choose one number between 1-10")) - 1;
// }

// function checkIfEqual(valueA, valueB) {
//   return valueA === valueB;
// }

// const switchValuesInArray = (index, value, arrToSwitch) => {
//   arrToSwitch[index] = value;
//   return arrToSwitch
// }

// function toochoice(toshyffle, starts) {
//   let userChichA=0
//   let userChichB= 0
//   console.log(starts);
//   while (!checkIfEqual(starts.toString(), toshyffle.toString())){
//     console.log(starts);
//    userChichA = getIndex()
//   starts[userChichA] = toshyffle[userChichA]
//   console.log(starts);
//    userChichB = getIndex()
//   starts[userChichB] = toshyffle[userChichB]
//   console.log(starts);
//   if (!checkIfEqual(starts[userChichA],starts[userChichB])) {
//     starts[userChichA] = "*";
//     starts[userChichB] = "*";
//     console.log('khvj');
//   }

// }
// }



//איך להוציג למשתמש את הכוכביות
