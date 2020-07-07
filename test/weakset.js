const users = [
    {name: 'Elena'},
    {name: 'Alr'},
    {name: 'Alina'}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1, 1) // видаляємо першого користувача з users

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))