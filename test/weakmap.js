let obj = {name: 'weakmap'}

// const arr = [obj]
// obj = null
// console.log(obj)

const map = new WeakMap([   // metodu get set delete has
    [obj, 'obj data']
])

obj = null

//console.log(map.get(obj))
//////////////===========================444

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'lena'}
let alex = {name: 'alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena)) // true    //lena = nul; console.log(cache.has(lena))=== false
console.log(cache.has(alex)) // true
