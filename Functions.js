// function add(a,b) {
//    const c =  a + b
//    return c
// }

// function sub(a,b) {
//    const c =  a - b
//    return c
// }

// function mul(a,b) {
//    const c =  a * b
//    return c
// }

// function div(a,b) {
//    const c =  a / b
//    return c
// }
// console.log(add(10,5))
// console.log(sub(10,5))
// console.log(mul(10,5))
// console.log(div(10,5))




// const a = 5;
// const b = 10;
// const c = a + b
// console.log(c)

// function add(a,b) {
//     const c = a+b
//     console.log(c)
//     return c
// }

// (console.log('hii',add(5,6)))

// function greet(name) {
//     return `Hello ${name}`
// }
// console.log(greet('Reshab'))
// console.log(greet('Shubham'))
// const x = 12;

// Global Scope :- global variable
// Block Scope :- local variable

// let arr = [10,22,35,40,56]

// for(let i =0; i <arr.length; i++) {
//     let c = 12;
//     if(arr[i] % 5 === 0) {
//         console.log(arr[i])
//     }
// }
// console.log(c)


// let c = 1;

// console.log(c)


// const x = function add(a,b) {
//     const c = a + b
//     console.log(c)
// }
// x()

// add(5,6)
// const add = (a,b) => {
//     const d = a + b
//     console.log(d)
// }

// console.log(add(5,6))



// console.log(y)


// function add() {


// }

// var sub = () => {

// }
// console.log(sub)

// var sub = 10
// console.log(sub)

// function hello() {
//     return function ji() {
//         return 'Bye'
//         }
//     }


// const data = hello()
// console.log(data())

// function add(a,b) {
//     return function add1() {
//         return a + b
//     }
// }
// const data = add(5,6)
//  console.log(data())


// function calculate(a,b) {
//     function add() {
//         return a + b
//     }
//     function sub() {
//         return a - b
//     }
// return {add, sub} option -A
//     return [add, sub]
// }

// const cal = calculate(10,5)
// console.log(cal.add()) option - A
// console.log(cal[0]())
// console.log(cal[1]())



const num = '10-6*(8*2-5+7*(8*9-6+5)+9)/2*a'

// const d = 'a' * 4;
// console.log(d)

const calc = eval(num)

console.log(calc)


function calculate(a,b,oper) {
    function add() {
        return a + b
    }
    function sub() {
        return a - b
    }
    function mul() {
        return a * b
    }
    function div() {
        return a / b
    }
    if(oper == '+') {
        return add
    } else if(oper == '-') {
        return sub
    } else if(oper == '*') {
        return mul
    } else {
        return div
    }
}

// const cal =  calculate(10,5)
// console.log(cal())

