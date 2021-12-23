<template>
    <div class="parent">
        I'm the div parent
        <div class="children">
            I'm the div children
            <div class="test">
                I'm a test
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .parent{
        width:800px;
        height:400px;
        background:red;
        position:relative;
    }
    .children{
        width:300px;
        height:300px;
        background:magenta;
        position:absolute;
        left:0;
        top:0;
    }
    .test{
        position:absolute;
        right:0;
        top:0;
        background:blue;
        width:50px;
        height: 50px;;
    }
</style>