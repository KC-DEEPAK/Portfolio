// GSAP animations
gsap.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".nav-links li", {
    y: -30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
});

gsap.from(".home h2", {
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".home h3", {
    x: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".home p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".btn", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 0.8
});
