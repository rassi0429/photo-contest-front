<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>フォトコン 最終更新 {{lastUpdate}}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      lastUpdate: ""
    }
  },
  methods:{
      async getLastUpdate() {
        const data = await fetch("https://photo-contest-api.kokoa.dev/time")
        this.lastUpdate = (await data.text()).replace(".json","")
      }
  },
  created() {
    this.getLastUpdate()
  }
}
</script>
