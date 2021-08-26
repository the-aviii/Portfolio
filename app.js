const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navContent");

burger.addEventListener("click",()=>{
    console.log("Hello");
    burger.classList.toggle("open");
    navbar.classList.toggle("navOpen");
});


let tl1 = gsap.timeline({ defaults: {
    opacity: 0
}})
tl1.from('nav', {opacity: 0, duration: 2 })
    .from('.heroContent', { duration: 2 })
    .from('.heroImg', { duration: 1 })
    .from('.heroImg-svg', { duration:0.3 })
    .from('.heroLinks', { x:'100%' })

gsap.timeline({ scrollTrigger: {
    trigger: '.about',
    start: '300px bottom',
    end: '200px top',
}}).from('.about .title', { x: '-100%', opacity: 0, duration: .7 })
    .from('.aboutContent p', { rotateX: '90deg', stagger: 0.5 })
    .from('.skillCards .card', { x: '-100%', opacity: 0, duration: .7,
    stagger: .6 })

gsap.timeline({ scrollTrigger: {
    trigger: '.projects',
    start: '300px bottom',
    end: '200px top'
}}).from('.projects .title', { x: '-100%', opacity: 0, duration: .7 })
    .from('.projectCards a', { y:'50%', opacity: 0 , duration: 0.7, stagger: 0.4 })