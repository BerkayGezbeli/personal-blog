import Vue from "vue"; 
import Vuex from "vuex"; // import işlemleri yapılır 

Vue.use(Vuex);  // Vue içerisinde bu kütüphaneyi kullanacaz 

export const store = new Vuex.Store({ 

    state: { 

        counter: 0 //örnek 

    } 

}); 