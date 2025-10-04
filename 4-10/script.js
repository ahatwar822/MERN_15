
let stuData = [
    {
        stdImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        stdName: "Aman Hatwar",
        stdAge: 23,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        stdName: "Vaishnavi Gabhane",
        stdAge: 21,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        stdName: "Anurag Kumar",
        stdAge: 22,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        stdName: "Rajiv Kumar",
        stdAge: 24,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        stdName: "Sneha Patel",
        stdAge: 20,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        stdName: "Md Gaffar",
        stdAge: 23,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        stdName: "Riya Sharma",
        stdAge: 19,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        stdName: "Atishay Jain",
        stdAge: 18,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        stdName: "Yeshodip Borshe",
        stdAge: 21,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
        stdName: "Yash Raj",
        stdAge: 20,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        stdName: "Prachi More",
        stdAge: 22,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        stdName: "Dev Hatwar",
        stdAge: 23,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        stdName: "Nisha Mehta",
        stdAge: 21,
        status: "friend",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
        stdName: "Karan Deshmukh",
        stdAge: 24,
        status: "stranger",
        butText: "Add friend"
    },
    {
        stdImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        stdName: "Vivek Yadhuvanshi",
        stdAge: 22,
        status: "friend",
        butText: "Add friend"
    }
];


let main = document.querySelector("#main");

function herofunction() {
    let card = "";

    stuData.forEach(function (elm, index) {
        console.log(elm);

        card += ` <div class="card">
            <img src="${elm.stdImg}" alt="UserImage">
            <h2>${elm.stdName}</h2>
            <h3 class = ${elm.status}>${elm.status}</h3>
          
            <button id = ${index}>${elm.butText}</button>
            
        </div>`;
    })

    main.innerHTML = card;
}

herofunction();

main.addEventListener('click', function (dets) {
    console.log(dets.target.id);

    let seletedUser = stuData[dets.target.id];

    if (seletedUser.status == "stranger") {
        seletedUser.status = "friend";
        seletedUser.butText = "Remove friend";
    } else {
        seletedUser.status = "stranger";
        seletedUser.butText = "Add friend";
    }

    herofunction();

})