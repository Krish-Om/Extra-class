const add = document.getElementById("add");
const output = document.getElementById("Output");
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);

add.addEventListener("click", () => {
    output.value = num1 + num2
})

const sub = document.getElementById("sub")
console.log(sub.value)