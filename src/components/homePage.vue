<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img 
          src="@/assets/IMG_2603.jpg"
          class="rounded-circle"
          height="450"
          width="450"
        ></v-img>
      </v-col>
      <v-col>
        <span class="text-h2">{{$t('home.header')}}</span>
        <div>
          <p class="text-subtitle-2">{{ $t('home.content') }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return{
      
    }
  },

  computed: {},

  methods: {}

}
</script>

<style>

</style>