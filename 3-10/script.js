

let stuData = [
    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/029/560/101/non_2x/boy-goes-to-school-free-photo.jpg",
        stdName: "Aman",
        stdAge: 23,
        status: "friend",

    },
    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/024/724/633/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png",
        stdName: "Yassh",
        stdAge: 18,
        status: "friend",

    },
    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Yeshodip Borshe",
        stdAge: 21,
        status: "friend",
    },

    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Atishay",
        stdAge: 18,
        status: "friend",
    },


    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Atishay",
        stdAge: 18,
        status: "stranger",

    },

    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Yeshodip Borshe",
        stdAge: 21,
        status: "stranger",

    },

    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/029/560/101/non_2x/boy-goes-to-school-free-photo.jpg",
        stdName: "Aman",
        stdAge: 23,
        status: "stranger",

    },
    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/024/724/633/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png",
        stdName: "Yassh",
        stdAge: 18,
        status: "stranger",
    },
    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Yeshodip Borshe",
        stdAge: 21,
        status: "stranger",

    },

    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Atishay",
        stdAge: 18,
        status: "stranger",
    },
]

let main = document.querySelector("#main");

let card = "";
stuData.forEach(function (elm, index) {
    console.log(elm);

    card += `
            <div class="card">

            <img src=${elm.stdImg} alt="UserImage">

            <h1> ${elm.stdName} ${elm.stdAge} </h1>
            <h2>${elm.status}</h2>
            <button id=${index}>Add Friend</button>
        </div>`

})

main.innerHTML = card;
let status = document.querySelector(".card h2");
let btn = document.querySelector(".card button");

main.addEventListener('click', function (dets) {

    console.log(dets.target.id);
    let btn = dets.target;

    if (btn.innerText == "Add Friend") {
        dets.target.status = "Friend"
        btn.innerText = "Remove Friend";
        btn.style.color = "red";
    } else {
        dets.target.status = "stranger"
        btn.innerText = "Add Friend";
        btn.style.color = "white";
    }
})





