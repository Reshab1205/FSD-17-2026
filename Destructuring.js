// const [x,y,z, ...rest] = [1,2,3,4,5,6]
// console.log(x)
// console.log(y)
// console.log(z)
// console.log(rest)
// console.log(d)

const obj = {
    name: "Reshab",
    age: 28
}

const obj1 = {
    city: "Bhopal",
    state: "MP"
}

// const obj2 = {...obj, ...obj1}
const {name, ...rest} = obj
console.log(rest)

// const { age, name} = obj
// console.log(name)
// console.log(age)