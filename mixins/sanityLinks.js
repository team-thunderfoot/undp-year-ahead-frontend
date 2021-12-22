import Links from '~/components/sanity/Links.vue';
const serializers = {
    types: {},
    marks : {
        link : Links
    }
};
export default {
    methods:{
        getSerialize(){
            return  serializers
        }
    }
}