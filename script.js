function realPageAnimation() {
  gsap.to(".nature", {
    scrollTrigger: {
      trigger: ".nature-section ",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function heroAnimation() {
  gsap.to(".hero-section .img img", {
    scrollTrigger: {
      trigger: ".hero-section",
      pin: true,
      scrub: 1,
    },
    scale: 1.1,
    ease: Power3,
  });
}


heroAnimation();
realPageAnimation();
// loco()
