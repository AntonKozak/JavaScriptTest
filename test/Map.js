const obj = {
            name: 'Anton',
            age: 28,
            job: 'agro'
        }

const entries = [
            ['name', 'Vladilen'],
            ['age', 26],
            ['job', 'programist'],
        ]
    //console.log(Object.entries(obj))
    //console.log(Object.fromEntries(entries))

const map = new Map(entries)    //[['name', 'Vladilen'],['age', 26],['job', 'programist'],]
     
map.set('newField', 42)
.set(obj,'Value of object')

map.delete('job')  

//console.log(map)
     //console.log(map.get('job'))
     //console.log(map.get(obj))
     
    //  for (let entry of map.entries()) {
    //      console.log(entry)
    //  }

    //  for (let [key, value] of map.entries()) { //виводить ключ(имя name) та його значення value 'Vladilen'
    //     console.log(key, value)
    // }

   //   for (let val of map.values()) {  // виводить значення value
   //       console.log(val)
   //  }

    //  for (let val of map.keys()) {  // виводить значення keys
    //        console.log(val)
    //  }

    // map.forEach((val,key,m) => {   //виводить ключ(имя name) та його значення value 'Vladilen'
    //     console.log(val,key)
    // })

    /////////===================
    // const array = Array.from(map)
    // const mapObj = Object.fromEntries(map.entries()) // робимо обєкт з map
    // console.log(mapObj)
    ///////===========

const users = [
    {name: 'Elena'},
    {name: 'Alr'},
    {name: 'Alina'}
    
]

const visits = new Map()

visits
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() +1000 *60))
.set(users[2], new Date(new Date().getTime() +5000 *60))

function lastVisit(user) {
    return visits.get(user)
}
console.log(lastVisit(users[0])) //виводимо users[0] з const visits = new Map() через методи map
