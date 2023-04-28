<template>
  <v-app-bar
    class="fixed text-theme-black"
    app
    flat
    :title="route.title"
    color="grey-lighten-3"
  >
    <v-progress-linear
      :active="loading"
      indeterminate
      absolute
      top
      color="primary"
    ></v-progress-linear>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click.stop="app.drawer = !app.drawer"
        color="theme-black"
      ></v-app-bar-nav-icon>
    </template>
    <template v-slot:append>
      <v-btn
        v-for="{ title, icon, url } in links"
        :icon="icon"
        :key="title"
        :href="url"
        target="_blank"
        color="theme-black"
      >
        <template v-slot:default>
          <v-icon></v-icon>
          <v-tooltip
            activator="parent"
            location="bottom"
            :open-delay="400"
            open-on-hover
          >
            {{ title }}
          </v-tooltip>
        </template>
      </v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer color="grey-lighten-4" order="1" v-model="app.drawer">
    <v-list nav>
      <v-list-item
        active-color="primary"
        v-for="{ path, title, icon } in navItems"
        :key="path"
        :title="title"
        :prepend-icon="icon"
        :to="path"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/app.js";
export default {
  data() {
    return {
      app: {
        title: "Automate the Boring",
        icon: "mdi-console",
        drawer: null,
      },
      navItems: [
        { path: "/", title: "Home", icon: "mdi-home" },
        { path: "/chalkline", title: "Chalkline", icon: "mdi-puzzle" },
        { path: "/forms/request", title: "Request", icon: "mdi-script" },
      ],
      links: [
        {
          title: "YouTube",
          icon: "mdi-youtube",
          url: "https://www.youtube.com/@ashtonfei",
        },
        {
          title: "Github",
          icon: "mdi-github",
          url: "https://www.github.com/ashtonfei",
        },
        {
          title: "Twitter",
          icon: "mdi-twitter",
          url: "https://www.github.com/ashton_fei",
        },
      ],
    };
  },
  computed: {
    ...mapState(useAppStore, ["loading"]),
    route: function () {
      console.log(this.$router);
      return {
        title: this.$route.meta.title,
        icon: this.$route.meta.icon,
      };
    },
  },
};
</script>

<style scoped>
.fixed {
  top: 0 !important;
  position: fixed !important;
}
</style>
