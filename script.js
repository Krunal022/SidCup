var crsr = document.querySelector("#cursor");
var main = document.querySelector("#main");
var blurr = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";
//     blur.style.left = dets.x - 250 + "px";
//     blur.style.top = dets.y - 250 + "px";
// });

window.addEventListener("mousemove", function (dets) {
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});
window.addEventListener("mousemove", function (dets) {
  gsap.to(blurr, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
  });
});

gsap.to("nav", {
  backgroundColor: "black",
  height: "10vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
