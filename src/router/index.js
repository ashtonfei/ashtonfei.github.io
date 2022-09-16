import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CodeSupportRequestView from "../views/CodeSupportRequestView.vue";
import CodeChallengeRequestView from "../views/CodeChallengeRequestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "💮 Automate the Boring",
        icon: "mdi-home",
      },
    },
    {
      path: "/support",
      name: "support",
      component: CodeSupportRequestView,
      meta: {
        title: "Code Support Request",
        icon: "mdi-code-tags",
      },
    },
    {
      path: "/challenge",
      name: "challenge",
      component: CodeChallengeRequestView,
      meta: {
        title: "Code Challenge Request",
        icon: "mdi-info",
      },
    },
  ],
});

export default router;
