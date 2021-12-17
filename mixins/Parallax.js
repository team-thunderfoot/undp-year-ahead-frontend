export default {
    methods:{
        parallaxMove({
            sceneID,
            containerAnimation,
            element,
            scrub,
            intensity
        }){
            console.log(element);
            // let scene1 = document.querySelector("#Scene" + sceneID);
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