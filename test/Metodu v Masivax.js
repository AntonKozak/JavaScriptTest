const people = [
    {name: 'Anton', age: 30, budget: 40000},
    {name: 'Larysa', age: 22, budget: 20600},
    {name: 'Andrey', age: 26, budget: 10600},
    {name: 'Rost', age: 35, budget: 56306},
    {name: 'Roman', age: 31, budget: 6400},
    {name: 'Anna', age: 15, budget: 4100},
    {name: 'Evrei', age: 67, budget: 1060},
]


// for (let i=0; i < people.length; i++) {
//     console.log (people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// ForEaach

// people.forEach (function(person) {//, index, pArr
//     console.log(person)
//     //console.log(index)
//     //console.log(pArr)
// })

//people.forEach(person => console.log(person)) // простіший спосіб

//Map

// const newPeople = people.map(person => {
//     return person
// })
// console.log(newPeople)

//Filter
// const adults = []
// for (let i=0; i<people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)  //виводить масив з людей які старше 18 років

// const adults = people.filter(person => person.age >= 18)
// console.log(adults) //виводить масив з людей які старше 18 років  коротко написано

//Reduce
// let amount = 0

// for (let i=0; i<people.length; i++) {
// amount += people[i].budget
// }

// console.log(amount)    // виводить спільну сумму всіх обєктів

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount)   // виводить спільну сумму всіх обєктів з методом reduce

//Find

// const anton = people.find(person => person.name === 'Anton')
// console.log(anton) // виводить оюєкт за іменем 

//FindIndex

// const anton = people.findIndex(person => person.name === 'Anton')
// console.log(anton)  //виводить индекс обєкта в масиві


//////////////////////////////////////////
// const newPeople = people.filter(person => person.budget > 9000)
// .map(person => {
//     return {
//         info: ` ${person.name} (${person.age})`,
//         budget: person.budget
//     }
// })
// console.log(newPeople)  // виводить данні обєктів масиву people: {info: " Anton (30)", budget: 40000} і т.д.


///////////////////////////////////////////
// const amount = people.filter(person => person.budget > 9000)
// .map(person => {
//     return {
//         info: ` ${person.name} (${person.age})`,
//         budget: person.budget
//     }
// })
// .reduce(( total,person)=> total + person.budget, 0)
// console.log(amount)