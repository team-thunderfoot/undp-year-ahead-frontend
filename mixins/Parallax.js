export default {
    methods:{
        parallaxMove({
            el,
            intensity,
            duration,
            containerAnimation,
            scrub
        }){
            this.$gsap.to(el, {
                x: () =>  duration * -intensity/10,
                force3D:false,
                ease: "none",
                // ease: "bounce.out",
                scrollTrigger: {
                    containerAnimation: containerAnimation,
                    scrub: scrub,
                    invalidateOnRefresh: true,
                }
            });
        },
       
    },
}