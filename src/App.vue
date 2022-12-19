<template>
  <v-app> 

    <v-app-bar
      color="#EEEEEE"
      dense
      app
      height="75"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Berkay Gezbeli</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(language, index) in languages"
            :key="index"
            @click="changeLanguage(language.code)"
          >
            <v-list-item-title>{{ language.lang }}</v-list-item-title>
            <v-icon
              v-if="selectedLanguage === language.code"
              class="ml-3"
              color="secondary"
              dense
              >mdi-checkbox-marked</v-icon
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer"
      color="grey lighten-4"
      app
      >
      <v-list>
        <v-list-item
          v-for="item in navbarItems"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
    
    
    </v-navigation-drawer> 

    <v-main>
        <router-view></router-view>
    </v-main> 

    <v-footer
    dark
    padless
    height="60"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey lighten-2">
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in footerIcons"
          :key="item"
          class="mx-4"
          icon
          :href="item.link" 
          target="_blank"
        >
          <v-icon color="black" size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>

  </v-app>  
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      drawer: false,
      selectedLanguage: this.$root.$i18n.locale,
      footerIcons: [
      { icon: 'mdi-facebook', link: 'https://www.facebook.com/berkay.gezbeli' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/BerkayGezbeli' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/berkay-gezbeli-675a7b202/' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/berkaygezbeli/' },
      { icon: 'mdi-circle-multiple', link: 'https://medium.com/@berkay.gezbeli' },
      ],
      languages: [
        { lang: "Türkçe", code: "tr"},
        { lang: "English", code: "en"}
      ],
    }
  },

  computed:{
    navbarItems() {
      return [
        { title: this.$t('common.drawer.home'), icon: 'mdi-view-dashboard', to: '/' },
        { title: this.$t('common.drawer.about'), icon: 'mdi-comment-multiple', to: '/aboutPage' },
        { title: this.$t('common.drawer.web_site'), icon: 'mdi-web', to: '/websitePage' },
      ]
    }
  },
  
  methods: {
    changeLanguage(lang){
      this.selectedLanguage = lang
      this.$root.$i18n.locale = lang
    }
  }
};
</script>
