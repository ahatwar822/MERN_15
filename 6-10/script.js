
let form = document.querySelector('form')
let userText = document.querySelector("input")
let btn = document.querySelector("button")


let user = ["aman", "aman"];

form.addEventListener('submit', function (e) {
    console.log(userText.value)

    e.defaultPrevented();
    user.push(userText.value);
    addName();

    userText.value = "";

})


function addName() {

    let sum = "";

    user.forEach(function (elm) {

        sum += `<li>${elm}</li>`

        console.log(sum)
    })

    document.querySelector("ul").innerHTML = sum
}

addName();


