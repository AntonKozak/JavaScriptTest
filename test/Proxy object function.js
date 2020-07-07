// Object 
const person = {
    name: 'Anton',
    age: 28 ,
    job: 'ploxaya'
}

const op = new Proxy(person,{
    get(target, prop) {
        // console.log('Target', target) // show object person
        //console.log('Prop', prop) // show only (prop) age or name or job
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    set(target, prop, value ) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error (`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('deleting ...', prop)
        delete target[prop]
        return true
    }
})

/// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log ( 'Calling fn....')
        return target.apply(thisArg,args).toUpperCase()
    }
})

//Classes

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy (Person, {
    construct(target, args){
        console.log ('Construct...')

        return new Proxy (new target(...args), {
            get (t,prop){
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy ('Antoha', 30) // this is  Proxy {name: "Antoha", age: 30}


// const PersonP = new Proxy (Person, {
//     construct(target, args){
//         console.log ('Constructyyyy...')

//         return new target(...args)
//     }
// })


// const f = new PersonP ('Larysa', 28) // this is Person {name: "Larysa", age: 28}