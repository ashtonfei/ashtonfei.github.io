// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "Automate the Boring",
          icon: "mdi-home",
        },
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/forms",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "request/:id",
        name: "Status",
        meta: {
          title: "Request Status",
          icon: "mdi-script",
        },
        component: () => import("@/views/forms/Status.vue"),
      },
      {
        path: "request",
        name: "SupportRequest",
        meta: {
          title: "Support Request",
          icon: "mdi-script",
        },
        component: () => import("@/views/forms/Request.vue"),
      },
    ],
  },
  {
    path: "/chalkline",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "chalkline",
        meta: {
          title: "Chalkline",
          icon: "mdi-puzzle",
        },
        component: () => import("@/views/chalkline/Home.vue"),
      },
      {
        path: "privacy-policy",
        name: "chalklinePrivacyPolicy",
        meta: {
          title: "Privacy Policy | Chalkline",
          icon: "mdi-account-multiple",
        },
        component: () => import("@/views/chalkline/PrivacyPolicy.vue"),
      },
      {
        path: "terms-of-service",
        name: "chalklineTermsOfService",
        meta: {
          title: "Terms of Service | Chalkline",
          icon: "mdi-file-document",
        },
        component: () => import("@/views/chalkline/TermsOfService.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
