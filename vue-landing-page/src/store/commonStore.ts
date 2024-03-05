import { defineStore } from "pinia";

const useCommonStore = defineStore("commonStore", {
  state: () => ({
    lang: "en_US",
    userCountry: "",
  }),

  actions: {
    setLanguage(language: string) {
      this.lang = language;
      localStorage.setItem("lang", language);
    },
    getLanguage() {
      var lang = localStorage.getItem("lang");
      return lang;
    },
  },
});

export default useCommonStore;
