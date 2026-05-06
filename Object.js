// const arr = [1,2,3,4,5]
// console.table(arr)

// const obj = {
//     name: "Reshab",
//     age:28,
//     isActive:true,
//     myData:[1,2,3,4,5],
//     myAddress: {
//         vill: 'Sarai',
//         data: `${arr}`,
//         myData: {
//             bye: "BYe"
//         }
//     },
//     0:"Hello"
// }
// // console.log(obj.myAddress.myData.bye)
// console.log(typeof obj)



// const myData = {
//     0 : {
//         0:'Mango',
//         1:'Litchi',
//         2:'Apple',
//         3:'Banana',
//         4:'Kiwi'

//     },
//     1: {
//         0:'Nano',
//         1:'Alto',
//         2:'Punch',
//         3:'Nexon',
//         4:'Scorpio'
//     },
//     2: {
//         0:'Banyan',
//         1:'Mango',
//         2:'Jackfruit',
//         3:'Apple',
//         pa:'Papaya'
//     }
// }
// console.log(myData[0][0])
// console.log(myData.cars[2])
// console.log(myData.trees['pa'])


const obj = {
    0: "Reshab",
    1: "Kumar",
    2:28,
    3: "Vaishali"
}


for( let i in obj) {
    console.log(typeof i)
    // console.log(obj[i])
    // console.log(`${i}:${obj[i]}`)
}


// Object 