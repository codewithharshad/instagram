<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted, reactive, computed } from "vue";
import { useCommonStore } from "../../store";
import eventBus from "../../eventBus";

const { t: $t } = useI18n();
const isRussia = ref(false);
const commonStore = useCommonStore();
// read more
const fullText = $t('home.dive.cp3');
const cardHeightPC = 500;
const cardHeightMobile = 250;
const text = ref(fullText);
const readMore = ref(false);
const isOverflow = computed(() => {
    return text.value.length > 200; // Adjust the threshold as needed
});
const truncatedText = computed(() => {
    if (readMore.value) {
        return fullText;
    } else {
        return text.value.slice(0, 272); // Adjust the truncation length as needed
    }
});
const readMoreText = computed(() => {
    return readMore.value ? 'less' : '...';
});
const cardHeight = computed(() => {
    return window.innerWidth >= 768 ? `${cardHeightPC}px` : `${cardHeightMobile}px`;
});
const toggleReadMore = () => {
    readMore.value = !readMore.value;
};
// Adjust the threshold and truncation length as needed for different devices
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && text.value.length > 80) {
        text.value = text.value.slice(0, 100);
        readMore.value = true;
    } else if (window.innerWidth >= 768 && text.value.length > 200) {
        text.value = fullText;
        readMore.value = false;
    }
});
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
    <div class="tech">
        <img loading="lazy" class='toptop' src="../../assets/home/toptop.png" alt="">
        <img loading="lazy" class='topbot' src="../../assets/home/topbot.png" alt="">
        <div class="head-content">
            <h3 class="head-font">{{ $t('home.dive.heading') }}</h3>
        </div>
        <div class="card-content">
            <div class="card1">
                <h4 class="para-font">{{ $t('home.dive.ch1') }}</h4>
                <div class="line"></div>
                <p class="para-font">{{ $t('home.dive.cp1') }}</p>
            </div>
            <div class="card1">
                <h4 class="para-font">{{ $t('home.dive.ch2') }}</h4>
                <div class="line"></div>
                <p class="para-font">{{ $t('home.dive.cp2') }}</p>


            </div>
            <div class="card1" :style="{ height: cardHeight }">
                <h4 class="para-font">{{ $t('home.dive.ch3') }}</h4>
                <div class="line"></div>
                <!-- <p class="para-font">{{ $t('home.dive.cp3') }}</p> -->
                <p>{{ truncatedText }}
                    <span v-if="isOverflow" @click="toggleReadMore">{{ readMoreText }}</span>
                </p>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// desk
.tech {
    background-image: url('../../assets/home/top.png');
    background-size: cover;
    position: relative;
    margin-top: 50px;
    padding: 100px 0;
    padding-bottom: 200px;

    .toptop {
        position: absolute;
        top: 0;
        width: 100%;
    }

    .topbot {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .head-content {
        margin-top: 100px;
        position: relative;
        // top: 50px;
        text-align: center;

        h3 {
            font-weight: 500;
            font-size: 40px;
            color: #fff;
            text-align: center;

            span {
                color: #0CE0FF;
            }
        }

        p {
            font-size: 15px;
            color: #fff;
        }
    }

    .card-content {
        display: flex;
        // align-items: flex-start !important;
        justify-content: center;
        width: 60%;
     
        min-width: 1000px;
        margin: auto;
        margin-top: 100px;
        flex-direction: column;
        .card1 {
            transition: height 0.3s ease;
            width: 80% !important;
            margin: 20px;
            // border: 1px solid red;
            background-color: #132038;
            height: auto !important;
            border-radius: 20px;
            min-height: auto !important;
            padding: 20px;
            color: #fff;
            margin-top: 10px !important;

            .line {
                width: 100px;
                height: 2px;
                background-color: #0CE0FF;
            }

            h4 {
                font-size: 30px;
                width: 90%;
            }

            p {
                font-size: 18px;
                margin-top: 20px;

                span {
                    color: #0CE0FF;
                    font-weight: bold;

                }
            }
        }
    }

}

// mobile
@media only screen and (max-width: 600px) {
    .tech {
        background-image: url('../../assets/home/top.png');
        background-size: cover;
        position: relative;
        margin-top: 20px;
        padding: 20px 0;
        padding-bottom: 50px;

        .toptop {
            position: absolute;
            top: -2px;
            width: 100%;
        }

        .topbot {
            position: absolute;
            bottom: -2px;
            width: 100%;
        }

        .head-content {
            margin-top: 50px;
            position: relative;
            // top: 50px;
            text-align: center;

            h3 {
                font-weight: 500;
                font-size: 20px;
                color: #fff;
                text-align: center;

                span {
                    color: #0CE0FF;
                }
            }

            p {
                font-size: 15px;
                color: #fff;
            }
        }

        .card-content {
            display: flex;
            align-items: center;
            justify-content: center;
            // flex-wrap: wrap; 
            // flex-direction: column;
            // border: 1px solid red;
            width: 60%;
            min-width: 100%;
            margin: auto;
            margin-top: 0px;

            .card1 {
                width: 46%;
                margin: 0.5px;
                // border: 1px solid red;
                background-color: #132038;
                height: 255px;
                border-radius: 10px;
                min-height: 250px;
                padding: 10px;
                color: #fff;

                .line {
                    width: 50px;
                    height: 1px;
                    background-color: #0CE0FF;
                }

                h4 {
                    font-size: 9.5px;
                    width: 100%;
                    margin-bottom: 5px;
                }

                p {
                    font-size: 9.4px;
                    margin-top: 5px;
                    margin-bottom: 0;
                }
            }
        }

    }
}
</style>
