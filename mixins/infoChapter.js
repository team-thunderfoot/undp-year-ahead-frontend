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
    }
}