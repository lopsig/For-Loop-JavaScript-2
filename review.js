const exercise1 = () => {
  console.log("Exercise 1");
  for (let i = 100; i <= 1000; i += 100) {
    console.log(i);
  }
  console.log("------------------------------------");
};
const exercise2 = () => {
  console.log("Exercise 2");
  for (let i = 1000; i >= 800; i -= 100) {
    console.log(i);
  }
  console.log("------------------------------------");
};

const exercise3 = () => {
  console.log("Exercise 3");
  function showMessage1() {
    console.log("Condiciones i = 5, <");
    for (let i = 5; i < 8; i++) {
      console.log(`MENSAJE 1.${i - 4}`);
    }
    console.log("________________________");
  }
  function showMessage2() {
    console.log("Condiciones i = 10, >=");
    for (let i = 10; i >= 8; i--) {
      console.log(`MENSAJE 2.${11 - i}`);
    }
    console.log("________________________");
  }
  function showMessage3() {
    console.log("Condiciones i = 0, <");
    for (let i = 0; i < 3; i++) {
      console.log(`MENSAJE 3.${i + 1}`);
    }
    console.log("________________________");
  }
  function showMessage4() {
    console.log("Condiciones i = 8, >");
    for (let i = 8; i > 5; i--) {
      console.log(`MENSAJE 4.${9 - i}`);
    }
    console.log("________________________");
  }
  showMessage1();
  showMessage2();
  showMessage3();
  showMessage4();
  console.log("------------------------------------");
};

const exercise4 = () => {
  console.log("Exercise 4");
  for (let i = 1; i <= 10; i++) {
    console.log(`3 X ${i} = ${3*i}`)
    
  }
  console.log("------------------------------------");
};

function show(option) {
  switch (option) {
    case 1:
      exercise1();
      break;
    case 2:
      exercise2();
      break;
    case 3:
      exercise3();
      break;
    case 4:
      exercise4();
      break;

    default:
      break;
  }
}
