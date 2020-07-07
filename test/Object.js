const person = Object.create( {
    calculateAge() {
        console.log( 'Full Years:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Anton',
        enumerable: true,// можна бачити заданий key в консолі лог
        writable: true, // можна змінювати імя(key) наприклад Рома
        configurable: true // дозволяє видаляти key
    },
    birthYear: {
        value: 1991,
         enumerable: true, 
         writable: false,
         configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear // вираховує вік людини
        },
    
    set(value){
        document.body.style.background = 'red'
        console.log('Set age', value) // можемо змінювати вік (тимчасово) і колір background наприклад 
    }
}
})

//person.name = 'Roma'
//person.birthYear = 2000

for (let key in person) {
    if (person.hasOwnProperty(key)){
     console.log('key', key, person[key])
     }
}


