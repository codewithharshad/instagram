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
    <div class="core">
        <div class="core-head">
            <div class="left">
                <h3 class="head-font">
                    {{ $t('home.core.heading') }} <br>
                    <span>{{ $t('home.core.heading2') }}</span>
                </h3>
            </div>
            <div class="right">
                <!-- <button>{{ $t('home.core.cta') }}</button> -->
            </div>
        </div>
        <div class="card-content">
            <div class="card1">
                <img loading="lazy" src="../../assets/home/core1.png" alt="">
                <div class="tag">{{ $t('home.core.c1') }}</div>
                <div class="points">
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p>{{ $t('home.core.c11') }}</p>
                    </div>
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p>{{ $t('home.core.c12') }}</p>
                    </div>
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p>{{ $t('home.core.c13') }}</p>
                    </div>
                </div>
            </div>
            <div class="card1">
                <img loading="lazy" src="../../assets/home/core2.png" alt="">
                <div class="tag">{{ $t('home.core.c2') }}</div>
                <div class="points">
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p>{{ $t('home.core.c21') }}</p>
                    </div>
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p>{{ $t('home.core.c22') }}</p>
                    </div>

                </div>
            </div>
            <div class="card1">
                <img loading="lazy" src="../../assets/home/core3.png" alt="">
                <div class="tag">{{ $t('home.core.c3') }}</div>
                <div class="points">
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p class="para-font">{{ $t('home.core.c31') }}</p>
                    </div>
                    <div class="point">
                        <img loading="lazy" src="../../assets/home/point.png" alt="">
                        <p class="para-font">{{ $t('home.core.c32') }}</p>
                    </div>

                </div>
            </div>
            <div class="card1">
                    <img loading="lazy" src="../../assets/home/core4.png" alt="">
                    <div class="tag">{{ $t('home.core.c4') }}</div>
                    <div class="points">
                        <div class="point">
                            <img loading="lazy" src="../../assets/home/point.png" alt="">
                            <p class="para-font">{{ $t('home.core.c41') }}</p>
                        </div>
                        <div class="point">
                            <img loading="lazy" src="../../assets/home/point.png" alt="">
                            <p class="para-font">{{ $t('home.core.c42') }}</p>
                        </div>

                    </div>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// desk
.core {
    width: 80%;
    max-width: 1400px;
    margin: auto;
    margin-top: 50px;

    .core-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        button {
            background-color: #2CA2FB;
            border: none;
            color: #ffff;
            font-size: 15px;
            font-weight: 200;
            border-radius: 100px;
            padding: 15px 30px;
        }

        h3 {
            font-size: 40px;
            font-weight: 600;

            span {
                color: #2CA2FB;
            }
        }
    }

    .card-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 50px;
      
        .card1 {
            width: 30%;
               
              padding-right: 10px;
            img {
                width: 300px;
                border-radius: 25px;
                display: block;
            }

            .tag {
                background-color: #EAF6FF;
                color: #2CA2FB;
                // display: inline;
                padding: 10px 20px;
                text-transform: uppercase;
                font-size: 12px;
                border-radius: 10px;
                display: inline-block;
                margin: 15px 0;
            }

            .points {
                margin-top: 1rem;

                .point {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    margin-bottom: 10px;

                    p {
                        padding: 0;
                        margin: 0;
                        line-height: 20px;
                        font-size: 18px;
                        font-weight: 500;

                    }

                    img {
                        width: 18px;
                        border-radius: 0px;
                        margin-right: 5px;
                    }
                }
            }
        }
        .card1:last-child{
             
            padding-right: 0;
        }
    }
}

// mobile
@media only screen and (max-width: 600px) {
    .core {
        width: 90%;
        max-width: 1400px;
        margin: auto;
        margin-top: 50px;

        .core-head {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            button {
                background-color: #2CA2FB;
                border: none;
                color: #ffff;
                font-size: 12px;
                font-weight: 200;
                border-radius: 100px;
                padding: 10px 20px;
            }

            h3 {
                font-size: 20px;
                font-weight: 600;
                margin: 0;

                span {
                    color: #2CA2FB;
                }
            }
        }

        .card-content {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 20px;
            
            flex-direction: column;

            .card1 {
                width: 90%;
                margin-bottom: 5px;
                height: 70px;
                display: flex;
                align-items: flex-start;
                justify-content: start;
                position: relative;
                // margin: px;  
                margin-top: 10px;

                img {
                    width: 100px;
                    border-radius: 5px;
                    display: inline;
                }

                .tag {
                    background-color: #EAF6FF;
                    color: #2CA2FB;
                    // display: inline;
                    padding: 5px 5px;
                    text-transform: uppercase;
                    font-size: 5px;
                    border-radius: 5px;
                    display: inline-block;
                    margin: 5px 0;
                    position: absolute;
                    // top: ;
                    left: 105px;
                    margin-top: 0;
                }

                .points {
                    margin-top: 5px;
                    position: relative;
                    top: 15px;

                    left: 5px;

                    .point {
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-start;
                        margin-bottom: 1px;

                        width: 100%;
                         

                        p {
                            padding: 0;
                            margin: 0;
                            line-height: 10px;
                            font-size: 10px;
                            font-weight: 500;
                            overflow-wrap: break-word;
                            /* Ensure the text wraps within the card */
                            width: 90%;
                        }

                        img {
                            width: 4px;
                            border-radius: 0px;
                            margin-right: 0.2px;
                            margin-top: 1px;
                            // display: none;
                        }
                    }
                }
            }

            .card1:nth-child(1) {
                // 

            }
        }
    }
}
</style>
