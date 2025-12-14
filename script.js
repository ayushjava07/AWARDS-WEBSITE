function locomotive() {
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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function loderanimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {

        y: 150,
        stagger: 0.3,
        duration: 0.7,
        delay: 0.5,
    })
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var count = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    count.innerHTML = grow++;
                }
                else {
                    count.innerHTML = grow;
                }
            }, 40)
        }
    })
    tl.to(".line h2", {
        opacity: 1,
        animationName: "fontchange"
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 1,
        // delay:1,

    })
    tl.from("#page1", {
        y: 120,
        opacity: 0,
        delay: 0.22,
        ease: "power4.out"

    })
    tl.to("#loader", {
        display: "none",
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3,#hero4 h1", {
        y: 100,
        stagger: 0.1,
        opacity: 0,
        duration: 1,

    })
}
function cursor() {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    var mousemove = document.querySelector("#video1");
    var vid = document.querySelector("#video1 video");
    var cursor = document.querySelector("#video-cursor");
    mousemove.addEventListener("mouseenter", function () {
        mousemove.addEventListener("mousemove", function (pos) {
            gsap.to(".mousefollower", {
                opacity: 0
            }),
                gsap.to("#video-cursor", {
                    left: pos.x - 450,
                    top: pos.y - 400,
                })
        })
    })
    Shery.makeMagnet("#navpart3 h4, #nav .brand_svg, #social h4, #social h5" /* Element to target.*/, {
        //Parameters are optional.

    });
    mousemove.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
        })
        gsap.to("#video-cursor", {
            left: 95,
            top: -25,
        })
    })
    var flag = 0;
    mousemove.addEventListener("click", function () {
        if (flag == 0) {
            vid.play();
            vid.style.opacity = 1;
            cursor.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 0.5
            })
            flag = 1
        }

        else {
            vid.pause();
            vid.style.opacity = 0;
            cursor.innerHTML = `<i class="ri-play-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0
        }

    })
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flg", {
            x: dets.x - 650,
            y: dets.y - 550,

        })
    })
    // Correct logic: changing the flag animation to be consistently attached
    let hero3 = document.querySelector("#hero3");
    if (hero3) {
        hero3.addEventListener("mouseenter", function () {
            gsap.to("#flg", {
                opacity: 1
            });
        });
        hero3.addEventListener("mouseleave", function () {
            gsap.to("#flg", {
                opacity: 0
            });
        });
    }
}
function sheryanimation() {
    Shery.imageEffect("#image-div", {
        style: 4,
        gooey: true,
        // debug:true,
        // config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    });

}

function scrollAnimation() {
    gsap.from("#page3 .container h1, #page3 .container p, #page3 #imagearea, #page3 .inelem", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 60%",
            end: "top 30%",
            scrub: 2
        }
    });

    gsap.from("#ourprojects h1, #ourprojects .underline", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#ourprojects",
            scroller: "#main",
            start: "top 70%",
            end: "top 50%",
            scrub: 1
        }
    });

    // Animate project images
    gsap.utils.toArray("#image-div, #image-divc").forEach(function (elem) {
        gsap.from(elem, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: elem,
                scroller: "#main",
                start: "top 80%",
                end: "top 50%",
                scrub: 1
            }
        });
    });
}

loderanimation();
cursor();
locomotive();
sheryanimation();
scrollAnimation();


