// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    loading: false,
    route: {
      path: "/",
      title: "Home",
    },
    refreshing: false,
    dialog: {
      show: false,
      title: "",
      content: "",
      color: "",
    },
    snackbar: {
      show: false,
      content: "This is a snackbar message",
      color: "primary",
      timeout: 5000,
    },
    statusbar: {
      show: false,
      title: "",
      content: "",
      color: "",
    },
    api: "https://script.google.com/macros/s/AKfycbyDIIyxQ88jNCp5lFs1c0Nzo7MnH_a9y1IWY38AH5DXtadM-t4NFCLu4J7lP7gRUcps3w/exec",
  }),
  actions: {
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    },
    showSnackbar(content, color = "error", timeout = 5000) {
      this.snackbar = {
        show: true,
        content,
        color,
        timeout,
      };
      this.stopLoading();
    },
    hideSnackbar() {
      this.snackbar = {
        show: false,
      };
    },
    async apiCall(payload) {
      const data = await fetch(this.api, {
        method: "post",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return await data.json();
    },
    async getCodeRequestById(id) {
      const url =
        "https://docs.google.com/spreadsheets/d/1YTFBD_EoOtPsh6QhHPU6SQyaNkEW8LP874iuvInsl6w/export?format=tsv&gid=0";
      const data = await fetch(url);
      const text = await data.text();
      const [keys, ...values] = text
        .split(/\r*\n/)
        .map((line) => line.split("\t"));
      let item = null;
      for (let i = 0; i < values.length; i++) {
        const currentItem = {};
        keys.forEach((k, j) => (currentItem[k] = values[i][j]));
        if (currentItem.id == id) {
          item = currentItem;
          break;
        }
      }
      return item;
    },
  },
});
