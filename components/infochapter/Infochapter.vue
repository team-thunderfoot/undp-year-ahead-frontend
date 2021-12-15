<template>
    <div>
        <div class="b--info-chapter-a" @click.prevent="toggleInfoChapter()">
            <div class="b--info-chapter-a__icon">i</div>
        </div>
        
        <div
            class="b--info-window-a"
            :class="{ 'b--info-window-a--is-visible': this.infoWindowStatus }"
        >
            <div class="b--info-window-a__content">
                <p><a :href="info.tooltip_link" target="_blank">{{info.tooltip_label}}</a> {{info.tooltip_date}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
		return{
            infoWindowStatus:true
		}
	},
    methods:{
        toggleInfoChapter(){
            this.infoWindowStatus = ! this.infoWindowStatus;
        },
    },
    props : [
        'info'
    ]
}
</script>