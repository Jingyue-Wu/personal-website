//-----------navbar anchor tag 

document.querySelectorAll(".navlink").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
});

typewriter
    .pauseFor(2100)
    .typeString("Engineering Student")
    .deleteAll()
    .pauseFor(300)
    .typeString("Creative Designer")
    .deleteAll()
    .pauseFor(300)
    .typeString("Web Developer")
    .deleteAll()
    .pauseFor(300)
    .typeString("Photographer")
    .deleteAll()
    .pauseFor(300)
    .start();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        }
    });
});



const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



const hiddenFooter = document.querySelectorAll(".hidden2");
hiddenFooter.forEach((el) => observer2.observe(el));






// const parallax = document.querySelectorAll("parallax");

// let scrollAmount = 0;
// let oldScrollAmount = 0;

// window.addEventListener("scroll", () =>{
//     const scrollTop = window.scrollY;
//     parallax.forEach(card =>{
//         if(scrollTop + window.innerHeight > card.offsetTop){
//             if(scrollTop > oldScrollAmount){
//                 scrollAmount--;
//             } else if(scrollTop < oldScrollAmount){
//                 scrollAmount ++;
//             }
//             parallax.style.transform = `translateY(${scrollAmount*0.5}px)`;
//         }
//     });
//     oldSrollAmount = scrollTop;
// });
