import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
    preLoad: 1.3,
    // observer: true,
    // lazyComponent: true,
    // observerOptions: {
    //     rootMargin: '-300px',
    //     threshold: 0.1
    // }
    // attempt: 1,
    // loading: '/img/placeholder.svg'
});