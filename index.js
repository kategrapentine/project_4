//Funtion that returns the full name using template literals:

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName("Kate","Grapentine"));

//Same function but using an arrow function:

let arrowFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName("Kate","Grapentine"));

//setTImeout function that uses an arrow function that sends a "Time is up!" alert:

setTimeout( () => console.log("Time is up!"), 2000);

//setIntervale that passes an arrow function into the callback position:

let areWeThereYet = () => console.log('Are we there yet?');

setInterval(areWeThereYet, 5000);

//function that takes a callback:

function processSplicedValue(array, index, callback){
    let splice = array.splice(index, 1);
    callback(splice);
}

let strings = ['Hello', 'Welcome', 'Guten Tag', 'Ciao'];

//passes "console.log" into the function:

processSplicedValue(strings, 0, console.log);

//passes the alert method into the function:

processSplicedValue(strings, 0, alert);

//passes an anonymous function into the function to alert the spliced value: 

processSplicedValue(strings, 0, (splice) => alert(splice));

//My created function takes the element and creates sentances that go along with it as if it were having a converation:

function myCallBack(element){
    setTimeout( () => console.log(`${element}!`), 3000);
    setTimeout( () => console.log('That\'s a way you can say "hello".'), 4500);
    setTimeout( () => console.log('I hope you are having a good day.'), 6000);

}

processSplicedValue(strings, 0, myCallBack);
