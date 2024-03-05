<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted, reactive, computed } from "vue";
import { useCommonStore } from "../../store";
import eventBus from "../../eventBus";

const { t: $t } = useI18n();
const isRussia = ref(false);
const commonStore = useCommonStore();

const localeList = reactive([
    {
        title: "English",
        lang: "en_US",
    },
    {
        title: "Russian",
        lang: "ru_RU",
    },
]);
const test = commonStore.getLanguage();

const currentLanguage = ref(test);
const handleLanguageChange = (language: string) => {
    currentLanguage.value = language;
    if (currentLanguage.value == "ru_RU") isRussia.value = true;
    else isRussia.value = false;
};
onMounted(() => {
    eventBus.on("languageChanged", handleLanguageChange);
    if (commonStore.getLanguage() == "ru_RU") {
        isRussia.value = true;
    }
});

onUnmounted(() => {
    eventBus.off("languageChanged", handleLanguageChange);
});
</script>

<template>
    <div class="about">
        <div class="left">
            <img loading="lazy" src="../../assets/home/about.png" alt="">
        </div>
        <div class="right">
            <h3>{{ $t('home.about.heading') }}</h3>
            <p class="para-font">{{ $t('home.about.para') }}</p>
            <RouterLink to="/about"><button class="para-font">{{ $t('home.about.cta') }}</button></RouterLink>
         </div>
    </div>
</template>

<style lang="scss" scoped>
// desk
.about {
    width: 80%;
    max-width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .left {
        // width: 50%;

        img {
            // width: 100%;
            width: 600px;
            max-width: 689px;
        }
    }

    .right {
        width: 40%;
        margin-left: 50px;

        h3 {
            font-family: "Raleway", sans-serif;
            font-weight: 600;
            font-size: 40px;
        }

        p {
            font-size: 15px;
            font-weight: 400;
        }

        button {
            background-color: #2CA2FB;
            border: none;
            color: #ffff;
            font-size: 15px;
            font-weight: 200;
            border-radius: 100px;
            padding: 15px 30px;
        }

        img {
            width: 50px;
            margin-left: 10px;
            cursor: pointer;
        }
    }
}

// mobile
@media only screen and (max-width: 600px) {
    .about {
        width: 90%;
        max-width: 1400px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 50px;
        margin-bottom: 50px;

        .left {
            // width: 50%;
            width: 100%;

            img {
                // width: 100%;
                width: 100%;
                max-width: 689px;
            }
        }

        .right {
            width: 100%;
            margin-left: 0px;

            h3 {
                font-family: "Raleway", sans-serif;
                font-weight: 600;
                font-size: 20px;
            }

            p {
                font-size: 12px !important;
            }

            button {
                background-color: #2CA2FB;
                border: none;
                color: #ffff;
                font-size: 12px;
                font-weight: 200;
                border-radius: 100px;
                padding: 10px 20px;
            }

            img {
                width: 40px;
                margin-left: 4px;
                cursor: pointer;
            }
        }
    }
}
</style>
