function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz"
    if(number % 3 === 0) return "Fizz"
    if(number % 5 === 0) return "Buzz"
    return number
}

//display FizzBuzz
if (typeof document !== "undefined") {
    const button = document.getElementById("valid-btn");
    const display = document.getElementById("display");
  
    button?.addEventListener("click", () => {
        console.log('hello :', "hello")
      const num = document?.getElementById("number").value;
      const result = fizzBuzz(Number(num));
      display.innerHTML = `${result}`;
    });
  }

module.exports = {fizzBuzz}