export default {
    methods:{
        parallaxMove({
            sceneID,
            containerAnimation,
            element,
            scrub,
            intensity
        }){
            let scene = this.$refs['Scene' + sceneID];
            this.$gsap.to(element, {
                x: () =>  scene.offsetWidth * intensity,
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