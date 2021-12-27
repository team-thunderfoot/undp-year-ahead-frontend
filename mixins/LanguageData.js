import TranslateEN from './../content/lang-en.json';
import TranslateFR from  './../content/lang-fr.json';
import TranslateES from  './../content/lang-es.json';
export default {
    methods:{
        getLanguageData({
            lang
        }){
            switch (lang) {
                case 'en':
                 return TranslateEN;
                case 'fr':
                  return TranslateFR;
                case 'es':
                  return TranslateES;
                default:
                  break;
            }
        },
       
    },
}