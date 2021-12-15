
<template>
    <div class="b--nav-a">
        <div class="b--nav-a__ft-items">
            <div class="b--nav-a__ft-items__hd">
                <img src="@/assets/img/en/undp_en.svg" alt="">
            </div>
            <div class="b--nav-a__ft-items__bd">
                <p>2022: The Year Ahead</p>
            </div>
            <div class="b--nav-a__ft-items__ft">
                <a class="b--nav-a__ft-items__ft__link" href="#">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/facebook.svg">
                </a>
                <a class="b--nav-a__ft-items__ft__link" href="#">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/twitter.svg">
                </a>
                <a class="b--nav-a__ft-items__ft__link" href="#">
                    <img class="b--nav-a__ft-items__ft__media" src="@/assets/img/linkedin.svg">
                </a>
            </div>
            <div class="b--nav-a__ft-items__artwork">
                <div class="b--nav-a__ft-items__artwork__item" :style="{ height: this.progressValue+'%' }" ></div>
            </div>
        </div>
        <div class="b--nav-a__bg-items"></div>
    </div>
</template>

<script>
export default {
    data:()=>{
		return{
            progressValue:0,
		}
	},
    created(){
        if(process.client){
            // emits on Story.vue
            this.$nuxt.$on('updateProgressNav', (payload) => {
                this.progressValue = payload.value;
            })
        }
    }
}
</script>