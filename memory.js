const gameContainer = document.getElementById("game");
let firstCard = 0;
let secondCard = 0;
let cardpicks = 0;
let noPicks = false;



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(e) {

        //newDiv.style.backgroundColor = newDiv.classList;
        
         let cardNow = e.target;
         cardNow.style.backgroundColor = cardNow.classList[0];

         if (noPicks) return;
         if (e.target.classList.contains("picks")) return;
        
         if (!firstCard || !secondCard) {
            cardNow.classList.add("picks");
            firstCard = firstCard || cardNow;
            secondCard = cardNow === firstCard ? 0 : cardNow;
          }
        
          if (firstCard && secondCard) {
            noPicks = true;
            
            let color1 = firstCard.className;
            let color2 = secondCard.className;
        
            if (color1 === color2) {
              cardpicks += 2;
              firstCard.removeEventListener("click", handleCardClick);
              secondCard.removeEventListener("click", handleCardClick);
              firstCard = 0;
              secondCard = 0;
              noPicks = false;

            } else {

              setTimeout(function() {
                firstCard.style.backgroundColor = "";
                secondCard.style.backgroundColor = "";
                firstCard.classList.remove("picks");
                secondCard.classList.remove("picks");
                firstCard = 0;
                secondCard = 0;
                noPicks = false;
              }, 500);

      console.log("you just clicked", e.target);
        }
    }
}


// when the DOM loads
createDivsForColors(shuffledColors);
