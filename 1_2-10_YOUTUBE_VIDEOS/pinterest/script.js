var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

// function to show the cards
function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

//function to handle search

function handleSearch(obj) {

    let input = document.querySelector("#searchinput")
    
    input.addEventListener("focus", function () {
        document.querySelector(".overlay").style.display = "block";     
    })

    input.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function(){
        console.log(input.value)

        let filterArray = arr.filter( obj => 
            obj.name.toLowerCase().startsWith(input.value)
        );

        let clutter = "";

        filterArray.forEach((obj) => {
            clutter += `
            <div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        
        })

        document.querySelector(".searchdata").style.display = filterArray.length ? "block" : "none";
        document.querySelector(".searchdata").innerHTML = clutter;

        console.log(filterArray);
        showTheCards(filterArray);
    })

    
}

handleSearch();

showTheCards();


// script.js — replace your current file with this

// document.addEventListener('DOMContentLoaded', () => {
//   // your original array
//   const arr = [
//     {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//   ];

//   // DOM elements (guarantee they exist or create fallbacks)
//   const container = document.querySelector('.container');
//   const input = document.querySelector('#searchinput');

//   if (!container) {
//     console.error('No .container element found. Create <div class="container"></div> in your HTML.');
//     return;
//   }
//   if (!input) {
//     console.error('No #searchinput element found. Add <input id="searchinput"> in your markup.');
//     return;
//   }

//   // Ensure .searchdata exists (create if missing)
//   let searchDataEl = document.querySelector('.searchdata');
//   if (!searchDataEl) {
//     searchDataEl = document.createElement('div');
//     searchDataEl.className = 'searchdata';
//     // Append into nav_middle if present, otherwise to body
//     const navMiddle = document.querySelector('#nav_middle') || document.body;
//     navMiddle.appendChild(searchDataEl);
//   }

//   // Ensure .overlay exists (create if missing) — used to capture outside clicks and dim background
//   let overlay = document.querySelector('.overlay');
//   if (!overlay) {
//     overlay = document.createElement('div');
//     overlay.className = 'overlay';
//     // minimal default inline styles so it works out-of-the-box
//     overlay.style.position = 'fixed';
//     overlay.style.top = '60px'; // align under navbar; adjust if navbar height differs
//     overlay.style.left = '0';
//     overlay.style.right = '0';
//     overlay.style.bottom = '0';
//     overlay.style.display = 'none';
//     overlay.style.zIndex = '900';
//     document.body.appendChild(overlay);
//   }

//   // Render cards into .container — accepts filtered array or shows full array by default
//   function showTheCards(cards = arr) {
//     if (!cards.length) {
//       container.innerHTML = '<p class="no-results" style="color:#fff; padding:20px;">No results found</p>';
//       return;
//     }

//     const clutter = cards.map(obj => {
//       return `
//       <div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="${escapeHtml(obj.name)}">
//         <div class="caption">${escapeHtml(obj.name)}</div>
//       </div>
//       `;
//     }).join('');

//     container.innerHTML = clutter;
//   }

//   // Create suggestion HTML and show/hide the suggestion box
//   function renderSuggestions(filtered) {
//     const q = input.value.trim();
//     if (!q || !filtered.length) {
//       searchDataEl.style.display = 'none';
//       searchDataEl.innerHTML = '';
//       return;
//     }

//     const suggestionsHtml = filtered.map(obj => {
//       // dataset-name helps on click
//       return `
//         <div class="res" data-name="${escapeHtml(obj.name)}" style="cursor:pointer; padding:10px; display:flex; gap:10px; align-items:center;">
//           <i class="ri-search-line"></i>
//           <h3 style="margin:0; font-size:14px;">${escapeHtml(obj.name)}</h3>
//         </div>
//       `;
//     }).join('');

//     searchDataEl.innerHTML = suggestionsHtml;
//     searchDataEl.style.display = 'block';
//   }

//   // Helper: simple HTML escape to avoid broken markup if names contain special chars
//   function escapeHtml(str) {
//     return String(str)
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#39;');
//   }

//   // Initial render (show all)
//   showTheCards();

//   // --- Event listeners ---

//   // Focus/blur show overlay for UX
//   input.addEventListener('focus', () => {
//     overlay.style.display = 'block';
//   });

//   // On blur hide overlay and suggestions after small timeout (so suggestion clicks register)
//   input.addEventListener('blur', () => {
//     setTimeout(() => {
//       overlay.style.display = 'none';
//       searchDataEl.style.display = 'none';
//     }, 150);
//   });

//   // Main input handler: filter and render both cards and suggestions live
//   input.addEventListener('input', () => {
//     const q = input.value.trim().toLowerCase();

//     // filter using includes (case-insensitive) so "apple" matches "apple juice"
//     const filtered = q ? arr.filter(obj => obj.name.toLowerCase().includes(q)) : arr;

//     // update grid and suggestions
//     showTheCards(filtered);
//     renderSuggestions(filtered);
//   });

//   // Click on suggestion: use event delegation on .searchdata
//   searchDataEl.addEventListener('click', (e) => {
//     const item = e.target.closest('.res');
//     if (!item) return;
//     const name = item.dataset.name;
//     input.value = name; // set input to clicked suggestion

//     // Filter by clicked name (show items that include that name)
//     const filtered = arr.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));
//     showTheCards(filtered);

//     // hide suggestions and overlay
//     searchDataEl.style.display = 'none';
//     overlay.style.display = 'none';
//     input.blur();
//   });

//   // Clicking the overlay closes suggestions and removes focus
//   overlay.addEventListener('click', () => {
//     searchDataEl.style.display = 'none';
//     overlay.style.display = 'none';
//     input.blur();
//   });

//   // Allow Enter to finalize search
//   input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       const q = input.value.trim().toLowerCase();
//       const filtered = q ? arr.filter(obj => obj.name.toLowerCase().includes(q)) : arr;
//       showTheCards(filtered);
//       searchDataEl.style.display = 'none';
//       overlay.style.display = 'none';
//       input.blur();
//     }
//   });

// }); // DOMContentLoaded end
