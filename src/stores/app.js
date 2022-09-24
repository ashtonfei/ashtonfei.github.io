import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
	const loading = ref(false);

	const dialog = reactive({
		value: false,
		title: "Dialog",
		content: "Content",
		yes: null,
		no: null,
		color: "primary",
	});

	const openDialog = (
		title,
		content,
		color = "primary",
		yes = null,
		no = null
	) => {
		loading.value = false;
		dialog.title = title;
		dialog.content = content;
		dialog.yes = yes;
		dialog.no = no;
		dialog.color = color;
		dialog.value = true;
	};

	const closeDialog = () => (dialog.value = false);

	const startLoading = () => (loading.value = true);
	const stopLoading = () => (loading.value = false);
	return {
		dialog,
		openDialog,
		closeDialog,
		loading,
		startLoading,
		stopLoading,
	};
});
