const menu = gsap.timeline({
    paused: "true"
})
menu.to(".menu-items", {
    duration: .5,
    opacity: 1,
    x: 0,
    scale: 1,
    ease: Power4.easeOut
}, 0.1);
menu.from(".close-toggle", {
    opacity: 0,
    duration: .5,
    rotate: "180deg"
});
menu.staggerFrom(".menu-lists li, hr", 0.3, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

menu.staggerFrom(".contact-info h3", 0.3, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

function open_menu() {
    menu.play();
}

function close_menu() {
    menu.reverse();
}