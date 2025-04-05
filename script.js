function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loderanimation(){
    var tl=gsap.timeline();
tl.from(".line h1",{

    y:150,
    stagger:0.3,
    duration:0.7,
    delay:0.5,
})
tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var count=document.querySelector("#line1-part1 h5");
        var grow=0;
        setInterval(function(){
        if(grow<100){
            count.innerHTML=grow++;
        }
        else{
            count.innerHTML=grow;
        }
        },25)
    }
})
tl.to(".line h2",{
    opacity:1,
    animationName:"fontchange"
})
tl.to("#loader",{
    opacity:0,
    duration:1,
    // delay:1,

})
tl.from("#page1",{
    y:120,
    opacity:0,
    delay:0.22,
    ease:"power4.out"

})
tl.to("#loader",{
    display:"none",
})
tl.from("#hero1 h1,#hero2 h1,#hero3,#hero4 h1",{
    y:100,
    stagger:0.1,
    opacity:0,
    duration:1,
    
})
}
function cursoranimation(){
    document.addEventListener("mousemove", (event) => {
        gsap.to("#crsr", {
          x: event.clientX,
          y: event.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      });
      
      Shery.makeMagnet("#navpart3 h4" /* Element to target.*/, {
        //Parameters are optional.
        
      });
      Shery.makeMagnet("#nav .brand_svg" /* Element to target.*/, {
        //Parameters are optional.
      });
}
loderanimation();
cursoranimation();
locomotive();
