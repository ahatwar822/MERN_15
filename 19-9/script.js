  
        let h4 = document.querySelector("nav h4");
        let i = document.querySelector("nav h4 i");
        let full = document.querySelector("#full");

        let flag = 0;

        h4.addEventListener("click", () => {

            if (flag == 0) {
                full.style.transform = "translateX(0)";
                h4.innerHTML = `<i class="ri-close-fill"></i>`;
                flag = 1;
            } else {
                full.style.transform = "translateX(100%)";
                flag = 0;
            }
            
        })
