export default {
    methods:{
        startAnimation({
            sceneID,
            scrub,
            scrollTween
        }){
            let tlSection = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: '#Scene' + sceneID,
                    scrub: scrub,
                    // containerAnimation: scrollTween,
                    start: () =>
                    'top top-=' +
                    (this.$refs['Scene' + sceneID].offsetLeft -
                        window.innerWidth),
                    end: () => '+=' + this.$refs['Scene' + sceneID].offsetWidth,
                    onEnter: () => {
                    // emits on in Story.vue
                        $nuxt.$emit('changeCurrent', { item:sceneID })
                    },
                    onEnterBack: () => {
                    // emits on in Story.vue
                        $nuxt.$emit('changeCurrent', { item:sceneID })
                    },
                }
            })
        }
    },
}