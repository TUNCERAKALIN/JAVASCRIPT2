// 1.We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.
// function foo(func) {
//         // What to do here? 
// 
    // function bar() {
//     console.log('Hello, I am bar!');
// }
// foo(bar);
function bar() {
    console.log('Hello, I am bar!');
}
function foo() {
    bar();
}

foo(bar);

// 2. You must write a function that takes 4 arguments. - A start value - An end value - 
// A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5
// The function should generate an array containing values from start value to end value (inclusive).
// Then the function should iterate over the array and call the first callback if the array value is divisible by 3
// The function should call the second callback if the array value is divisible by 5
// Both functions should be called if the array value is divisible by both 3 and 5
// // Should create an array [10,11,12,13,14,15]
// // and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding
// function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    
    function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    var myarray=[10,11,12,13,14,15,16];
    for(var i=startIndex; i<(stopIndex-startIndex).length; i++){
    
    if(myarray[i]/3==0){
        function threeCallback(){
            console.log("it can be divided by 3")
        }
        threeCallback();
    }
    else if(myarray[i]/5==0){
        function fiveCallback(){
            console.log("it can be divided by 5")
    }
    fiveCallback();
}
    else{
        myarray.push=myarray[i];
    }
     // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next

}}
threeFive();




// 3. Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
// 3.1 A for loop.
function repeatafterme2(string,num){
    var repeatAftermeString="";
    for(var i=0 ;i<19 ; i++){
    repeatAftermeString+=string;
};
    return repeatAftermeString;
}
console.log(repeatafterme2("abc",19));

// 3.2 A while loop.
function repeatafterme(string,num){
    var repeatAftermeString="";
    while (num>0){
    repeatAftermeString+=string;
    num--
};
    return repeatAftermeString;
}
console.log(repeatafterme("abc",3));


// 3.3 A do loop.
function repeatafterme1(string,num){
    var repeatAftermeString="";
    do {
    repeatAftermeString+=string;
    num--
}
while (num>0);
    return repeatAftermeString;
}
console.log(repeatafterme1("abc",10));



// 4. Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

// 5. Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops

// 6. We did some work with arrays - var arr = [1,2,3] We can also nest arrays inside arrays like this var arr2d = [[1,2], [3,4], [5,6]] (for math people you can think of this as a matrix) How would you print all the items of an array with 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

// 7. Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);
// Because first one is global but second one is inside brackets so it is like object inside other box. Basically it is about closures.It is not global because of that value comes from inside the function

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
// If you are confused please run the code and then consult the Google for "javaScript pass by value pass by reference"