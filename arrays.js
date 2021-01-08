// let's talk about array

const emptyArr = []
console.log(emptyArr.length)

const numbers = [1, 2, 3]
console.log(numbers.length)
console.log(numbers[0])
console.log(numbers[1])

console.log(numbers[2])
let lastIndex = numbers.length - 1
console.log(numbers[lastIndex])

numbers[0] = 11
console.log(numbers)
numbers[1] = 22
console.log(numbers)

// pop, push, shift, unshift, slice, splice

const fruits = ['Manago', 'Banana']

console.log(fruits.length)
fruits[0] = 'Avocado'
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.push('Pinnapple')
fruits.push('Orange')
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift('Meat')
console.log(fruits)


const shopCart = ['Meat', 'Milk', 'Sugar', 'Coffee']
shopCart[2] = 'Honey'
shopCart[3] = 'Tea'
console.log(shopCart)
