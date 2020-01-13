import i18n from "i18next";

import en from "./en.json";
import kh from "./kh.json";

i18n.init({
	debug: false,
	lng: "en",
	fallbackLng: "kh",
	ns: ["common"],
	defaultNS: "common",
	resources: { en, kh },
	interpolation: { escapeValue: false }, // not needed for react
	react: { wait: true }
});

export default i18n;
