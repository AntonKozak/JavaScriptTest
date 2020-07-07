
// function cr(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// const calc = cr(42)
// calc ()

// function create(n){
//     return function(num) {
//     return n + num
//     }
// }
// const add = create(2)

// console.log (add(5))

// function urlG (name) {
//     return function(url) {
//         return `https://${url}.${name}`
//     }
// }

// const comUrl = urlG ('com')

// console.log(comUrl('goggel'))



// // //HomeWork
// function bind(c, fn) {
// return function(...args) {
//     fn.apply(c, args)
// }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: 'Anton', age: 28, job: 'Frontend'}
// const person2 = {name: 'Larysa',age: 28, job: 'Assistant'}

// bind(person1, logPerson) ()
// bind(person2, logPerson) ()