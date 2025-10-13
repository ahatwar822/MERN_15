let arr = ['aman', 'hatwar', 'ram', 'shita']

// join it and pritn "aman htwar ram shita"


let arr1 = [1,3,4,5,6,'jay','vijay']

let res = arr.forEach((elm) => {
    return elm;
})

//impleceit return with one parm

let rel1 = arr1.map((elm) => elm)

console.log(rel1);

//if you open function then you have to write return

let rel2 = arr1.map((elm) => {
    return elm;
})


//filter 

let filter = arr1.filter((elm) => {
    return elm;
}) 


//reduce 

let reduce = arr1.reduce((acc,elm) => {
    return acc + elm;
})

let num = [1,2,3,4,5,6]

// print sum of all number in array

let a = 0;
num.forEach((elm) => {
    a = a + elm
})

console.log(a);



let reduce1 = num.reduce((acc,elm) => {
    return acc += elm;
})

console.log(reduce1);


// promises 

let pro = [3,7,5,,8,9]


let party = new Promise((resolve, reject) => {
    let distKaMind = true;

    if(distKaMind){
       return resolve("party hai");
    }else{
        return reject("party nahi hai");
    }
})

// what is promise - 
//  promise is class of js which resolve the promise or reject the promise 

// promise handlar ??