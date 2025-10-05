// show real products
// show ral popular products
// on click of product add button add to cart


let products = [
    {
        img: "https://png.pngtree.com/png-vector/20241211/ourlarge/pngtree-chota-bhim-cartoon-carector-png-image_14703652.png",
        name: "EJ 100 Ox Chair.",
        heading: "this is hedding",
        price: "$3,456"
    },
    {
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Wooden Stool.",
        heading: "white Color Wooden Stool",
        price: "$3,456"
    },
    {
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Atontico Chair.",
        heading: "Astatic Atontico Chair",
        price: "$13,456"
    },
    {
        img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Pink Chair.",
        heading: "Astatic Pink Chair",
        price: "$13,456"
    }
]


let popular = [
    {
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Wooden Stool.",
        heading: "white Color Wooden Stool",
        price: "$3,456"
    },
    {
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Atontico Chair.",
        heading: "Astatic Atontico Chair",
        price: "$13,456"
    },
    {
        img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Pink Chair.",
        heading: "Astatic Pink Chair",
        price: "$13,456"
    }
];

let cart = [];

function addPopularProduct(params) {
    let clutter = "";

    popular.forEach(function (elm) {
        clutter += `
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${elm.img}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${elm.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${elm.heading}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${elm.price}</h4>
                    </div>
                </div>`; 
    })

    document.querySelector(".populars").innerHTML = clutter;
}

function addproduct() {
    let clutter = " ";

    products.forEach(function (elm, index) {
        clutter += `
            <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src = ${elm.img} alt="product Imgae">
                </div>
                <div class="data w-full px-2 py-5 overflow-hidden">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${elm.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20 w-full">${elm.heading}</h3>
                            <h4 class="font-semibold mt-2">${elm.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products")
    .addEventListener('click', function (dets) {
        // console.log(dets);
        if(dets.target.classList.contains('add')){

            cart.push(products[dets.target.dataset.index])
            // console.log(dets.target.dataset.index);
        }
    })
}

function showCart() {
    document.querySelector(".carticon")
    .addEventListener('click', function () {
          document.querySelector(".cartexpnd").style.display = "block";

          var clutter = "";

          cart.forEach(function (product, index) {
            clutter += ` 
            <div class ="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="${product.img}"
                        alt="">
                </div>

                <div>
                    <h3 class="font-semibold">${product.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
                    
                </div>
            </div>`
            
          })

          document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showCart();
addToCart();
addproduct();
addPopularProduct();



