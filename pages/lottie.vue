<template>
    <!-- width and height are optional -->
    <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" />
</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/img/chapter-9/fish.json";


export default {
    components: {
        lottie
    },
    data() {
        return {
            anim: null, // for saving the reference to the animation
            lottieOptions: { animationData: animationData.default }
        };
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        }
    }
}
</script>