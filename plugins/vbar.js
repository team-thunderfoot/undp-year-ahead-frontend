import Vue from "vue";
import vuescroll from 'vuescroll';


Vue.use(vuescroll, {
    mode: 'native',
    sizeStrategy: 'percent',
    detectResize: true,
    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,
});

Vue.prototype.$vuescrollConfig = {
    bar: {
      background: '#000'
    }
  };