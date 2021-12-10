
<template>
    <div class="b--nav-a">
        <div class="b--nav-a__ft-items">
            <div class="b--nav-a__ft-items__hd">
                <img src="@/assets/img/en/undp_en.svg" alt="">
            </div>
            <div class="b--nav-a__ft-items__bd">
                <p>2022: A Year Ahead</p>
            </div>
            <div class="b--nav-a__ft-items__ft">
                Social
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