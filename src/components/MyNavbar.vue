<template>
  <v-app-bar color="primary" density="prominent" flat app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>
    <template v-slot:append>
      <v-btn
        icon
        :color="item.color"
        v-for="(item, i) in socialLinks"
        :key="i"
        :href="item.url"
        target="_blank"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :to="item.to"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MyNavbar",
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", value: "Home", to: "/", icon: "mdi-home" },
      {
        title: "Support Request",
        value: "Support",
        to: "/support",
        icon: "mdi-code-tags",
      },
      {
        title: "Challenge Request",
        value: "Challenge",
        to: "/challenge",
        icon: "mdi-image-filter-hdr",
      },
    ],
    socialLinks: [
      {
        url: "https://twitter.com/ashton_fei",
        icon: "mdi-twitter",
        color: "white",
      },
      {
        url: "https://www.youtube.com/ashtonfei",
        icon: "mdi-youtube",
        color: "white",
      },
      {
        url: "https://www.instagram.com/ashton.fei",
        icon: "mdi-instagram",
        color: "white",
      },
    ],
  }),
};
</script>
