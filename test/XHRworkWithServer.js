const requestUrl = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestUrl)

// //===============
// // xhr.responseType = 'json' // переобразовує данні з сервера в масив обєктів
// // xhr.onload = () => {
// //     console.log(xhr.response)  //виводить обєкти в консоль
// // }
// //////////============

// xhr.onload = () => {
//     //console.log(typeof xhr.response) // виводить який тип данних в консолі
//     //console.log(xhr.response)  //виводить данні в консоль
//     //console.log(JSON.parse(xhr.response)) //виводить масив обєктів в консоль
// }

// xhr.onerror = () => {
//     console.log(xhr.response)  //виводить помилку якщо вона є
// }

// xhr.send()


//=========================
// отримує-виводить масив обєктів правильно написано код
// function sendRequest(method, url) {
//     return new Promise ((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }
//         xhr.onerror = () => {
//            reject(xhr.response)
//         }
//         xhr.send()
//     })
// }

// sendRequest('GET', requestUrl)
// .then(data => console.log(data))
// .catch(err => console.log(err))
////////////=========================================  
/// POST  відсилаємо обєкт на сервер 
function sendRequest(method, url, body = null) {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
           reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

const body = {
    name: 'Anton',
    age: 28
}

sendRequest('POST', requestUrl,body )
.then(data => console.log(data))   //  повертаємо його в консоль .then(data => console.log(data))
.catch(err => console.log(err))

