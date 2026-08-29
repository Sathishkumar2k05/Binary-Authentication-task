const slider = document.querySelector(".img-container2")
let speed = 1;
function slide() {
    slider.scrollLeft += speed;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){
        slider.scrollLeft = 0;
    }
    requestAnimationFrame(slide);
}
slide();

const footer = document.getElementById("footer");
window.addEventListener("scroll", ()=>{
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 100){
        footer.classList.add("show");
    }
});