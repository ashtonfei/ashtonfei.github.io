<template>
  <v-footer app class="pa-0">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="bg-primary text-center"
    >
      <v-card-text class="text-white py-1">
        <small>Automate the Boring</small>
      </v-card-text>
      <v-card-text class="text-white py-1">
        {{ new Date().getFullYear() }} &copy; <strong>Ashton Fei</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",
  data: () => ({}),
};
</script>
