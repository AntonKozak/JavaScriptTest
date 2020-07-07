// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am animal!')
//     }
// }
// // const animal = new Animal ({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// class Cat extends Animal {
//     static type = 'CAT'
// constructor(options) {  // Додаємо options color
//     super(options) // даєм розрішення на додавання color в class Cat з батьківського класу class Animal 
//     this.color = options.color // Додаємо color в class Cat
// }
// voice() {  // додаємо новий voice
//     super.voice()  // визиваємо та додаємо старий voice із class Animal в class Cat
//     console.log( 'I am CAT') // Виводимо новий voice
// }
// get ageInfo(){
//     return this.age *7 // тепер age перемножується на 7
// }

// set ageInfo(newAge) {
//     this.age = newAge  // встановлюємо новий вік сat.age
// }
// }


// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const box3 = new Circle({
    selector: '#box3',
    size: 200,
    color: 'green'
})