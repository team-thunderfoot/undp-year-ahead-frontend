export default {
    methods:{
        parallaxMove({
            el,
            intensity,
            duration,
            containerAnimation,
            // scrub
        }){
            this.$gsap.to(el, {
                x: () =>  duration * -intensity/10,
                ease: "none",
                scrollTrigger: {
                    containerAnimation: containerAnimation,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });
        },
       
    },
}