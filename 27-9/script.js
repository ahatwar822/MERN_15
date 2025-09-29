// playing all imge in bottom div
        let images = document.querySelectorAll("img");
        let bottom = document.querySelector(".bottom");

        let to = Math.floor(Math.random() * 100);
        let left = Math.floor(Math.random() * 100);
        let transform = Math.floor(Math.random() * 360);
        let height = Math.floor(Math.random() * 150);


        images.forEach((img) => {



            img.addEventListener("click", () => {
                let imgsrc = img.getAttribute("src");
                let newimg = document.createElement("img");

                let to = Math.floor(Math.random() * 100);
                let left = Math.floor(Math.random() * 100);
                let transform = Math.floor(Math.random() * 360);
                let height = Math.floor(Math.random() * 150);


                newimg.style.top = `${to}%`;
                newimg.style.left = `${left}%`;
                newimg.style.transform = `rotate(${transform}deg)`;
                newimg.style.height = `${height}px`;
                newimg.style.position = "absolute";

                newimg.setAttribute("src", imgsrc);
                bottom.appendChild(newimg);

            })
        })