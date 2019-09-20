// Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

// Your solution could be something like this:

// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }
// Rewrite the above program using map and filter don't forget to use =>
let numbers = [1, 2, 3, 4];
let multipliedodd22 = [];
let oddnumbers=numbers.filter(number=>number % 2 !=0 );
function multiplied1(oddnumbers){
  
    return oddnumbers*2;
}
let multipliedodd=oddnumbers.map(multiplied1);

// console.log("The doubled numbers are", newNumbers); // [2, 6]
console.log("The doubled numbers are" ,multipliedodd);




// Underneath you see a very interesting small insight in Maartje's work:

let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Fix homework for class10',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];

let tuesday = [
        {
            name     : 'Keep writing summary',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];

let tasks = monday.concat(tuesday);
console.log(tasks);
// Write a program that does the following below. Use map and filter. You will also need a forEach or a for loop for the 'summing up' part.
// Collect two days' worth of tasks.

let durations=[];
for (let i=0;i<tasks.length;i++){
    console.log(tasks[i].duration);
};
console.log(durations);

// Convert the task durations to hours, instead of minutes.
let durations3=[];
let durations2=tasks;
for (let i=0;i<durations2.length;i++){
    durations3.push((durations2[i].duration)/60);
};
console.log(durations3);
// Filter out everything that took two hours or more (remove from the collection)
const lesshours=durations3.filter(numbers=>numbers>2);
console.log(lesshours);
// Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and 
const  multipliedWithBillingHours=lesshours.map(numbers=>numbers*10);
console.log(multipliedWithBillingHours);
// sum it all up.
function sumofArray(sum,number){
    return sum+number;
}
console.log(multipliedWithBillingHours.reduce(sumofArray));
// Output a formatted Euro amount.
console.log("\u20ac "+multipliedWithBillingHours.reduce(sumofArray));
// Don't forget to use =>