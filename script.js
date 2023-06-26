// without recursion

// let a = 0;
// let b = 1;
// for (i = 2; i <= 12; i++) {
//   let c = a + b; // 1+2 // 3
//   console.log(c);
//   a = b; // 1=>2
//   b = c; // 2=>3
// }

//with recursion
let recursion = (n) => {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return recursion(n - 1) + recursion(n - 2);
};

let input = prompt("Enter a value for recursion");
console.log(input);

for (i = 0; i <= input; i++) {
  let recur = recursion(i);
  console.log(recur);
}
