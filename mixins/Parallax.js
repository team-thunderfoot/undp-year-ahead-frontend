export default {
    methods:{
        parallaxMove({
            el,
            intensity,
            duration,
            containerAnimation,
        }){
            this.$gsap.to(el, {
                x: () =>  duration * -intensity/10,
                force3D:false,
                ease: "none",
                scrollTrigger: {
                    containerAnimation: containerAnimation,
                    scrub: true,
                    // invalidateOnRefresh: true,
                }
            });
        },
       
    },
}