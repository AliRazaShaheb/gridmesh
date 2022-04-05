console.clear();
let gridContainer = document.querySelector(".grid-container");
let gridItems = document.querySelectorAll(".grid-items");

let spanGrid = (num) => {
  // let spanGrid = [];
  // let len = gridItems.length;
  // let delta = Math.floor(len / num);
  // Object.keys(gridItems).filter((item) => {
  //   if (+item / num - 1) {
  //     return console.log(gridItems[item]);
  //   } else {
  //     console.log("function wrong");
  //   }
  // });
  // console.log(delta);
  //yeh bhulna nhn yeh bht kaam ka hai
  for (let i in Object.keys(gridItems)) {
    if (i % 3 === 0) {
      console.log(gridItems[i]);
    }
  }
};

spanGrid(1);

const randomColor = () => {
  const randNum = () => Math.floor(Math.random() * 255 - 1);
  let r = randNum();
  let g = randNum();
  let b = randNum();
  return `rgb(${r},${g},${b})`;
};

gridItems.forEach((item) => {
  item.style.backgroundColor = randomColor();
});
