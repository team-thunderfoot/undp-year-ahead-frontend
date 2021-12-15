<template>
  <div>
      <div class="f--container">
          <div class="f--row">
              <div class="f--row-12">
                    <!-- bubble -->
                    <div class="b--motion-a" v-lazy:background-image="require(`@/assets/test_sprites/speech.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- flags -->
                    <div class="b--motion-c" v-lazy:background-image="require(`@/assets/test_sprites/flags.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- blink -->
                    <div class="b--motion-d" v-lazy:background-image="require(`@/assets/test_sprites/blink.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- plant wind 1 -->
                    <div class="b--motion-e" v-lazy:background-image="require(`@/assets/test_sprites/plant_wind_1.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- plant wind 2 -->
                    <div class="b--motion-g" v-lazy:background-image="require(`@/assets/test_sprites/plant_test.png`)"></div>
              </div>

                <div class="f--row-12">
                    <!-- blink 2 -->
                    <div class="b--motion-h" v-lazy:background-image="require(`@/assets/test_sprites/blink2.png`)"></div>
                </div>

                <div class="f--row-12">
                    <!-- plant wind 3 -->
                    <div class="b--motion-i" v-lazy:background-image="require(`@/assets/test_sprites/plant_wind_3.png`)"></div>
              </div>

              <div class="f--row-12">
                    <!-- bear -->
                    <div class="b--motion-j" v-lazy:background-image="require(`@/assets/test_sprites/blink3.png`)"></div>
              </div>

              <div class="f--row-12">
                    <!-- lines -->
                    <div class="b--motion-k" v-lazy:background-image="require(`@/assets/test_sprites/lines.png`)"></div>
              </div>
              
              <div class="f--row-12">
                    <!-- plant water 1 -->
                    <div class="b--motion-m" v-lazy:background-image="require(`@/assets/test_sprites/plant_water_1.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- plant water 2 -->
                    <div class="b--motion-n" v-lazy:background-image="require(`@/assets/test_sprites/plant_water_2.png`)"></div>
              </div>

               <div class="f--row-12">
                    <!-- flags -->
                    <div class="b--motion-o" v-lazy:background-image="require(`@/assets/test_sprites/test.png`)"></div>
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

    .b--motion-c {
        z-index: 3;
        width: 650px;
        height: 600px;
        animation-name: motionC;
        animation-duration: 1.45s;
        animation-timing-function: steps(93);
        animation-iteration-count: infinite;
    }
    @keyframes motionC {
        from {
            background-position: 0px;
        }
        to {
            background-position: -60450px;
        }
    }

    .b--motion-d {
        z-index: 3;
        width: 1163px;
        height: 768px;
        animation-name: motionD;
        animation-duration: 1.24s;
        animation-timing-function: steps(72);
        animation-iteration-count: infinite;
    }
    @keyframes motionD {
        from {
            background-position: 0px;
        }
        to {
            background-position: -83736px;
        }
    }

    .b--motion-e {
        z-index: 3;
        width: 513px;
        height: 758px;
        animation-name: motionE;
        animation-duration: 1.18s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
    }
    @keyframes motionE {
        from {
            background-position: 0px;
        }
        to {
            background-position: -49248px;
        }
    }

    .b--motion-g {
        z-index: 3;
        width: 387px;
        height: 742px;
        animation-name: motionG;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
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
        z-index: 3;
        width: 1284px;
        height: 720px;
        animation-name: motionH;
        animation-duration: 1.24s;
        animation-timing-function: steps(72);
        animation-iteration-count: infinite;
    }
    @keyframes motionH {
        from {
            background-position: 0px;
        }
        to {
            background-position: -92448px;
        }
    }

    .b--motion-i {
        z-index: 3;
        width: 296px;
        height: 353px;
        animation-name: motionI;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
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
        z-index: 3;
        width: 529px;
        height: 299px;
        animation-name: motionJ;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
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
        z-index: 3;
        width: 55px;
        height: 155px;
        animation-name: motionK;
        animation-duration: 2s;
        animation-timing-function: steps(96);
        animation-iteration-count: infinite;
    }
    @keyframes motionK {
        from {
            background-position: 0px;
        }
        to {
            background-position: -5280px;
        }
    }

    .b--motion-m {
        z-index: 3;
        width: 180px;
        height: 224px;
        animation-name: motionM;
        animation-duration: 1.32s;
        animation-timing-function: steps(80);
        animation-iteration-count: infinite;
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
        z-index: 3;
        width: 200px;
        height: 227px;
        animation-name: motionN;
        animation-duration: 1.32s;
        animation-timing-function: steps(80);
        animation-iteration-count: infinite;
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
        z-index: 3;
        width: 695px;
        height: 544px;
        animation-name: motionO;
        animation-duration: 1.24s;
        animation-timing-function: steps(72);
        animation-iteration-count: infinite;
    }
    @keyframes motionO {
        from {
            background-position: 0px;
        }
        to {
            background-position: -50040px;
        }
    }
</style>