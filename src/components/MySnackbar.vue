<template>
  <v-snackbar
    v-model="snackbar.show"
    :timeout="snackbar.timeout"
    :color="snackbar.color"
    variant="flat"
  >
    {{ snackbar.content }}
    <template v-slot:actions v-if="snackbar.timeout > 0">
      <v-btn
        variant="text"
        icon="mdi-close"
        size="x-small"
        @click="hideSnackbar"
        color="white"
      >
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/app.js";
const appStore = useAppStore();
export default {
  computed: {
    ...mapState(useAppStore, ["snackbar"]),
  },
  methods: {
    ...mapActions(useAppStore, ["hideSnackbar"]),
  },
};
</script>
