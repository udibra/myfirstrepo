//const MAX_HEIGHT = 200;
//const MIN_HEIGHT = 150;

//let height = 140;

//if (height >= MAX_HEIGHT) {
//  console.log("not alloewd");
//} else if (height < MIN_HEIGHT) {
//  console.log("sorry not allowed");
//} else {
//  console.log("have FUN");
//}

function calculateBMI(weight, height) {
  return weight / (height * height);
}

console.log(calculateBMI(80, 2));
