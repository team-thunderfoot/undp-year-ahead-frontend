<template>
    <section class="b--page-a__item" :ref="refName" :id="refName">
        <div class="b--ss-a"> 
            <div class="b--ss-a__ft-items">
                <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="" v-if="refName == 'Scene1'"> 
                <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt="" v-if="refName == 'Scene2'"> 
                <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-1.png" alt="" v-if="refName == 'Scene3'"> 
                <img class="b--ss-a__ft-items__artwork" src="@/assets/img/ft-chapter-2.png" alt="" v-if="refName == 'Scene4'"> 
            </div>
            <div class="b--ss-a__bg-items">
                <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="" v-if="refName == 'Scene1'">    
                <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="" v-if="refName == 'Scene2'">    
                <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-1.png" alt="" v-if="refName == 'Scene3'">    
                <img class="b--ss-a__bg-items__artwork" src="@/assets/img/bg-chapter-2.png" alt="" v-if="refName == 'Scene4'">    
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: [
        'refName',
        'images'
    ],
    data:()=>{
		return{
			currentItem : 0,
		}
	},
}
</script>