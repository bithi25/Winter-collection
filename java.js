const header = document.querySelector("header")

window.addEventListener ("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
});