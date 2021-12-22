<template>
    <v-bar wrapper="wrapper"
        vBar=""
        vBarInternal=""
        hBar=""
        hBarInternal="">
        <!-- your content -->
    </v-bar>
</template>
<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
    components: {
        PerfectScrollbar
    }
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
/* example */
.ps {
  height: 400px;
}
</style>