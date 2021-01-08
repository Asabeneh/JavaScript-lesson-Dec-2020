// on this file we will talke about data types

// JavaScript data types: string, number, boolean, undefined, null, object, symbol

// Numbers

let num1 = 3
console.log(typeof num1)
const PI = 3.14
console.log(typeof PI)

// Strings => any text, coulb a single char or a full page

let char = 'a'
let sentence =
  'I love JavaScript. If you do not love JavaScript what else can you love. python'
console.log(char.length)
console.log(sentence.length)
console.log(char.toUpperCase())
console.log(sentence.toUpperCase())
console.log(sentence.includes('python'))
console.log(sentence.startsWith('I'))

const phrase = 'Hello ' + 'world ' + '!'
console.log(phrase)

// String interpolation

// My name is Asabeneh Yetayeh. I am 250. I live in Finland, Helsink. I teach programming.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let age = 250
let country = 'Finland'
let city = 'Helsinki'
let job = 'programming'

console.log(
  `My name is ${firstName} ${lastName}. I am ${age}. I live in ${country}, ${city}. I teach ${job}.`
)

// Boolean: true or false

isRaining = false
isMarried = true
isLightOn = true
isCoronaOver = false

// Undefined data type
let mass = 75
console.log(typeof mass)
console.log(mass)

let value = null
console.log(typeof null)

// Object:Object, array, function all are objects

const numbers = [1, 2, 3, 4]
console.log(typeof numbers)

function nameOfThisFunction() {
  return 'something'
}

console.log(typeof(nameOfThisFunction))