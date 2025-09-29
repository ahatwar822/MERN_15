let stuData = [
    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/029/560/101/non_2x/boy-goes-to-school-free-photo.jpg",
        stdName: "Aman",
        stdAge: 23,
        stdCity: "Nagpur",
        stdBio: "Hello!! I am Web Devloper form india"

    },
    {
        stdImg: "https://static.vecteezy.com/system/resources/previews/024/724/633/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png",
        stdName: "Yassh",
        stdAge: 18,
        stdCity: "Meshragawon",
        stdBio: "Hello!! I am yash Web from india and student at LNCT"

    },
    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Yeshodip Borshe",
        stdAge: 21,
        stdCity: "Nashik",
        stdBio: "Hello!! I student of Data Analaytics working part-time at Croma "

    },

    {
        stdImg: "https://i.pinimg.com/736x/d5/51/31/d5513130e30228fc090ed18965d43338.jpg",
        stdName: "Atishay",
        stdAge: 18,
        stdCity: "Ashok Nagar",
        stdBio: "Hello!! I student at LNCY. Currently first year on B.Tech in IT",

    },
]

let main = document.querySelector("#main");

let card = "";
stuData.forEach(function (elm) {
    console.log(elm);

    card += ` <div class="card">
            <img src="${elm.stdImg}" alt="UserImage">
            <h1>${elm.stdName}, ${elm.stdAge}</h1>
            <h2>${elm.stdCity}</h2>
            <p>${elm.stdBio}</p>
            
        </div>`;
})

main.innerHTML = card;


