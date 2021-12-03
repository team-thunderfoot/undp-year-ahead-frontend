<template>
    <div id="HorizontalWrapper" class="b--wrapper-a">
        <div class="b--noise-a"></div>
        <div class="b--header-a">
            Sticky!
        </div>
        <section class="" id="SectionA"><img class="SectionAImag" src="https://source.unsplash.com/Pd8tLVGx2O4/1600x900" alt="">
            <h1>SectionA<br>width: 120vw;</h1>
        </section>

        <section id="SectionB">
            <div id="SectionBLeftBox">
            <h1>SectionB<br>width: 150vw;</h1>
            </div><img class="SectionBImag" src="https://source.unsplash.com/CudNrzbsyZw/1600x900" alt="">
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

#HorizontalWrapper {
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
	color: var(--ColorWhiteA);
	border-right: 5px solid blue;
}

#HorizontalWrapper #SectionA {
	justify-content: center;
	align-items: center;
	width: 120vw;
}

#HorizontalWrapper #SectionA h1 {
	position: absolute;
}

#HorizontalWrapper #SectionA img {
	position: absolute;
	width: 100%;
}

#HorizontalWrapper #SectionB {
	justify-content: flex-start;
	width: 150vw;
}

#HorizontalWrapper #SectionB #SectionBLeftBox {
	display: flex;
	position: absolute;
	z-index: 1;
	justify-content: center;
	align-items: center;
	background: #f8efe6;
	height: 100vh;
	width: 70vw;
}

#HorizontalWrapper #SectionB img {
	position: absolute;
	right: 0;
	height: 100vh;
}

#HorizontalWrapper #SectionC {
	justify-content: center;
	align-items: center;
	background: #f8efe6;
	width: 210vw;
}

#HorizontalWrapper #SectionC h1 {
	position: absolute;
}

#HorizontalWrapper #SectionC #ImageWrap {
	position: absolute;
	overflow: hidden;
	width: 60vw;
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

#HorizontalWrapper #SectionC #ImageWrap img {
	height: 100%;
}

#HorizontalWrapper #SectionD {
	justify-content: center;
	align-items: center;
	background: #f00000;
	width: 200vw;
}

#HorizontalWrapper #SectionD #SectionWrap {
	position: relative;
	width: calc(100vw - 10vw);
	height: calc(100vh - 10vw);
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
}

#HorizontalWrapper #SectionD #SectionWrap #ImageWrap {
	position: absolute;
	left: 0;
	overflow: hidden;
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#HorizontalWrapper #SectionD #SectionWrap #ImageWrap img {
	width: 100%;
}

#HorizontalWrapper #SectionD #SectionWrap #TextWrap {
	position: absolute;
	right: 0;
	width: 60%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f8efe6;
}

#HorizontalWrapper #SectionD #SectionWrap #TextWrap h1 {
	font-size: 5vw;
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