console.log('Loops')
console.log('Hello world')
// for (init, conditon, inc/dec){}

for (let i = 0; i < 5; i++) {
  console.log(i)
}

for (let i = 5; i >= 0; i--) {
  console.log(i)
}
const shopCart = ['Meat', 'Milk', 'Sugar', 'Coffee']

for (let i = 0; i < shopCart.length; i++) {
  console.log(shopCart[i].toUpperCase())
}

for (const item of shopCart) {
  console.log(item.toUpperCase())
}

// while loop
let i = 0
while (i < 5) {
  console.log(i)
  i++
}


let k = 11
do {
  console.log(k)
  k++
} while (k < 10)
