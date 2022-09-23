// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const light = {
	dark: false,
	colors: {
		background: "#FEFEFE",
		surface: "#FAFAFA",
		primary: "#2685FD",
		secondary: "#03DAC6",
		error: "#EA4235",
		info: "#2196F3",
		success: "#00AC48",
		warning: "#FFB900",
	}
}

const dark = {
	dark: true,
	colors: {
		...light.colors,
		background: "#323232",
		surface: "#181818",
		primary: "#3266CB",
	}
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
