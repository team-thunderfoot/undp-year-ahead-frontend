<template>
    <div>
       
    </div>
</template>
<script>
export default {
    mounted(){
        if(process.client){
            $nuxt.$emit('navIsLoaded');
        }
    }
}
</script>