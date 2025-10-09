let user = [
  {
    userName: "Aman Hatwar",
    dpImg: "https://randomuser.me/api/portraits/men/32.jpg",
    statusImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800",
  },
  {
    userName: "Priya Mehta",
    dpImg: "https://randomuser.me/api/portraits/women/45.jpg",
    statusImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    userName: "Ravi Kumar",
    dpImg: "https://randomuser.me/api/portraits/men/41.jpg",
    statusImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    userName: "Sneha Patil",
    dpImg: "https://randomuser.me/api/portraits/women/68.jpg",
    statusImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    userName: "Arjun Verma",
    dpImg: "https://randomuser.me/api/portraits/men/12.jpg",
    statusImg: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800",
  },
  {
    userName: "Kushi Varathe",
    dpImg: "https://randomuser.me/api/portraits/women/24.jpg",
    statusImg: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
  },
  {
    userName: "Vikram Rao",
    dpImg: "https://randomuser.me/api/portraits/men/83.jpg",
    statusImg: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800",
  },
  {
    userName: "Ananya Gupta",
    dpImg: "https://randomuser.me/api/portraits/women/56.jpg",
    statusImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    userName: "Rahul Nair",
    dpImg: "https://randomuser.me/api/portraits/men/77.jpg",
    statusImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    userName: "Kavya Iyer",
    dpImg: "https://randomuser.me/api/portraits/women/15.jpg",
    statusImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
  },
  {
    userName: "Siddharth Joshi",
    dpImg: "https://randomuser.me/api/portraits/men/58.jpg",
    statusImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
  },
  {
    userName: "Pooja Reddy",
    dpImg: "https://randomuser.me/api/portraits/women/79.jpg",
    statusImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
  },
  {
    userName: "Aditya Deshmukh",
    dpImg: "https://randomuser.me/api/portraits/men/19.jpg",
    statusImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    userName: "Meera Nambiar",
    dpImg: "https://randomuser.me/api/portraits/women/34.jpg",
    statusImg: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
  },
  {
    userName: "Nikhil Chatterjee",
    dpImg: "https://randomuser.me/api/portraits/men/29.jpg",
    statusImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    userName: "Aishwarya Dey",
    dpImg: "https://randomuser.me/api/portraits/women/88.jpg",
    statusImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
  },
  {
    userName: "Manish Pandey",
    dpImg: "https://randomuser.me/api/portraits/men/11.jpg",
    statusImg: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
  },
  {
    userName: "Ritika Sharma",
    dpImg: "https://randomuser.me/api/portraits/women/52.jpg",
    statusImg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
  },
  {
    userName: "Harshit Tiwari",
    dpImg: "https://randomuser.me/api/portraits/men/21.jpg",
    statusImg: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",
  },
  {
    userName: "Simran Kaur",
    dpImg: "https://randomuser.me/api/portraits/women/60.jpg",
    statusImg: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800",
  }
];



let cutter = "";

user.forEach((elm, index) => {
    cutter += `
                <div id = ${index} class="status">
                    <img src="${elm.dpImg}" alt="">
                    <h3>${elm.userName}</h3>
                </div>
                `
})

document.querySelector("#bottom").innerHTML = cutter;

let allStatus = document.querySelectorAll(".status");

let bottom = document.querySelector("#bottom");
let full_status = document.querySelector("#full_status");

allStatus .forEach((e) => {
    e.addEventListener("click", function (elm) {
        let selected = user[elm.target.id].statusImg;
        console.log(selected);

        full_status.style.display = "block";
        full_status.style.backgroundImage = `url(${selected})`;

        let user_status = document.querySelector("#User_status");
        user_status.style.border = "none";
        user_status.style.marginTop = "10px";

        // set status name
        let status_name = document.querySelector("#status_name");
        status_name.innerHTML = user[elm.target.id].userName;
        status_name.style.color = "white";
        status_name.style.textShadow = "1px 1px 1px black";

        // set status image
        let status_img = document.querySelector("#status_img");
        status_img.src = user[elm.target.id].dpImg;

        //reset and start progress bar
        let w = 0;
        let inner = document.querySelector("#inner");
        let id = setInterval(() => {
            w++;
            inner.style.width = `${w}%`;

            if (w == 100) {
                clearInterval(id);
                full_status.style.display = "none";
            } 
            
        }, 30);
    })
})





