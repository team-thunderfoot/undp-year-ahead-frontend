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
                x: () =>  duration * intensity,
                ease: "none",
                scrollTrigger: {
                    containerAnimation: containerAnimation,
                    scrub: scrub,
                    invalidateOnRefresh: true,
                }
            });
        },
       
    },
}