<template>
    <svg class="b--hero-a__bg-items__artwork" 
        :fill="this.colorWave" 
        :style="{'bottom':this.bottomPosition}"
        width="100%" viewBox="0 0 1440 240">
        <path  d="M0 120 Q360 60 720 120 T 1440 120 V240 H0 Z"
        v-gsap.to="{duration: 6,attr:{d:'M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z'},repeat:-1,ease: 'none',yoyo:true,delay: this.delay,repeatDelay: .3,}"
        ></path>
    </svg>
</template>

<script>
import gsap from 'gsap';
export default {
    props:[
        'colorWave',
        'bottomPosition',
        'delay'
    ],
        
}
</script>