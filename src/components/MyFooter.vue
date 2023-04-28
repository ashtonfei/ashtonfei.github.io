<template>
  <v-footer app color="grey-lighten-5 text-caption">
    <v-row>
      <v-col cols="12"> All rights reserved. Ashton Fei {{ year }} </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",
  data: () => ({}),
  computed: {
    year: function () {
      return new Date().getFullYear();
    },
  },
};
</script>
