// Condition

// Operators
// Arithmetic operation
// Comparison operators ==, ===, >, >=, <, <=, !==, !=

// =

// =  assignment operator
let name = 'John'

console.log(2 <= 3)
console.log(4 >= 3)
console.log(4 == 4)
console.log(4 == '4')
console.log(4 === '4')
console.log(4 !== '4')
console.log(4 != '4')

// Logical operators ||, &&, !

console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log(true && true)
console.log(true && false)
console.log(false && false)

// Negation

console.log(!!false)

let condition = false

if (condition) {
  console.log('The condition is true. I will be executed')
} else {
  console.log('This is the else block')
}

// //

// let a = prompt('Enter a number: ')

// if (a > 0) {
//   console.log(`${a} is a positive number`)
// } else if (a == 0) {
//   console.log(`${a} is a zero`)
// } else if (a < 0) {
//   console.log(`${a} is a negative number `)
// } else {
//   console.log(`${a} is not a number`)
// }

// let weather = prompt('Enter weather').toLowerCase()

// if (weather === 'rainy') {
//   console.log('Please take your raincoat')
// } else if (weather === 'sunny') {
//   console.log('Such a shinny day lets go to the beach')
// } else if (weather === 'cloudy') {
//   console.log('It is a cloudy and gloomy day')
// } else if (weather === 'foggy') {
//   console.log('It seems foggy you may not have good visibility')
// } else {
//   console.log('No one knows about the day')
// }

// let weather = prompt('Enter weather').toLowerCase()

// switch (weather) {
//   case 'rainy':
//     console.log('Please take your raincoat')
//     break
//   case 'sunny':
//     console.log('Such a shinny day lets go to the beach')
//     break
//   case 'cloudy':
//     console.log('It is a cloudy and gloomy day')
//     break
//   case 'foggy':
//     console.log('It seems foggy you may not have good visibility')
//     break
//   default:
//     console.log('No one knows about the day')
// }


// Ternary Operator

let a = 5
let value = a > 0 ? 'Positive' :'Negative'

console.log(value)