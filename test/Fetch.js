//////////////////////=========================GET
// const requestUrl = 'https://jsonplaceholder.typicode.com/users'
//function sendRequest(method, url, body = null) {
//    return fetch(url).then(response => {
//        return response.json()  // отримуємо обєкти з методу GET
//    })
// }
// sendRequest('GET', requestUrl)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const body = {
//     name: 'Anton',
//     age: 28
// }
////////////////////////////=============================POST
const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function  sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

   return fetch(url,{
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
       if (response.ok) {
        return response.json()      
       }
       return response.json().then(error => {
           const e = new Error('Somthing go wrong')
           e.data= error
           throw e
       })
   })
}
const body = {
    name: 'Anton',
    age: 28
}
sendRequest('POST', requestUrl,body )
.then(data => console.log(data))
.catch(err => console.log(err))