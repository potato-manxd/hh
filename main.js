let tip = 0;

document.querySelector("button").onclick = (e) => {
    tip = 0.5
    document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    document.querySelector(".b").textContent = ((document.querySelector("input").value * tip + document.querySelector("input").value) / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    e.preventDefault();
}

document.querySelectorAll("button")[1].onclick = (e) => {
    tip = 1
    document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    document.querySelector(".b").textContent = ((document.querySelector("input").value * tip + document.querySelector("input").value) / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)

    e.preventDefault();
}

document.querySelectorAll("button")[2].onclick = (e) => {
    tip = 1.5
    document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    document.querySelector(".b").textContent = ((document.querySelector("input").value * tip + document.querySelector("input").value) / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)

    e.preventDefault();
}

document.querySelectorAll("button")[3].onclick = (e) => {
    tip = 2.5
    document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    document.querySelector(".b").textContent = ((document.querySelector("input").value * tip + document.querySelector("input").value) / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)

    e.preventDefault();
}

document.querySelectorAll("button")[4].onclick = (e) => {
    tip = 5
    document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)
    document.querySelector(".b").textContent = ((document.querySelector("input").value * tip + document.querySelector("input").value) / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)

    e.preventDefault();
}

document.querySelectorAll("button")[5].onclick = (e) => {
    document.querySelectorAll("input")[1].style.transform = "rotatex(0deg)"
    document.querySelectorAll("input")[1].onblur = () => {
        for (let i = 0; i < 1000; i++) {
            if (document.querySelectorAll("input")[1].value == i + 1) {
                tip = (i + 1) / 10
            }
        }
        document.querySelector(".a").textContent = (document.querySelector("input").value * tip / (document.querySelectorAll("input")[2].value + 0.001)).toFixed(2)

        document.querySelector(".b").textContent = (document.querySelector("input").value * tip + Number(document.querySelector("input").value) / (Number(document.querySelectorAll("input")[2].value) + 0.001)).toFixed(2)
    }
    e.preventDefault();
}

document.querySelectorAll("button")[6].onclick = () => {
    e.preventDefault()
    location.reload()
}