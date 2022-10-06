// 1 (done)

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
//   console.log(maxOfTwoNumbers(3, 9))






// 2

let maxOfThree = (num1, num2, num3) => {
    let moreThan = 0
    if (num1 > num2) {
        moreThan = num1
    }else {
        moreThan = num2
    }
    return moreThan >= num3 ? moreThan: num3
}

// console.log(maxOfThree(350, 650, 850))

// 3
let vowels = 'uwu'

function isCharVowel(cvowel) {
    for (let i = 0; i < vowels.length; i++) {
        return (cvowel.toLowerCase() === vowels[i]) 
    }
}

// console.log(isCharVowel('U'))

// 4

let sum = 0 

const sumArray = (args) => {
    console.log(args)
    console.log(args[0])
    args.forEach((num) => { sum += num})
    return sum
}

// console.log (sumArray([10, 30, 40]))

// 5

function multiplyArray(numArr) {
    let newSum = 1
    numArr.forEach(function(times) { newSum *= times })
    return newSum
}

// console.log(multiplyArray([5, 10, 15]))

// 6

let numArgs = (...args) => {
    console.log(args.length)
}

// 7 

function reverseString(string) {
    let backWards = ''
    for (let i = string.length - 1; i >= 0; i-- ) {
        backWards += string[i]
    }
    return backWards
}

// console.log(reverseString('rockstar'))

// 8 

let longestStringInArray = (num1) => {
    let arr1 = num1[0].length
    console.log(arr1)
    let arr2 = num1[0]
    console.log(arr2)

    for (i = 1; i < num1.length; i++) {
        let wordC = num1[i].length
        if (wordC > arr1) {
            arr1 = wordC
            arr2 = num1[i]
        }
    }
    return arr2
}

// console.log(longestStringInArray(['nyc', 'death', 'one piece']))

// 9 

function stringsLongerThan(num1, num2){
    let x = []
     num1.forEach((check) => {
        if (check.length > num2){
            x.push(check)
        }
    })
console.log(x)
}

// stringsLongerThan(['one piece', 'Tokyo Ghoul', 'Five1'], 5)