//so that the card starts from the middle
const halfCardSize = 32.5;

//get the triangle outline
let element = document.querySelector("#triangle").getBoundingClientRect();

let rock = document.querySelector("#rock-container");
let paper = document.querySelector("#paper-container");
let scissors = document.querySelector("#scissors-container");

const getRockPosition = (axis) => {
  if (axis == "top") {
    return `${element.top - halfCardSize}px`;
  }
  return `${element.left - halfCardSize}px`;
};

const getPaperPosition = (axis) => {
  if (axis == "top") {
    return `${element.top - halfCardSize}px`;
  }
  return `${element.right - 2 * halfCardSize}px`; //really dont know why it's 2*
};

const getScissorsPosition = (axis) => {
  if (axis == "top") {
    return `${element.bottom - 2 * halfCardSize}px`;
  }
  return `${element.left + element.width / 2 - 2 * halfCardSize}px`;
};

console.log("elementBottom", element);
console.log("Rock Position", getRockPosition());

rock.style.position = "absolute";
rock.style.top = getRockPosition("top");
rock.style.left = getRockPosition();

paper.style.position = "absolute";
paper.style.top = getPaperPosition("top");
paper.style.left = getPaperPosition();

scissors.style.position = "absolute";
scissors.style.top = getScissorsPosition("top");
scissors.style.left = getScissorsPosition();
