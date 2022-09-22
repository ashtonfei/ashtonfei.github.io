// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const light = {
	dark: false,
	colors: {
		background: "#FEFEFE",
		surface: "#FEFEFE",
		primary: "#5384ED",
		secondary: "#03DAC6",
		error: "#D85040",
		info: "#2196F3",
		success: "#34A853",
		warning: "#F1BF42",
	}
}

const dark = {
	dark: true,
}

const options = {
	theme: {
		defaultTheme: "light",
		themes: {
			light,
			dark,
		}
	}
}

export default createVuetify(options);
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
