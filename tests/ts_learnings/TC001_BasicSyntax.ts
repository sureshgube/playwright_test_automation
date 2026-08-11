//First Typescript Code
var message:string ="Hello World"
console.log(message)

//Using Javascript in Typescript
var message1="Hello World11"
console.log(message1)

//learn variables
var namee:string = "Alice";
console.log(namee);

//learn constants
const pi:number = 3.14;
console.log(pi);

//learn let
let age:number = 25;
console.log(age);

//learn data types
var isActive:boolean = true;
console.log(isActive);

var count:number = 10;
console.log(count);
//learn arrays
var numbers:number[] = [1, 2, 3, 4, 5];
console.log(numbers);
//learn tuples
var person:[string, number] = ["Alice", 25];
console.log(person);
//learn enums
enum Color {Red, Green, Blue};
var c:Color = Color.Green;
console.log(c);
//learn any
var randomValue:any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

//learn functions
function add(x:number, y:number):number {
    return x + y;
}
console.log(add(5, 10));
