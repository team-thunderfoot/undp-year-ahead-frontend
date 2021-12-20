<template>
  <div>
      <div class="f--container">
          <div class="f--row">
              <div class="f--col-12">
                    <!-- bubble -->
                    <div class="b--motion-a" v-lazy:background-image="require(`@/assets/test_sprites/speech.png`)"></div>
              </div>

              <div class="f--col-12">
                    <!-- flags -->
                    <div class="b--motion-b" v-lazy:background-image="require(`@/assets/test_sprites/flags_left.png`)"></div>
              </div>
               <div class="f--col-12">
                    <!-- flags -->
                    <div class="b--motion-c" v-lazy:background-image="require(`@/assets/test_sprites/flags_right.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- blink -->
                    <div class="b--motion-d" v-lazy:background-image="require(`@/assets/test_sprites/blink_1a.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- plant wind 1 -->
                    <div class="b--motion-e" v-lazy:background-image="require(`@/assets/test_sprites/plant_wind_1.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- fisherman -->
                    <div class="b--motion-f" v-lazy:background-image="require(`@/assets/test_sprites/fisherman.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- plant wind 2 -->
                    <div class="b--motion-g" v-lazy:background-image="require(`@/assets/test_sprites/plant_wind_2.png`)"></div>
              </div>

                <div class="f--col-12">
                    <!-- blink 2a -->
                    <div class="b--motion-h" v-lazy:background-image="require(`@/assets/test_sprites/blink_2a.png`)"></div>
                </div>

                <div class="f--col-12">
                    <!-- plant wind 3 -->
                    <div class="b--motion-i" v-lazy:background-image="require(`@/assets/test_sprites/plant_wind_3.png`)"></div>
              </div>

              <div class="f--col-12">
                    <!-- bear -->
                    <div class="b--motion-j" v-lazy:background-image="require(`@/assets/test_sprites/blink3.png`)"></div>
              </div>

              <div class="f--col-12">
                    <!-- lines, also b--motion-l -->
                    <div class="b--motion-k" v-lazy:background-image="require(`@/assets/test_sprites/lines.png`)"></div>
              </div>
              
              <div class="f--col-12">
                    <!-- plant water 1 -->
                    <div class="b--motion-m" v-lazy:background-image="require(`@/assets/test_sprites/plant_water_1.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- plant water 2 -->
                    <div class="b--motion-n" v-lazy:background-image="require(`@/assets/test_sprites/plant_water_2.png`)"></div>
              </div>

               <div class="f--col-12">
                    <!-- arrow -->
                    <div class="b--motion-o" v-lazy:background-image="require(`@/assets/test_sprites/arrow.png`)"></div>
              </div>

              <div class="f--col-12">
                    <!-- blink 1b -->
                    <div class="b--motion-p" v-lazy:background-image="require(`@/assets/test_sprites/blink_1b.png`)"></div>
              </div>

              <div class="f--col-12">
                    <!-- blink 2b -->
                    <div class="b--motion-q" v-lazy:background-image="require(`@/assets/test_sprites/blink_2b.png`)"></div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '@/sass/index.scss';
    body{
        background-color: white!important;
    }

    .b--motion-a {
        position: relative;
        z-index: 3;
        width: 150px;
        height: 150px;
        animation-name: motionA;
        animation-duration: 3.13s;
        animation-timing-function: steps(193);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionA {
        from {
            background-position: 0px;
        }
        to {
            background-position: -28950px;
        }
    }

    .b--motion-b {
        position: relative;
        z-index: 3;
        width: 600px;
        height: 550px;
        animation-name: motionB;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionB {
        from {
            background-position: 0px;
        } 
        to {
            background-position: -57600px;
        }
    }

    .b--motion-c {
        position: relative;
        z-index: 3;
        width: 600px;
        height: 550px;
        animation-name: motionC;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionC {
        from {
            background-position: 0px;
        } 
        to {
            background-position: -57600px;
        }
    }

    .b--motion-d {
        position: relative;
        z-index: 3;
        width: 100px;
        height: 100px;
        animation-name: motionD;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionD {
        from {
            background-position: 0px;
        }
        to {
            background-position: -9600px;
        }
    }

    .b--motion-e {
        position: relative;
        z-index: 3;
        width: 513px;
        height: 758px;
        animation-name: motionE;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionE {
        from {
            background-position: 0px;
        }
        to {
            background-position: -49248px;
        }
    }

    .b--motion-f {
        position: relative;
        z-index: 3;
        width: 600px;
        height: 700px;
        animation-name: motionF;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionF {
        from {
            background-position: 0px;
        }
        to {
            background-position: -57600px;
        }
    }

    .b--motion-g {
        position: relative;
        z-index: 3;
        width: 387px;
        height: 742px;
        animation-name: motionG;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionG {
        from {
            background-position: 0px;
        }
        to {
            background-position: -37152px;
        }
    }

     .b--motion-h {
        position: relative;
        z-index: 3;
        width: 100px;
        height: 100px;
        animation-name: motionH;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionH {
        from {
            background-position: 0px;
        }
        to {
            background-position: -9600px;
        }
    }

    .b--motion-i {
        position: relative;
        z-index: 3;
        width: 296px;
        height: 353px;
        animation-name: motionI;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionI {
        from {
            background-position: 0px;
        }
        to {
            background-position: -28416px;
        }
    }

    .b--motion-j {
        position: relative;
        z-index: 3;
        width: 529px;
        height: 299px;
        animation-name: motionJ;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionJ {
        from {
            background-position: 0px;
        }
        to {
            background-position: -50784px;
        }
    }

    .b--motion-k {
        position: relative;
        z-index: 3;
        width: 60px;
        height: 155px;
        animation-name: motionK;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionK {
        from {
            background-position: 0px;
        }
        to {
            background-position: -5760px;
        }
    }

    .b--motion-m {
        position: relative;
        z-index: 3;
        width: 180px;
        height: 224px;
        animation-name: motionM;
        animation-duration: 1.32s;
        animation-timing-function: steps(80);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionM {
        from {
            background-position: 0px;
        }
        to {
            background-position: -14400px;
        }
    }

    .b--motion-n {
        position: relative;
        z-index: 3;
        width: 200px;
        height: 227px;
        animation-name: motionN;
        animation-duration: 1.32s;
        animation-timing-function: steps(80);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionN {
        from {
            background-position: 0px;
        }
        to {
            background-position: -16000px;
        }
    }

    .b--motion-o {
        position: relative;
        z-index: 3;
        width: 500px;
        height: 350px;
        animation-name: motionO;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionO {
        from {
            background-position: 0px;
        }
        to {
            background-position: -48000px;
        }
    }

    .b--motion-p {
        position: relative;
        z-index: 3;
        width: 100px;
        height: 100px;
        animation-name: motionP;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionP {
        from {
            background-position: 0px;
        }
        to {
            background-position: -9600px;
        }
    }

     .b--motion-q {
        position: relative;
        z-index: 3;
        width: 100px;
        height: 100px;
        animation-name: motionQ;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
        @media all and ($viewport-type: $tabletl) {
            transform: translate(-25%, -25%) scale(0.5);
        }
    }
    @keyframes motionQ {
        from {
            background-position: 0px;
        }
        to {
            background-position: -9600px;
        }
    }
</style>