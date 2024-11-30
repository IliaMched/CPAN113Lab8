function greet(name) {
  return "Hello, " + name + ".";
}

console.log(greet("Ilia"));

function addNumbers(num1, num2) {
  // return sum here
return num1+num2;

}

console.log(addNumbers(2,3));

let x = 11;
console.log("Global x before function:", x);

function changeValue() {
    let x = 20; 
    console.log("Local x inside function:", x);
}

changeValue();
console.log("Global x after function:", x); 


function outerFunction() {
  let count = 0;
  
  return function() {
      count++;
      console.log("Count:", count);
  };
}

const incrementCounting = outerFunction();

incrementCounting();
incrementCounting();
incrementCounting();
incrementCounting();
incrementCounting();
