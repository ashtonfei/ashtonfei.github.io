<template>
  <v-app>
    <MyNavbar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script setup>
  import MyNavbar from "./components/MyNavbar.vue"
  import MyFooter from "./components/MyFooter.vue"
</script>
