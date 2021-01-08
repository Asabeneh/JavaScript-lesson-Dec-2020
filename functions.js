//

function doSomething() {
  console.log('Of course, I am doing something')
}

// doSomething()

// function printFullName(firstName, lastName) {
//   let fullName = firstName + ' ' + lastName
//   return fullName
// }
// console.log(printFullName('Asab', 'Yetayeh'))

// console.log(printFullName('Donald', 'Trump'))

// console.log(printFullName('John', 'Doe'))

// function expression

// const printFullName = function (firstName, lastName) {
//   let fullName = firstName + ' ' + lastName
//   return fullName
// }
// console.log(printFullName('Asab', 'Yetayeh'))

// console.log(printFullName('Donald', 'Trump'))

// console.log(printFullName('John', 'Doe'))

// Arrow function

const printFullName = (firstName, lastName) => firstName + ' ' + lastName

console.log(printFullName('Asab', 'Yetayeh'))

console.log(printFullName('Donald', 'Trump'))

console.log(printFullName('John', 'Doe'))

const makeSquare = (n) => n * n
console.log(makeSquare(3))

// for (let i = 0; i < 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`)
// }

// sumOfEvens

const sumOfEvens = (n) => {
  let sum = 0
  for (let i = 0; i <= n; i += 2) {
    console.log(i)
    sum += i
  }
  return sum
}

console.log(sumOfEvens(100))

// calculate weight of some object

const calculateWeight = (mass, gravity = 9.81) => {
  return `${mass * gravity} N`
}

console.log(calculateWeight(75))
console.log(calculateWeight(75, 3.71))