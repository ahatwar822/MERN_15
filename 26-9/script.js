

        // keybord event
        let img = document.querySelector("#img")

        let img1 = document.querySelector("img")
        

        let numx = 0;
        let numy = 0;
        let numz = 360;

        document.addEventListener("keydown", (event) => {
            

            if(event.key === "ArrowRight"){
                numy+=10;
                img1.style.left = `${numy}px`;
                
            }
            if(event.key === "ArrowLeft"){
                numy-=20;
                img1.style.left = `${numy}px`;
            }
            if(event.key === "ArrowUp"){
                numx-=20;
                img1.style.top = `${numx}px`;
            }
            if(event.key === "ArrowDown"){
                numx+=20;
                img1.style.top = `${numx}px`;
            }
            if(event.key === "Enter"){
                numx = 0;
                numy = 0;
                
                img1.style.top = `${numx}px`;
                img1.style.left = `${numy}px`;
            }
           // rotate on key press r
            if(event.key === "r"){
                numz+=10;

                img1.style.transform = "rotate("+numz+"deg)";
                // img1.style.transform = `rotate(${numz}deg)`;
            }
        })
