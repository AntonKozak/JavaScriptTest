const citiesUkraine = ['Kiev', 'BC' , 'Poltava','Lviv']
const citiesEurope = ['Berlin', 'Praga', 'Paris']

const citiesUkraineWithPopulation = {
    Kiev: 10,
    BC: 4,
    Poltava: 6,
    Lviv: 8
}
const citiesEuropeWithPopulation = {
    Berlin: 10,
    Praga: 6,
    Paris: 2
}

// //Spread  Masivu
// //console.log(...citiesUkraine)
// //console.log(...citiesEurope)

// //const allCities = [...citiesUkraine, 'Vinnutsya', ...citiesEurope]
// //console.log(allCities)


// ////Spread Object
// //console.log({...citiesUkraineWithPopulation})
// ///console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation}) /// створюємо один обєкт з двух ///


// //Practice///

// const numbers = [5,34,543,65]
// console.log(Math.max(...numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]   //перетворюємо елементи дів в массив

// console.log(nodes)  //це є массив
// //console.log(divs)  // це є nodelist а не массив


// Rest     // воводить данні які ми запитуємо і ..."все інше" може збирати в масив данні
function sum(a,b,...rest) {
    return a+b+rest.reduce((a,i)=> a+i,0)
}
const numbers = [1,2,3,4,5,6,7,8]

//const a = numbers[0]
//const b = numbers[1]

// const[a,b, ...other] = numbers
// console.log(a,b, other)

const person = {
    name: 'Anton',
    age: 28,
    city: 'Halmstad',
    country: 'Ukraine'
}

const {name,age,...address} = person
console.log(name,age,address) 