gsap.set("#transition", { y: "100%" });

function overlayIn() {
    return gsap.to("#transition", {
        y: "0%",
        duration: 1.2,
        ease: "power3.inOut"
    });
}

function overlayOut() {
    return gsap.to("#transition", {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
            gsap.set("#transition", { y: "100%" });
        }
    });
}

barba.init({
    sync: true,

    transitions: [{
        name: "overlay-effect",

        leave() {
            return overlayIn();
        },

        enter() {
            return overlayOut();
        }
    }]
});
