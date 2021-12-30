export default {
    methods:{
        startAnimation({
            sceneID,
            scrub,
            scrollTween
        }){
            this.$gsap.to(document.querySelector('#Scene' + sceneID), {
                ease: "none",
                scrollTrigger: {
                    trigger: "#Scene" + sceneID,
                    // markers:true,
                    containerAnimation: scrollTween,
                    scrub: true,
                    onEnter: ()=>{
                        $nuxt.$emit('changeCurrent', { item:sceneID })
                    },
                    onLeaveBack: () => {
                        $nuxt.$emit('changeCurrent', { item:sceneID - 1 })
                    },
                }
            });
        }
    },
}