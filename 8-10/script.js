
let h3 = document.querySelector("h3")

let btn = document.querySelector("button")

let inner = document.querySelector("#inner")


function btn1() {
    let per = 0;
    let color = 0;


    let progess = setInterval(function () {
        per++;
        color++;
        h3.innerHTML = `Downloding...${per}%`
        inner.style.width = `${color}%`

        if (per == 100) {
            h3.innerHTML = `Download Completed ${per}%`;
            h3.style.color = "green";
            btn.disabled = false;
        }else(
            h3.style.color = "red"
        )

    }, 50);

    setTimeout(() => {
        clearInterval(progess)
    }, 5000);

    btn.disabled = true;

}

btn.addEventListener('click', btn1)





