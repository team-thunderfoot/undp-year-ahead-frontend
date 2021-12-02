<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <!-- <div class="b--noise-a"></div> -->
        <div class="b--header-a">
            Sticky!
        </div>
        <section class="b--page-a__item" id="Scene1">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
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

        <section class="b--page-a__item" id="Scene2">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Contenido del 2
                            </h3> 
                        </div>
                
                    </div>
                </div>
                <div class="b--ss-a__bg-items">
                    <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="">    
                </div>
            </div>
        </section>

         <section class="b--page-a__item" id="Scene3">
            <div class="b--ss-a"> 
                <div class="b--ss-a__ft-items">
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

        <section class="b--page-a__item" id="Scene4">
            <div class="b--ss-a">
                <div class="b--ss-a__ft-items">
                    <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt=""> 
                </div>
                <div class="b--ss-a__content">
                    <div class="b--card-a">
                        <div class="b--card-a__hd">
                            <h3 class="b--card-a__hd__title">
                                Contenido del 2
                            </h3> 
                        </div>
                
                    </div>
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
    width: fit-content;
    min-width: 100vw;
}

.b--page-a .b--page-a__item {
	justify-content: center;
    align-items: center;
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
    height: 100%;
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
            width: auto;
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
        width: 100%;
        top: 0;
        &__artwork{ // needed to see it with amaia
            position: relative;
            z-index: -1;
            display: block;
            height: 100%;
            width: 100%;
        }
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