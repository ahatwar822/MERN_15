

let cur = document.querySelector("#cursor");
document.addEventListener("mousemove", (event) => {
    cur.style.left = `${event.x}px`;
    cur.style.top = `${event.y}px`;
})

let h1 = document.querySelector("#top h1");
let p = document.querySelector("#top p");

h1.addEventListener("mouseenter", function () {
    cur.style.scale = 4;
})

h1.addEventListener("mouseleave", function () {
    cur.style.scale = 1;
})

p.addEventListener("mouseenter", function () {
    cur.style.scale = 2;
})

p.addEventListener("mouseleave", function () {
    cur.style.scale = 1;
})




let adminBtn = document.querySelector("#adminBtn");
let adminSection = document.querySelector("#admin_section");
let cross = document.querySelector("#close");




adminBtn.addEventListener("click", () => {
    adminSection.style.display = "flex";
})

cross.addEventListener("click", () => {
    adminSection.style.display = "none";
})

adminSection.addEventListener("click", (e) => {
    if (e.target.id === "admin_section" || e.target.id === "submit") {
        adminSection.style.display = "none";
    }

})

let stdData = [
    {
        name: "Student Name",
        discription: "Hello !! I am *****",
        img: "https://png.pngtree.com/png-vector/20241116/ourmid/pngtree-animated-character-in-casual-outfit-png-image_14454537.png"
    },
    {
        name: "Student Name",
        discription: "Hello !! I am *****",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
]

let form = document.querySelector("form");
let name = document.querySelector("input:nth-child(1)");
let email = document.querySelector("input:nth-child(2)");
let img = document.querySelector("input:nth-child(3)");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let nValue = name.value;
    let eValue = email.value;
    let iValue = img.value;

    let newUser = {
        name: nValue,
        discription: eValue,
        img: iValue
    }

    stdData.push(newUser);

    addcards();

    form.reset();
})

function addcards() {

    let cutter = "";

    stdData.forEach((elm, index) => {
        cutter += `
                <div class="card">
                    <img src="${elm.img}" alt="UserImage">
                    <h2>${elm.name}</h2>
                    <h3>${elm.discription}</h3>
                    <button id = ${index}>Delete</button>
                </div>
                `

    })

    document.querySelector("#stdCards").innerHTML = cutter;

}

function deletcards() {
    document.querySelector("#stdCards").addEventListener("click", function (e) {

        console.log(e.target.id);

        let index = e.target.id;

        if (index >= 0) {
            stdData.splice(index, 1);
            addcards();
        }

    })
}

deletcards();

addcards();
