<template>
    <div class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <div class="b--page-a__wrapper">
            <div class="b--page-a__wrapper__item b--ss-a">
                <div class="b--ss-a__ft-items">
                    <div class="b--bird-a">
                        <img src="@/assets/img/bird.png" alt="">
                    </div>
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt=""> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Towards living in harmony with nature
                            </h3> 
                        </div>
                
                    </div>
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="">    
                </div>
            </div>
            <div class="b--page-a__wrapper__item b--page-a__wrapper__item--second">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <!-- <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <h3 class="b--card-a__title">Lorem</h3>
                    </div>
                </div> -->
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        getTotalWidth(){
        let width = 0;
        let Sections = document.querySelectorAll(".b--page-a__wrapper__item");
        Sections.forEach(el => width += el.offsetWidth);
        return width;
        }
    },
    created(){
        if(process.client){
        this.$nextTick(() => {

        this.$gsap.to(document.querySelectorAll(".b--page-a__wrapper"), { 
            x: () => -this.getTotalWidth() + window.innerWidth, 
            ease: "none", 
            scrollTrigger: {
                  trigger: ".b--page-a",
                  pin: true,
                  start: 0,
                  end: () => "+=" + (document.querySelector('.b--page-a__wrapper').scrollWidth - window.innerWidth),
                  invalidateOnRefresh: true,
                  scrub: true,
                  markers: "true",
              }
          });



        });
      }
    }
}
</script>

<style lang="scss">
  @import '@/sass/indexandres.scss';
  ::-webkit-scrollbar {
    display: none;
  }

</style>