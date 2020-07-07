const set = new Set([1,2,3,3,3,4,4,5,5,6])

set.add(10).add(20).add(20).add(30)

// console.log(set)

// console.log(set.has(20)) // true or false
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)
// console.log(set.values()) // the same as sedt.keys
// console.log(set.keys())  // the same as sedt.values

// for (let key of set) {
//     console.log(key)
// }

//=================================

// function uniqValues (array) {
//     return [...new Set(array)]
// }
// console.log(uniqValues([1,1,2,2,2,3,3,3,3,4,4,4,4,4,8,55,5,5,56,6,6,6,]))

function uniqValues (array) {
    return Array.from(new Set(array))    ////       однакові функції
}
console.log(uniqValues([1,1,2,2,2,3,3,3,3,4,4,4,4,4,8,55,5,5,56,6,6,6,]))