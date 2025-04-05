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
    y:1200,
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

 