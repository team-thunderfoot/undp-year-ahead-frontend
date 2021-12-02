<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <section class="b--page-a__item" id="SectionA">
            <div class="b--ss-a" id="Scene1"> 
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
        </section>

        <section class="b--page-a__item" id="SectionB">
            <div id="Scene2">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
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
                        trigger: '.b--page-a',
                        pin: true,
                        start: 0,
                        end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
                        scrub: true,
                        markers: "true",
                    }
                });

            });    
        }
    }
}
</script>

<style lang="scss" scoped>
:root {
	font-family: Helvetica;
}

::-webkit-scrollbar {
	display: none;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: white;
	font-weight: 400;
	font-size: 5vw;
	text-align: center;
	color: #000000;
}

body {
	background: greenyellow;
}

.b--page-a {
	width: 100%;
	height: 100vh;
	display: flex;
  overflow: hidden;
}

section {
	position: relative;
	height: 100vh;
	overflow: hidden;
	flex-shrink: 0;
	display: flex;
	color: magenta;
	border-right: 5px solid blue;
}

.b--page-a #SectionA {
	justify-content: center;
	align-items: center;
	width: 100%;
}

.b--page-a #Scene1{
    width: 100%;
    height: 100%;
}

.b--page-a #Scene1 img{
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
}

.b--page-a #SectionA h1 {
	position: absolute;
}

.b--page-a #SectionA img {
	position: absolute;
	width: 100%;
}

.b--page-a #SectionB {
	justify-content: flex-start;
	width: 150vw;
}

.b--page-a #SectionB #SectionBLeftBox {
	display: flex;
	position: absolute;
	z-index: 1;
	justify-content: center;
	align-items: center;
	background: #f8efe6;
	height: 100vh;
	width: 70vw;
}

.b--page-a #SectionB img {
	position: absolute;
	right: 0;
	height: 100vh;
}

.b--header-a{
    position: fixed;
    background:white;
    padding:$measure *2;
    left:$measure*3; top:$measure*3;
    right:$measure*3;
    z-index: 50;
}
.b--noise-a{
    position: fixed;
    left:0;
    top:0;
    height: 100vh;
    width:100%;
    z-index: 50;
    background-image: url('@/assets/img/noise.png');
    background-position: 0 0;
    pointer-events: none;
    // opacity: .4;
    animation: scratchy .253s  linear forwards infinite ;

}


// single story
.b--ss-a{
    position:relative;
    &__bg-items{
        position: relative;
        top: 0;
        left: 0;
        z-index: 3;
        width: auto;
        height: 100%;
        &__artwork{ // needed to see it with amaia
            position: relative;
            z-index: -1;
            display: block;
            height: 100%;
        }
        &__flag{ // demo example
            position: absolute;
            top: 0;
            height: 100%;
            pointer-events: none;
            left: 14%;
        }
        & img{
            min-width: 500px;
            height: auto;
        }
    }  
    &__content{
        // here goes hole content
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: auto;
        height: 100%; 
    } 
    &__ft-items{
        position: absolute;
        left: 0;
        z-index: 5;
        height: 100%;
        &__artwork{ // needed to see it with amaia
            position: relative;
            z-index: -1;
            display: block;
            height: 100%;
        }
    }
    &--second{
        justify-content: center;
        align-items: center;
        width: 100%; 
    }
    &--third{
        background:rgba(222, 148, 148, 0.502)
    }
} 
@keyframes scratchy {
	0% {
		background-position: 0 0;
	}
	25% {
		background-position: 0 0;
	}
	26% {
		background-position: 20px -20px;
	}
	50% {
		background-position: 20px -20px;
	}
	51% {
		background-position: 40px -40px;
	}
	75% {
		background-position: 40px -40px;
	}
	76% {
		background-position: 60px -60px;
	}
	99% {
		background-position: 60px -60px;
	}
	100% {
		background-position: 0 0;
	}
}
</style>