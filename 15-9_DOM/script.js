// Dom - Document object model


// 4 pillers of DOM

// 1. Selection of an Elements
// 2. Changing html
// 3. changing css
// 4. Event listeners


let hedding = document.querySelector("h1");

hedding.innerHTML = "How are you";

hedding.style.color = 'red'

hedding.addEventListener('dblclick',function(){

    hedding.innerHTML = "Aman"
    hedding.style.backgroundColor = "lightBlue"
})