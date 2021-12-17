export default {
    methods:{
        parallaxMove({
            el,
            intensity,
            duration,
            containerAnimation,
            scrub
        }){
            console.log('parallaxMove',el,intensity,duration,containerAnimation,scrub)
            this.$gsap.to(el, {
                x: () =>  duration.offsetWidth * intensity,
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