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


// const obj = {
//     0: "Reshab",
//     1: "Kumar",
//     2:28,
//     3: "Vaishali"
// }


// for( let i in obj) {
//     console.log(typeof i)
//     // console.log(obj[i])
//     // console.log(`${i}:${obj[i]}`)
// }


// Object. 


const myBioData = {
    fname:"Reshab",
    lname: "Kumar",
    age:28,
    address: {
        vill: "Sarai",
        'PO+PS':"Sarai",
        city: "Vaishali",
        state: "Bihar",
        pincode: 844125
    },
    qualifications:{
        matric: '85.5%',
        '12th': '66%',
        bca: '91%'
    },
    hobbies: {
        web_series: ["Asur", "Family Man", "Mirzapur"],
        movies: ["Avengers", "X-Men", "Superman"],
        cricket: "District Level Under 19",
        gaming: "PUBG"
    }
}

// console.log(myBioData['age'])



// print pincode
// console.log(myBioData.address.pincode)

// // run loop and print all hobbies

// for(let i in myBioData.hobbies) {
//     console.log(i)
// }

// for(let i in myBioData) {
//     if('hobbies' === i) {
//         for(let j in myBioData[i]) {
//             console.log(j)
//         }
//     }
// }

// console.log(Object.keys(myBioData))

// const hi = function () {
//     return 'Hello'
// }

// console.log(hi())

// myBioData.keys 
const data = Object.keys(myBioData)
const val = Object.values(myBioData)
const x = Object.entries(myBioData)
console.log(data)
console.log(val)
console.log(x)





