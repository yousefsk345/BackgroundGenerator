let input1 = document.getElementById("first");
let input2 = document.getElementById("second");
let p = document.querySelector("p");
input1.oninput = function () {
  document.body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
  p.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
};
input2.oninput = function () {
  document.body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
  p.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
};
p.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;

document.body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
