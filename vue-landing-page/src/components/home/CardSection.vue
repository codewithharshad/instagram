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
    <div class="h5-only">
        <div class="para">
            <p>
                {{ $t('home.hero.p1') }} <br>
            </p>
            <p>
                {{ $t('home.hero.p2') }}
            </p>
            <p>
                {{ $t('home.hero.p3') }}
            </p>
        </div>
    </div>
    <div class="cards">
        <img loading="lazy" src="../../assets/home/c1.png" alt="">
        <img loading="lazy" class="img2" src="../../assets/home/c2.png" alt="">
        <img loading="lazy" src="../../assets/home/c3.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
// desk
.cards {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    margin: auto;
    text-align: center;
    margin-bottom: 50px;

    img {
        width: 356.79px;
    }

    img:nth-child(2) {
        width: 417.21px;
    }

}

.h5-only {
    display: none;
}

// mobile
@media only screen and (max-width: 600px) {
    .cards {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        max-width: 90%;
        margin: auto;
        text-align: center;
        margin-top: 10px;
        // display: none;
        margin-bottom: 20px;

        img {
            width: 103px;
        }

        img:nth-child(2) {
            width: 118px;
        }

    }

    .h5-only {
        display: block;
        // border: 1px solid red;
        // background-color: #000E29 !important;
        color: #000E29;
        width: 90%;
        margin: auto;
        border-radius: 6px;
        // position: relative;
        z-index: 2;
        top: -50px;
        top: 10px;
        margin-top: 10px;
        margin-bottom: 20px;

        .para {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            // border: 1px solid green;
        }

        p {
            margin: 0;
            margin-bottom: 0px;
            font-weight: 600;
            font-size: 17px;
            // border: 1px solid green;
            text-align: center;
        }
    }

    // .cards {
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     width: 90%;
    //     margin: auto;
    //     margin-top: 20px;

    //     .cards-1 {
    //         width: 200px;
    //         height: 150px;
    //         border-radius: 10px;
    //         background-color: #fff;
    //         position: relative;
    //         // border: 1px solid red;
    //         overflow: hidden;
    //         display: flex;
    //         align-items: center;
    //         justify-content: flex-start;
    //         flex-direction: column;
    //         margin: 2px;

    //         .layer {
    //             background-color: #2CA2FB;
    //             backdrop-filter: blur(10);
    //             width: 200px;
    //             height: 200px;
    //             position: absolute;
    //             filter: blur(20px);
    //             border-radius: 100%;
    //             top: -100px;
    //             right: -60px;
    //             z-index: 1;
    //         }

    //         img,
    //         span {
    //             position: relative;
    //             z-index: 2;
    //         }

    //         img {
    //             width: 70px;
    //             // height: 70px;
    //             margin-top: 20px;
    //         }

    //         span {
    //             font-size: 12px;
    //             font-weight: 500;
    //         }
    //     }
    // }
}
</style>
