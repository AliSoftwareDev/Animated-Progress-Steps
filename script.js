const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

let currentActive = 0;

next.addEventListener("click", () => {
        currentActive++;
        if(currentActive > circles.length) {
                currentActive = circles.length;
        }

        update();
})

previous.addEventListener("click", () => {
        currentActive--;
        if(currentActive < 1) {
                currentActive = 1;
        }
        update();
});

function update() {
        circles.forEach((circles, index) => {
                if(index < currentActive) {
                        circles.classList.add("active");
                } else {
                        circles.classList.remove("active");
                }
        })

        const actives = document.querySelectorAll(".active");

        progress.style.width = (actives.length -1) / (circles.length -1) * 100 + "%";

        if(currentActive === 1){
                previous.disabled = true;
        } else if(currentActive === circles.length) {
                next.disabled = true;
        } else {
                previous.disabled = false;
                previous.disabled = false;
        }
}