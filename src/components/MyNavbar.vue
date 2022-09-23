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
	<template v-slot:append>
		<v-list density="compact" nav>
		  <v-list-item
			value="theme"
			color="primary"
			@click="toggleTheme"
		  ></v-list-item>
		  <v-list-item
		  >
				<v-btn 
					:prepend-icon="theme.global.current.value.dark ? 'mdi-brightness-6' : 'mdi-brightness-2'"
					block color="primary" @click="toggleTheme">
			{{ theme.global.current.value.dark ? 'Light' : 'Dark'}}
				</v-btn>
			</v-list-item>
		</v-list>
	</template>
  </v-navigation-drawer>
</template>

<script setup>

import { useTheme } from 'vuetify';
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';
const themeBot = ref(null);
const drawer = ref(false);
const items = ref([
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
    ]);

const socialLinks = ref([
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
]);

const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';

const updateThemeByCurrentTime = () => {
	const hours = new Date().getHours()
	theme.global.name.value = hours >= 18 ? 'dark' : 'light'
	console.log('theme checked')
}

onBeforeMount(() => updateThemeByCurrentTime());

onMounted(() => {
	themeBot.value = setInterval(() => updateThemeByCurrentTime, 1000 * 60);
})

onUnmounted(() => themeBot.value && clearInterval(themeBot.value));

</script>
