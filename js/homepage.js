console.log("Home Page")

gsap.registerPlugin(ScrollTrigger);


// $(window).on('beforeunload', function() {
//     $('body').hide();
//     $(window).scrollTop(0);
// });      

$(window).on('pagehide', function() {
    // $('body').hide();
    $(window).scrollTop(0);
});

$(document).ready(function () {

    // Remove preloader
    if (document.querySelector(".hide-page")) {
        window.setTimeout(function () {
            document.querySelector(".hide-page").classList.add("show-page");

            window.setTimeout(() => {
                document.querySelector(".hide-page").classList.remove("show-page");
                document.querySelector(".hide-page").classList.remove("hide-page");
            }, 500);

            // reset scroll position on load, after allowing page overflow
            // but *only* if URL has no anchor mention
            if (!goingToAnchor) {
                document.querySelector("html").scroll(0, 0);
                window.scroll(0, 0);
            }
        }, 150);
    }

    //-----------------------------------------------
    // LENIS SMOOTH SCROLL
    let lenis;
    if (Webflow.env("editor") === undefined) {
        lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 0.7,
            gestureOrientation: "vertical",
            normalizeWheel: false,
            smoothTouch: false
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
    $("[data-lenis-start]").on("click", function () {
        lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
        lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
        $(this).toggleClass("stop-scroll");
        if ($(this).hasClass("stop-scroll")) {
            lenis.stop();
        } else {
            lenis.start();
        }
    });
    // END - LENIS SMOOTH SCROLL
    //-----------------------------------------------



    // BLOH POST - SOCIAL SHARE
    document.querySelectorAll('.inner_cell_feature_row .link_icon_more_info').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var div = this.nextElementSibling; // Select the next sibling (the span element)
            if (div.style.display === 'none' || div.style.display === '') {
                div.style.display = 'inline';
            } else {
                div.style.display = 'none';
            }
        });
    });



    let isHomepage = document.querySelector(".home-page");
    if (isHomepage) {
  

            // BACKGROUND BLOCKS - ANIMATION

            // LEFT to RIGTH

            function animateElement_01() {
                gsap.to(".rect_01_section_top_hp", {
                    duration: 17.25,
                    x: '110vw',
                    ease: "none",
                    onComplete: continueAnimateElement_01 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_01() {
                gsap.killTweensOf(".rect_01_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_01_section_top_hp", { 
                    x: '-10vw',
                },{
                    duration: 17.25, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_01 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_01();



            function animateElement_02() {
                gsap.to(".rect_02_section_top_hp", {
                    duration: 25.25,
                    x: '110vw',
                    ease: "none",
                    onComplete: continueAnimateElement_02 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_02() {
                gsap.killTweensOf(".rect_02_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_02_section_top_hp", { 
                    x: '-40vw',
                },{
                    duration: 25.25, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_02 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_02();



            function animateElement_03() {
                gsap.to(".rect_03_section_top_hp", {
                    duration: 31.79,
                    x: '110vw',
                    ease: "none",
                    onComplete: continueAnimateElement_03 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_03() {
                gsap.killTweensOf(".rect_03_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_03_section_top_hp", { 
                    x: '-30vw',
                },{
                    duration: 31.79, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_03 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_03();



            function animateElement_04() {
                gsap.to(".rect_04_section_top_hp", {
                    duration: 26.1,
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_04 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_04() {
                gsap.killTweensOf(".rect_04_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_04_section_top_hp", { 
                    x: '-30vw',
                },{
                    duration: 26.1, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_04 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_04();



            function animateElement_05() {
                gsap.to(".rect_05_section_top_hp", {
                    duration: 35.12,
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_05 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_05() {
                gsap.killTweensOf(".rect_05_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_05_section_top_hp", { 
                    x: '-40vw',
                },{
                    duration: 35.12, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_05 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_05();



            function animateElement_06() {
                gsap.to(".rect_06_section_top_hp", {
                    duration: 29.29,
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_06 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_06() {
                gsap.killTweensOf(".rect_06_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_06_section_top_hp", { 
                    x: '-50vw',
                },{
                    duration: 29.29, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_06 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_06();



            function animateElement_07() {
                gsap.to(".rect_07_section_top_hp", {
                    duration: 25.47,
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_07 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_07() {
                gsap.killTweensOf(".rect_07_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_07_section_top_hp", { 
                    x: '-20vw',
                },{
                    duration: 25.47, // Set the duration for the subsequent animations
                    x: '100vw',
                    ease: "none",
                    onComplete: continueAnimateElement_07 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_07();




            // RIGTH to LEFT
            function animateElement_08() {
                gsap.to(".rect_08_section_top_hp", {
                    duration: 23,
                    x: '-20vw',
                    ease: "none",
                    onComplete: continueAnimateElement_08 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_08() {
                gsap.killTweensOf(".rect_08_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_08_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 23, // Set the duration for the subsequent animations
                    x: '-20vw',
                    ease: "none",
                    onComplete: continueAnimateElement_08 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_08();



            function animateElement_09() {
                gsap.to(".rect_09_section_top_hp", {
                    duration: 13,
                    x: '-40vw',
                    ease: "none",
                    onComplete: continueAnimateElement_09 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_09() {
                gsap.killTweensOf(".rect_09_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_09_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 13, // Set the duration for the subsequent animations
                    x: '-40vw',
                    ease: "none",
                    onComplete: continueAnimateElement_09 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_09();



            function animateElement_10() {
                gsap.to(".rect_10_section_top_hp", {
                    duration: 17,
                    x: '-20vw',
                    ease: "none",
                    onComplete: continueAnimateElement_10 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_10() {
                gsap.killTweensOf(".rect_10_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_10_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 17, // Set the duration for the subsequent animations
                    x: '-20vw',
                    ease: "none",
                    onComplete: continueAnimateElement_10 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_10();



            function animateElement_11() {
                gsap.to(".rect_11_section_top_hp", {
                    duration: 29,
                    x: '-80vw',
                    ease: "none",
                    onComplete: continueAnimateElement_11 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_11() {
                gsap.killTweensOf(".rect_11_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_11_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 29, // Set the duration for the subsequent animations
                    x: '-80vw',
                    ease: "none",
                    onComplete: continueAnimateElement_11 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_11();



            function animateElement_12() {
                gsap.to(".rect_12_section_top_hp", {
                    duration: 26,
                    x: '-25vw',
                    ease: "none",
                    onComplete: continueAnimateElement_12 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_12() {
                gsap.killTweensOf(".rect_12_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_12_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 26, // Set the duration for the subsequent animations
                    x: '-25vw',
                    ease: "none",
                    onComplete: continueAnimateElement_12 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_12();


            function animateElement_13() {
                gsap.to(".rect_13_section_top_hp", {
                    duration: 20,
                    x: '-33vw',
                    ease: "none",
                    onComplete: continueAnimateElement_13 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_13() {
                gsap.killTweensOf(".rect_13_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_13_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 20, // Set the duration for the subsequent animations
                    x: '-33vw',
                    ease: "none",
                    onComplete: continueAnimateElement_13 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_13();



            function animateElement_14() {
                gsap.to(".rect_14_section_top_hp", {
                    duration: 10,
                    x: '-10vw',
                    ease: "none",
                    onComplete: continueAnimateElement_14 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_14() {
                gsap.killTweensOf(".rect_14_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_14_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 10, // Set the duration for the subsequent animations
                    x: '-10vw',
                    ease: "none",
                    onComplete: continueAnimateElement_14 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_14();



            function animateElement_15() {
                gsap.to(".rect_15_section_top_hp", {
                    duration: 13,
                    x: '-25vw',
                    ease: "none",
                    onComplete: continueAnimateElement_15 // Call continueAnimation when the first animation completes
                });
            }
            function continueAnimateElement_15() {
                gsap.killTweensOf(".rect_15_section_top_hp"); // Clear any existing animations
                gsap.fromTo(".rect_15_section_top_hp", { 
                    x: '100vw',
                },{
                    duration: 13, // Set the duration for the subsequent animations
                    x: '-25vw',
                    ease: "none",
                    onComplete: continueAnimateElement_15 // Continue with the same animation pattern
                });
            }
            // Start the initial animation
            animateElement_15();





            

        // HERO COLORED "SNAKES" - ANIMATION
        const mainPath1 = document.getElementById('main-path-1');
        const mainPath1Length = mainPath1.getTotalLength();

        gsap.set(mainPath1, {
            strokeDasharray: mainPath1Length,
            strokeDashoffset: mainPath1Length
        });
        gsap.timeline({ 
            repeat: -1, 
            defaults: { 
                ease: "none" 
            } 
        })
        .to(mainPath1, { 
            strokeDashoffset: 4300, 
            duration: 10 
        });

        const mainPath2 = document.getElementById('main-path-2');
        const mainPath2Length = mainPath2.getTotalLength();

        gsap.set(mainPath2, {
            strokeDasharray: mainPath2Length,
            strokeDashoffset: mainPath2Length
        });
        gsap.timeline({ 
            repeat: -1, 
            defaults: { 
                ease: "none" 
            } 
        })
        .to(mainPath2, { 
            strokeDashoffset: 4300, 
            duration: 15 
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section_tech',
                start: 'top top',
                end:'bottom bottom', 
                scrub: true,
                // markers: {
                //     startColor: "orange", 
                //     endColor: "blue", 
                // }
            }
        })  
        .to(".wrapper-main-path-1, .wrapper-main-path-2", {
            css: {
                display: "none",
            }
        }, )
        ;












        const svgPath = $('.svg-path')[0];
        const pathLength = svgPath.getTotalLength();

        gsap.set(svgPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: -pathLength
        });

        //HONK LOGO - SCALED TRANSITION
        const line1 = $('.c1 path')[0];
        const line1Length = line1.getTotalLength();

        gsap.set(line1, {
            strokeDasharray: line1Length,
            strokeDashoffset: line1Length * 0.5,
        });

        const line2 = $('.c2 path')[0];
        const line2Length = line2.getTotalLength();

        gsap.set(line2, {
            strokeDasharray: line2Length,
            strokeDashoffset: line2Length * 0.5,
        });

        const line3 = $('.c3 path')[0];
        const line3Length = line3.getTotalLength();

        gsap.set(line3, {
            strokeDasharray: line3Length,
            strokeDashoffset: line3Length * 0.5,
        });
        // END HONK LOGO




        var ww = window.innerWidth,
        wh = window.innerHeight,
        speed = 5,
        scrollDist = wh * speed,
        scrollEnd = wh * (speed - 1)

        // Home page - section welcome
        const path = document.getElementById('path');
        const box = document.querySelector('.box_welcome');
        let h2 = document.querySelector(".section_welcome h2");

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section_welcome',
                start: 'top top',
                end:'+=' + scrollEnd, 
                scrub: 1,
                pin: true,
                // markers: true
            }
        })
        .to(box, {
            y: -670, // Move the box up
            ease: 'none',
            duration: 120,
        }, 40)
        .to(path, { 
            attr: { 
                y: -450,
                //height: 0
            },
            duration: 200,
        }, 45)
        .to(h2, {
            opacity: 0,
            // duration: 1,
            ease: "power3.out",
            delay: 0.3,
            duration: 100,
        }, 70)
        .from(".section_welcome .heading-style-h2", {
            opacity: 0,
            duration: 100,
            ease: "power3.out",
        }, 150)
        .to(".box_welcome .circle_bg.step-1", {
            duration: 50,
            opacity: 0,
        }, 170)
        /////////////////////////////////////////////
        //                   SCALE STARTS
        /////////////////////////////////////////////
        .to(".box_welcome", {
            scale: 80,
            duration: 300, // >>>>>>>>>>>>>>>>>>>>>>>>>     KEY VALUE       <<<<<<<<<<<<<<<<<
            y: -600,
            //ease: "expoScale(0.5,7,none)",
            ease: "none",
        }, 300)
        /////////////////////////////////////////////
        //                  GRADIENT
        /////////////////////////////////////////////
        .to(".box_welcome .circle_bg.step-2", {
            y: "-50%",
            duration: 100,
        }, 300)
        .to(line1, {
            strokeDashoffset: 0.1,
            duration: 50,
            ease: "power4.out",
        }, 301)
        .to(".c1",{
            duration: 50,
            css: {
                transformOrigin: "center center",
                rotate: "70deg",
            },
            ease: "power4.out",
        }, 301)
        .to(line2, {
            strokeDashoffset: 0.1,
            duration: 50,
            ease: "power4.out",
        }, 303)
        .to(".c2",{
            duration: 50,
            css: {
                transformOrigin: "center center",
                rotate: "70deg",
            },
            ease: "power4.out",
        }, 303)
        .to(line3, {
            strokeDashoffset: 0.1,
            duration: 50,
            ease: "power4.out",
        }, 305)
        .to(".c3",{
            duration: 50,
            css: {
                transformOrigin: "center center",
                rotate: "70deg",
            },
            ease: "power4.out",
        }, 305)
        .fromTo(".box_welcome svg .outer_circle", { 
            duration: 10,
            attr: {
                opacity: 1,
            }
        }, 
        { 
            attr: {
                opacity: 0.1,
            }
        }, 335)
        .fromTo(".box_welcome svg .inner_circle", { 
            duration: 10,
            attr: {
                opacity: 0.5,
            }
        }, 
        { 
            attr: {
                opacity: 0.1,
            }
        }, 335)
        .to(".box_welcome svg g path", {
            duration: 10,
            attr: {
                stroke: "#000000",
            }
        }, 335)
        .to(".section_transition", {
            css: {
                zIndex: "5",
            }
        }, 350)
        /////////////////////////////////////////////
        //         FADEOUT | H2 SECTION WELCOME
        /////////////////////////////////////////////
        .to(".section_welcome .heading-style-h2", {
            opacity: 0,
        }, 400)
        /////////////////////////////////////////////
        //          FADEOUT | SCALE 
        /////////////////////////////////////////////
        .to(".box_welcome", {
            //scale: 120,
            duration: 90,
            opacity: 0,
        }, 460)
        ;






        gsap.timeline({
            scrollTrigger: {
                trigger: '.section_industries',
                start: '-20% bottom',
                end:'10% center', 
                scrub: true,
                // markers: {
                //     startColor: "orange", 
                //     endColor: "blue", 
                // }
            }
        })  
        .to(".section_transition h2", {
            opacity: 0,
            duration: 2,
        }, )
        ;



        gsap.timeline({
            scrollTrigger: {
                trigger: '.section_services_hp',
                start: 'top top',
                end:'bottom bottom', 
                scrub: true,
                // markers: {
                //     startColor: "orange", 
                //     endColor: "blue", 
                // }
            }
        })  
        .to(".section_transition", {
            opacity: 0,
            duration: 0.001,
            css: {
                zIndex: "-1",
            }
        }, )
        ;


        // PARALLAX - INDUSTRIES IMAGE GRID


        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", ()=> {

            gsap.to(".content_industries .item_industry:nth-child(1)", {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });
    
            gsap.to(".content_industries .item_industry:nth-child(2)", {
                yPercent: -5,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });
    
            gsap.to(".content_industries .item_industry:nth-child(3)", {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });
    
    
            gsap.to(".content_industries .item_industry:nth-child(3n + 4) ", {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });
    
            gsap.to(".content_industries .item_industry:nth-child(3n + 5) ", {
                yPercent: -5,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });
    
            gsap.to(".content_industries .item_industry:nth-child(3n + 6) ", {
                yPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_industries",
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: 1
                }, 
            });

        });




        // Home page - plans level section
        const innerCards = document.querySelector(".wrapper_levels_cards");
        let innerCardsWidth = innerCards.offsetWidth;

        function calculateAmountToScroll() {
            let amountToScroll;
            if (window.innerWidth < 992) {
              amountToScroll = (innerCardsWidth - window.innerWidth) + (window.innerWidth / 6);
            } else {
              amountToScroll = (innerCardsWidth - window.innerWidth) + (window.innerWidth / 1.5);
            }
            return amountToScroll;
        }
          
        // Example usage
        window.addEventListener('resize', function() {
            let amountToScroll = calculateAmountToScroll();
            console.log('Amount to Scroll:', amountToScroll);
        });
        
        // Initial calculation
        let amountToScroll = calculateAmountToScroll();
        console.log('Initial Amount to Scroll:', amountToScroll);
        
        const mainPath4 = document.getElementById('main-path-4');
        const mainPath4Length = mainPath4.getTotalLength();

        gsap.set(mainPath4, {
            strokeDasharray: mainPath4Length,
            strokeDashoffset: mainPath4Length
        });

        const tween = gsap.to(innerCards, {
            //x: -amountToScroll,
            x: -amountToScroll,
            duration: 3,
            ease: "none"
        });

        ScrollTrigger.create({
            trigger: ".section_levels_cards",
            start: "top top",
            end: "+=" + amountToScroll,
            pin: true,
            animation: tween,
            scrub: 1,
            // invalidateOnRefresh: true,
            // anticipatePin: 1,
            // markers: true,
            // markers: {
            //     startColor: "orange", 
            //     endColor: "blue", 
            // }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".section_levels_cards",
                start: "top top",
                end: "+=" + amountToScroll,
                scrub: 1,
            }
        })
        .to(mainPath4, { 
            strokeDashoffset: 0, 
            duration: 10 
        });

    }














    // PRELOADER
    function preloaderReveal(){
        const tlPreloader = gsap.timeline();

        tlPreloader.to(".preloader_logo, .numbers-preoloader, .text_loading", {
            opacity: 1,
            duration: 1,
            ease: "none"
        }, 0); 

        // Animate the percentage text
        tlPreloader.to("#percentage", {
        innerText: 100,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "none",
        onUpdate: function() {
            document.getElementById("percentage").innerText = Math.round(this.targets()[0].innerText) + "%";
        }
        }, "<");

        // Animate the lines
        tlPreloader.to(".line", {
        width: "100vw",
        duration: 2.5,
        ease: "none"
        }, "<"); // Start this animation at the same time as the percentage text

        // Curtain effect: collapse .top and .bottom divs towards the center
        tlPreloader.to(".content-1-preloader", {
        css: {
            padding: "0px",
            height: "0%",
        },
        duration: 2,
        ease: "power2.inOut"
        });

        tlPreloader.to(".content-2-preloader", {
        css: {
            padding: "0px",
            height: "0%",
        },
        duration: 2,
        ease: "power2.inOut"
        }, "<"); // Start this animation at the same time as the previous one

        tlPreloader.to(".preloader_logo, .numbers-preoloader, .text_loading", {
            opacity: 0,
            ease: "none"
        }, 5.5); 

        tlPreloader.to(".section-preloader", {
            css: {
            zIndex: "-100",
            },
            duration: 0.1,
            ease: "none"
        }, 4.5); // Start this animation at the same time as the previous one


        var vw = window.innerWidth;
        var pathLine = document.getElementById('path4');
        newD = `M${vw} 3L0 3`;
        pathLine.setAttribute('d', newD);

        var pathLine5 = document.getElementById('path5');
        newD5 = `M${vw} 3L0 3`;
        pathLine5.setAttribute('d', newD5);
    }
    //preloaderReveal();









    //-----------------------------------------------
    // Session Storage

    // get session storage var - this var is initialized the moment a tab is opened for the first time
    let sessionInit = sessionStorage.getItem("sessionInit");
    let loader = document.querySelector(".section-preloader");

    // check if storage var exists - if it doesn't, then this is the first time the tab is loaded
    // show intro loader and init observer
    if (sessionInit == null) {
        sessionStorage.setItem("sessionInit", true);

        // Reveal preloader
        preloaderReveal();
        // Reveal hero content
        //heroContentReveal(10);
    } else {
        if (loader) {
            //document.querySelector("body").classList.remove("overflow-hidden");

            loader.style.display = "none";
            loader.remove();

            // Reveal hero content
            //heroContentReveal(3);
        }
    }
    console.log(sessionInit);

    // END Session Storage
    //-----------------------------------------------




    // const hamburgerButton = document.getElementById('burger-button');
    // hamburgerButton.addEventListener('click', function() {
    //     document.body.classList.toggle('menu-open');
    // });

    $('#burger-button').on('click', function() {
        $('body').toggleClass('menu-open');

        // Optional: Toggle aria-expanded attribute for accessibility
        let isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !isExpanded);
    });

    // if (document.querySelector(".menu-open")) {
    //     $('.nav_fixed, .nav_component, .nav_container').on('click', function() {
    //         $('body').removeClass('menu-open');
    //     });
    // }


    

});