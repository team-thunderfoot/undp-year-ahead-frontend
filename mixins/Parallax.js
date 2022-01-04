

export default {
    methods:{
        parallaxMove({
            el,
            intensity,
            duration,
            containerAnimation,
        }){
            if(this.$device.isMobileOrTablet){
                var force = "auto";
            } else {
                var force = false;
            }
            this.$gsap.to(el, {
                x: () =>  duration * -intensity/10,
                force3D: force,
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