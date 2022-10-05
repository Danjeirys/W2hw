// Functions Continued

// Things to remeber:
// DRY - Don't Repeat Yourself
// Good input (Gargage in garbage out)
// typeof - defines the type of data
// 0 - falsy, 1- truthy

// 2 ways to write a function

// Function Declaration
// Function declarations will be hoisted to the top.

// function sayHello (name) {
//     console.log('Hello ' + name + '!')
// }

// sayHello ('Toby')


// Function Expression

// const sayHelloAgain =  function (name) {
//     if (typeof name !== 'string') {
//         console.log ('Input was not a string, Try again')
//         return
//     }
//     console.log ('Hello ' + name + '!')
// }

// sayHelloAgain (20)

// Arrow Functions
// Arrow function returns without having to use 'return'/ implicit return of a single expression
// With an example of default parameters

// const add = (num1, num2) => num1 + num2

// console.log(add (8237456, 2))

// Checks if both number are even 

// function areBothEven (n1, n2) {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         console.log ('Is not a number')
//         return
//     }else {
//         return !(n1 % 2) && !(n2 % 2)
//     }
// }

// console.log(areBothEven (2, 6))

// Example of truthy and falsey in real sceneirio

// const arr = [1, 2, 3]

// if (arr.length) {
//     console.log ('I have elements!!')
// }else {
//     console.log ('Im empty')
// }


// Parameters/Arguments

function bottleCapper (bottle, cap) {
    return bottle + cap;
}

//console.log(bottle) ReferenceError

bottleCapper ('green bottle(arugment)', 'white cap(argument)' )

// Spread Operator
function getDevObject (name, ...skills) {
    console.log(skills)
    return {
        devName: name,
        jobSkills: skills
    }
}

// console.log(getDevObject('Better', 'awesome', 'cool'))

// Default Parameters

const bicycle = {
    brand: 'mongoose', 
    color: 'red'
}
// ES5
// function setColor (bicycle, color) {
//     bicycle.color = color || 'purple'
// }


// ES6
function setColor (bicycle, color = 'purple') {
    bicycle.color = color
}

setColor (bicycle)

// console.log(bicycle)

// Objects
const arr = [1, 2, 34, 3] // Bracket notation
const person = { // Dot notation
    name: 'Mina',
    job: 'developer',
    isAwesome: true,
    skills: ['coding', 'something else'],
    pet: {
        name: 'fido'
    }
}

// console.log(person.name)

const arrOfObj = [
    {
        username: 'blah',
        emaill: 'afsdf@gmail.com'
    },
    {
        username: 'blah',
        emaill: 'afsdf@gmail.com'
    },
    {
        username: 'blah',
        emaill: 'afsdf@gmail.com'
    },
    {
        username: 'blah',
        emaill: 'afsdf@gmail.com'
    },
]

// to call on specific object^
// console.log (arrOfObj[1].username)

// Functions as arguments 
const a = ['red', 'green', 'blue']

//will loop only for what is in the array^
a.forEach (function(color) {
    const a = color // local scope
    console.log (color)
})

// Scope 


// Global Scope
const num = 4

function foo (x) {
    // Function local scope
    const b = num * 4

    function bar(y) {
        const c = y * b
        // foo1() this will give a reference error
        return c
    }

    // even though on the same level of scope, you cannot share variables
    function foo1 () {
        console.log(c)
    }

    return bar(b)
}

// console.log(foo(num))

// You can look out, but you can't look in!

// Global Scope in the Browser

// IFFE - Immediately Invoked Function Expressions
(() => {
    console.log('Im running')
})()

// Block Scope

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  } 
  
  //varTest()
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  
  letTest()


