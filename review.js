const exercise1 = () => {
  console.log("Exercise 1");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log("---------------");
};

function show(option) {
  switch (option) {
    case 1:
      exercise1();
      break;

    default:
      break;
  }
}
