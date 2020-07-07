/////////////////////////////////////////ES5 Old js
// const Animal = function(options) {
//     this.name = options.name
//     this.color = options.color
// //     // this.voice= function () {  //Функція знаходиться в класі 
// //     //     console.log('Base voice from ', this.name)
// //     // }
//  }

// Animal.prototype.voice = function( ) {   // Створили функцію прототип до класу Animal (маємо новий метод) 
//     console.log('Base voice from', this.name)
// }

// const dog = new Animal({
//     name: 'Rex',
//     color: '#fff'
// })
// dog.voice()
// console.log(dog)

// const Cat = function(options) {
//     Animal.apply(this,arguments)
//     this.hasTail = options.hasTail
// }
// Cat.prototype = Object.create(Animal.prototype) // Переносимо функцію(метод) прототип з класу Animal в клас Cat
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function( ) {   // Змінюємо метод (переписуємо логіку)
//     console.log('Голос подає', this.name)
// }



// Cat.prototype.voice = function( ) {   // Змінюємо метод (переписуємо логіку) тільки для класy Cat
//     Animal.prototype.voice.apply(this, arguments) // дає змогу визивати метод з Animal а потім визиває метод з класу Cat
//     console.log( this.name + ' Kотик Говорить')
// }

// const cat = new Cat ({name: 'Wnyrok', color: '#frp', hasTail: true})
// cat.voice()
// console.log(cat)
// dog.voice()

///////////////////////////////////////ES6 new JS

class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }
voice() {
    console.log('Base voice from', this.name)

}
}
const dog = new Animal({name: 'Rex' , color: 'white'})
dog.voice()
console.log(dog)

class Cat extends Animal {
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail
    }
    voice(){
        super.voice()
        console.log( this.name + ' Kотик Говорить')
    }
}

const cat = new Cat({name: 'Wnyrok', color: 'orange', hasTail: true})

cat.voice()
console.log(cat)


/////Exampels
Object.prototype.print = function() {    // добавляємо метод в обєкт JS
    console.log(`I am object`, this)
}

cat.print()

// Array.prototype.mapAndLog = function() {
//     console.log('Array to map', this)
//     return this.map.apply(this,arguments)
// }

// console.log([1,2,3,4].mapAndLog( x => x ** 2 ))


String.prototype.toTag = function(tagName) {  // дає змогу обгортати текст стилем наприклад <strong> Text Text </strong>
    return `<${tagName}>${this}</${tagName}>`
}

console.log('Html style around'.toTag('strong') ) //<strong>Html style around</strong>

