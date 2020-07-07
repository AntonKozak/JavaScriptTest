const myNumber = 42
localStorage.setItem('number', myNumber)
//console.log(localStorage.getItem('number'))

const object = {
    name: 'Max',
    age: 27
}

localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Anton'

console.log(person)

//////////////===============================

window.addEventListener('storage', event => {
    console.log(event)
})