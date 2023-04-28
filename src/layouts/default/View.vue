<template>
  <v-layout>
    <my-appbar></my-appbar>
    <v-main>
      <router-view />
    </v-main>
    <my-footer></my-footer>
    <my-snackbar></my-snackbar>
  </v-layout>
</template>

<script setup>
import MyAppbar from "@/components/MyAppbar";
import MyFooter from "@/components/MyFooter";
import MySnackbar from "@/components/MySnackbar";
</script>
