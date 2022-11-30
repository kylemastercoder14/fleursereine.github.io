// MENU TOGGLE //

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


// CART MODAL // 

const cart = gsap.timeline({
    paused: "true"
})

cart.to(".cart", {
    duration: .5,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Power4.easeOut
}, 0.1);

cart.staggerFrom(".close-cart, .cart-title, .cart-empty", 0.3, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

function open_cart() {
    cart.play();
}

function close_cart() {
    cart.reverse();
}

// SAVED MODAL // 

const save = gsap.timeline({
    paused: "true"
})

save.to(".save", {
    duration: .5,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Power4.easeOut
}, 0.1);

save.staggerFrom(".close-save, .save-title, .save-empty", 0.3, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

function open_save() {
    save.play();
}

function close_save() {
    save.reverse();
}

// SEARCH MODAL // 

const search = gsap.timeline({
    paused: "true"
})

search.to(".search", {
    duration: .5,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Power4.easeOut
}, 0.1);

search.staggerFrom(".search-group-content, .close-search, .search-title, .search-name, .search-group i", 0.3, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

function open_search() {
    search.play();
}

function close_search() {
    search.reverse();
}
