export default {
    methods:{
        startAnimation({
            sceneID,
            scrub,
        }){
            this.queryString = window.location.search;
            this.urlParams = new URLSearchParams(this.queryString);
           
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
                        console.log(sceneID);
                        $nuxt.$emit('changeCurrent', { item:sceneID })
                    },
                    onEnterBack: () => {
                    // emits on in Story.vue
                        $nuxt.$emit('changeCurrent', { item:sceneID })
                        console.log('back',sceneID);
                    },
                }
            })
        }
    },
}