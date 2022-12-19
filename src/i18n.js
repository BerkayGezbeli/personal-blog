import Vue from 'vue'; 
import VueI18n from 'vue-i18n'; 
import en from '@/locales/en.json';
import tr from '@/locales/tr.json'; 

Vue.use(VueI18n) 

const localeJsonFiles = { 
  en: en, 
  tr: tr, 
}

export default new VueI18n({ 
  locale: 'tr',     //locale ‘tr’ yapılırsa dil türkçe olur 
  fallbackLocale: 'en', 
  messages: localeJsonFiles, 
}) 