import TranslateEN from './../content/lang-en.json';
import TranslateFR from  './../content/lang-fr.json';
import TranslateES from  './../content/lang-es.json';

import SettingsEN from './../content/settings-en.json';
import SettingsFR from  './../content/settings-fr.json';
import SettingsES from  './../content/settings-es.json';

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
        getLanguageSettings({
            lang
        }){
          switch (lang) {
              case 'en':
              return SettingsEN;
              case 'fr':
                return SettingsFR;
              case 'es':
                return SettingsES;
              default:
                break;
          }
        },
    },
}