<template>
    <div id="HorizontalWrapper" class="b--page-a">
        <v-chapter-1 :scrollTween="scrollTween"  />
        <v-chapter-2 :scrollTween="scrollTween" />
        <v-chapter-3 :scrollTween="scrollTween" />
        <v-chapter-4  :scrollTween="scrollTween"/>
        <v-chapter-5 :scrollTween="scrollTween"  />
        <v-chapter-6  :scrollTween="scrollTween"/>
        <v-chapter-7  :scrollTween="scrollTween"/>
        <v-chapter-8 :scrollTween="scrollTween" />
        <v-chapter-9  :scrollTween="scrollTween"/>
        <v-chapter-10 :scrollTween="scrollTween"/>
        <v-chapter-11 :scrollTween="scrollTween" />
        <v-chapter-12 :scrollTween="scrollTween" />
        <v-chapter-13  :scrollTween="scrollTween"/>
        <v-chapter-14  :scrollTween="scrollTween"/>
        <v-progress :urlWithParams="urlWithParams" :sceneNumber="sceneNumber" v-if="statusChapter == totalChapters" :currentItem="currentItem" ref="progress" />
    </div>
</template>

<script>
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';
import Chapter4 from '~/components/Chapter4.vue';
import Chapter5 from '~/components/Chapter5.vue';
import Chapter6 from '~/components/Chapter6.vue';
import Chapter7 from '~/components/Chapter7.vue';
import Chapter8 from '~/components/Chapter8.vue';
import Chapter9 from '~/components/Chapter9.vue';
import Chapter10 from '~/components/Chapter10.vue';
import Chapter11 from '~/components/Chapter11.vue';
import Chapter12 from '~/components/Chapter12.vue';
import Chapter13 from '~/components/Chapter13.vue';
import Chapter14 from '~/components/Chapter14.vue';

import Progress from '~/components/NavControls.vue';

export default {
    data:()=>{
		return{
            totalChapters: 14,
			statusChapter : 0,
            urlWithParams :false,
            sceneNumber : false,
            currentItem : 1,
            loadedNew : false,
            navLoaded : false,
            allisLoaded : false,
            scrollTween: null,
            timeOutFunctionId: null
		}
	},
    props : [
        'isLoaded'
    ],
    components:{
        'v-chapter-1':Chapter1,
        'v-chapter-2':Chapter2,
        'v-chapter-3':Chapter3,
        'v-chapter-4':Chapter4,
        'v-chapter-5':Chapter5,
        'v-chapter-6':Chapter6,
        'v-chapter-7':Chapter7,
        'v-chapter-8':Chapter8,
        'v-chapter-9':Chapter9,
        'v-chapter-10':Chapter10,
        'v-chapter-11':Chapter11,
        'v-chapter-12':Chapter12,
        'v-chapter-13':Chapter13,
        'v-chapter-14':Chapter14,

        'v-progress' : Progress
    },
    watch: {
        statusChapter(newValue, oldValue) {
            if(newValue == this.totalChapters){
                this.allisLoaded = true;
            }
        },
        navLoaded(newValue, oldValue) {
            if(newValue){
                this.allisLoaded = 1;
            }
        },
        allisLoaded(newValue, oldValue) {
            if(this.statusChapter == this.totalChapters && this.navLoaded){
               this.asambleStory()
            }
        },
    },
    methods:{
        workAfterResizeIsDone(){
            this.scrollTween.kill();
            window.location  =  this.$route.path;
        },
        getTotalWidth(){
            let width = 0;
            let Sections = document.querySelectorAll("section");
            Sections.forEach(el => width += el.offsetWidth);
            return width;
        },
        asambleStory(){
           	this.$nextTick(() => {
                this.scrollTween = this.$gsap.to(document.querySelectorAll("section"), { 
                    id:'sectionTrigger',
                    x: () => -this.getTotalWidth() + window.innerWidth, 
                    ease: "none", 
                    scrollTrigger: {
                        trigger: '.b--page-a',
                        pin: true,
                        start: 0,
                        end: () => "+=" + (document.querySelector('.b--page-a').scrollWidth - window.innerWidth),
                        scrub: true,
                        // markers: "false",
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            // Emits on Update Progress in Nav.vue 
                            var widthProgress = self.progress.toFixed(2) * 100;
                            $nuxt.$emit('updateProgressNav',{value:widthProgress})
                        }
                    }
                });

                // emits on in Index.vue
                setTimeout(() => {
                    $nuxt.$emit('siteLoaded');
                    this.loadedNew = true;
                }, 5000);
            })
        },
    
        checkURL(){
            if(process.client){
                var currentURL = window.location.href;
                var pathname = currentURL.split('/');	// split url in array
                
                if(pathname[pathname.length-1].includes("?scene")){ // check if url contains Scene string
                    this.urlWithParams = true; // Url with param inside
                    var sceneNo = pathname[pathname.length-1].split('?scene=');
                    this.sceneNumber = sceneNo[1];
                } 
            }
		},
        isMobile() {
            var check = false;
            ((a) => {if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
    },
    mounted(){
        if(process.client){
            this.checkURL();
            // event in Index.vue
            this.$nuxt.$on('assetLoaded', () => {
                this.statusChapter++;
            });
            // event in NavControl.vue
            this.$nuxt.$on('navIsLoaded', () => {
                this.navLoaded = true;
            });

            // event in ChapterX.vue
            this.$nuxt.$on('changeCurrent', (payload) => {
                if(this.loadedNew){
                    // SET NEW Item
                    if(this.currentItem == 3 && payload.item == 1){ // if we are entering Scene 2 from Scene 3
                        this.currentItem = 2;
                    }else{
                        if(payload.item == 2 && this.currentItem == 2){ // if we are entering Scene 1 from Scene 2
                            this.currentItem = 1;
                        }else{
                            this.currentItem = payload.item;
                        }
                    }
                    // Change URL
                    this.$router.push({path: this.$route.path, query: { scene:  payload.item }})
                }
            });
            
            window.onresize = (e)=> {  
                if(window.innerWidth > 1201){
                    clearTimeout(this.timeOutFunctionId);
                    this.timeOutFunctionId = setTimeout(this.workAfterResizeIsDone(), 500);
                }
            }
            if(this.isMobile()){
                window.addEventListener('orientationchange', this.workAfterResizeIsDone);
            }
        }
    },
    
}
</script>
