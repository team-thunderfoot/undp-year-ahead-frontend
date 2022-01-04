export default {
    methods:{
        startAnimation({
            sceneID,
            scrollTween
        }){
            this.$gsap.to(document.querySelector('#Scene' + sceneID), {
                ease: "none",
                scrollTrigger: {
                    trigger: "#Scene" + sceneID,
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