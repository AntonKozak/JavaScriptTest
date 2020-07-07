//wraper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj [prop] : defaultValue
    })
}

const position = withDefaultValue (
    {
        x: 24,
        y: 42
    },
    0
)

//console.log (position)

//Hidden properties _uid (all whitch start with _)
const wihtHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj=> Reflect.ownKeys(obj)
        .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj [prop] : void 0
    })
}

const data = wihtHiddenProps ({
    name: 'Anton',
    age: '28',
    _uid: '1231212'

})

//Optimization
const userData = [
    {id: 1, name: 'anton', job: ' Agronomy', age: 28},
    {id: 2, name: 'dnton', job: ' Ahhronomy', age: 23},
    {id: 3, name: '5nton', job: ' Awwronomy', age: 22},
    {id: 4, name: 'tnton', job: ' Attronomy', age: 26},
    
]
// const index = {}    // визов любого userData по індексу ід
// userData.forEach( i=>(index [i.id] = i))

const IndexArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))
        return new Proxy (new target(...args), {
            get(arr, prop){
                switch(prop){
                    case 'push': return item =>{   //додавання в масив обєкт
                        arr[prop].call(arr,item)
                    }
                    case 'findById': return id => index[id]
                    default:
                        return arr [prop]
                }

            }
        })
    }
})
const users = new IndexArray([
    {id: 1, name: 'anton', job: ' Agronomy', age: 28}, 
    {id: 2, name: 'ggdnton', job: ' Ahhronomy', age: 23},
    {id: 3, name: 'jk5nton', job: ' Awwronomy', age: 22},
    {id: 4, name: 'tsfdanton', job: ' Attronomy', age: 26},

])
