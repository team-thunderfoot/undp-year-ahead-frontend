export default {
    methods:{
        parallaxMove({
            containerAnimation,
            element,
            scrub,
            intensity
        }){
            
            let scene1 = document.querySelector("#Scene1");
            this.$gsap.to(element, {
                x: () =>  scene1.offsetWidth * intensity,
                ease: "none",
                scrollTrigger: {
                    containerAnimation: containerAnimation,
                    scrub: scrub,
                    // markers: 'false',
                    id: "1",
                    invalidateOnRefresh: true,
                }
            });

        }
    },
}