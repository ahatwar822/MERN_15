// ajax - asynchronous javascript and xml
// use for connect with server


console.log("hello");

let res = fetch('https://fakestoreapi.com/users')

res.then((val) => {
    return val.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
// console.log(res);



const fatcData= async() => {

    let respomse = await fetch('https://fakestoreapi.com/users')

    let data = await respomse.json();
    console.log(data);
}

fatcData();