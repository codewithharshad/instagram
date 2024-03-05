import { createI18n } from "vue-i18n";
import en_US from "./en_US";
import ru_RU from "./ru_RU";

export const locales = {
  en_US,
  ru_RU,
};
const i18n: any = createI18n({
  globalInjection: true,
  allowComposition: true,
  locale: localStorage.getItem("lang") || "en_US",
  messages: locales,
  legacy: false,

});
export default i18n;