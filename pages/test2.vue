<template>
    <div id="HorizontalWrapper" class="b--wrapper-a">
        <div class="b--noise-a"></div>
        <!-- <div class="b--header-a">
            Sticky!
        </div> -->
        <section class="b--wrapper-a" id="SectionA">
            <div id="ImageWrap"><img src="@/assets/img/ft-chapter-1.png" alt=""></div>
        </section>

        <section id="SectionB">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa eius vel ducimus illum nam repellat quidem, sequi, ullam ipsam vero deserunt labore culpa cupiditate itaque repellendus deleniti. Non, iste?</h2>
        </section>

        <section id="SectionC">
            <div id="ImageWrap"><img src="https://source.unsplash.com/uEFombN3J5U/1600x900" alt=""></div>
            <h1>SectionC<br>width: 210vw;</h1>
        </section>

        <section id="SectionD">
            <div id="SectionWrap">
            <div id="ImageWrap"><img src="https://source.unsplash.com/BjJP2TN8WoI/900x1600" alt=""></div>
            <div id="TextWrap">
                <h1>SectionD<br>width: 200vw;</h1>
            </div>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    methods:{
        getTotalWidth(){
        let width = 0;
        let Sections = document.querySelectorAll("section");
        Sections.forEach(el => width += el.offsetWidth);
        return width;
        }
    },
    created(){
        if(process.client){
            this.$nextTick(() => {

                this.$gsap.to(document.querySelectorAll("section"), { 
                x: () => -this.getTotalWidth() + window.innerWidth, 
                ease: "none", 
                scrollTrigger: {
                        trigger: "#HorizontalWrapper",
                        pin: true,
                        start: 0,
                        end: () => "+=" + (document.querySelector('#HorizontalWrapper').scrollWidth - window.innerWidth),
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
  @import '@/sass/test2.scss';
</style>