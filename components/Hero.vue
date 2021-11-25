<template>
    <div class="b--hero-a">
        <div class="b--hero-a__bg-items">
            <v-wave 
                delay=".05"
                colorWave="#134074" 
                bottomPosition="72px" 
            />   
            <v-wave 
                colorWave="#13315C"
                bottomPosition="48px" 
                delay="0"
            />
            <v-wave 
                delay=".01"
                colorWave="#0B2545" 
                bottomPosition="-1px" 
            />          
        </div>
        <div class="b--hero-a__ft-items">
            <div class="b--hero-a__ft-items__wrapper">
               <div class="f--container">
                   <div class="f--col-8 f--offset-2">
                        <h3 class="b--hero-a__ft-items__wrapper__title" ref="title">{{this.title}}</h3>
                        <SanityContent class="b--hero-a__ft-items__wrapper__content b--content-a" :blocks="this.description" />
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>

import Wave from './Wave.vue'; // SVG Path with Animation
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content';
export default {
    props:['title','description'],
    components:{
        'v-wave':Wave,
        SanityContent
    },
}
</script>
