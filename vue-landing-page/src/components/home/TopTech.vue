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
    <div class="tech">
        <img loading="lazy" class='toptop' src="../../assets/home/toptop.png" alt="">
        <img loading="lazy" class='topbot' src="../../assets/home/topbottom.png" alt="">
        <div class="head-content">
            <h3 class="head-font">{{ $t('home.top.heading') }}<span>{{ $t('home.top.heading2') }}</span></h3>
            <p class="para-font">{{ $t('home.top.para') }}</p>
        </div>
        <div class="card-content">
            <div class="card1">
                <img loading="lazy" class='' src="../../assets/home/topcard1.png" alt="">
                <span>{{ $t('home.top.c1') }}</span>
            </div>
            <div class="card1">
                <img loading="lazy" class='' src="../../assets/home/topcard2.png" alt="">
                <span>{{ $t('home.top.c2') }}</span>
            </div>
        </div>
        <div class="cta-content">
            <img loading="lazy" src="../../assets/home/topcta.png" alt="">
            <div class="center-con">
                <div class="left head-font">{{ $t('home.top.cta1') }}</div>
                <div class="right">
                    <div>
                        
                    </div>
                    <div>
                        <img loading="lazy" src="../../assets/home/topcta3.png" alt="">
                        <p class="para-font">{{ $t('home.top.cta3') }} <span><a href="mailto:official@aitech.com 
">official@aitech.com 
                                </a></span></p>
                    </div>
                </div>
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
    margin-top: 100px;
    padding: 100px 0;

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
        align-items: center;
        justify-content: center;
        // position: relative;
        // top: 400px;
        margin-top: 50px;
        margin: 100px;

        .card1 {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 10px;

            span {
                position: absolute;
                bottom: 50px;
                font-size: 20px;
                font-weight: 400;
                // font-size: ;
                color: #fff;
            }

            img {
                width: 300px;
            }
        }
    }

    .cta-content {
        text-align: center;
        width: 50%;
        min-width: 800px;
        margin: auto;
        margin-bottom: 100px;

        img {
            width: 100%;
        }

        position: relative;
        // border: 1px solid red;

        .center-con {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 40px;
            position: absolute;
            top: 10px;

            width: 90%;
            top: 50%;
            transform: translateY(-50%);

            .left {
                font-weight: 500;
                font-size: 20px;
                color: #fff;
            }

            .right {
                display: flex;
                align-items: center;
                justify-content: center;

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 15px;

                    p {
                        margin: 0;
                        padding: 0;
                        color: #959AA5;
                        font-size: 15px;
                        font-weight: 500;

                        span a {
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }

                img {
                    width: 10px;
                    margin-right: 3px;
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
        margin-top: 50px;
        padding: 30px 0;
        // border-top: 10px solid #fff;
        // border-bottom: 10px solid #fff;

        .toptop {
            position: absolute;
            top: -2px;
            width: 100%;
            // border-top: 1px solid red;
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
                font-size: 12px;
                width: 80%;
                margin: auto;
                color: #fff;
            }
        }

        .card-content {
            display: flex;
            align-items: center;
            justify-content: center;
            // flex-direction: column;
            // position: relative;
            // top: 400px;
            margin-top: 50px;
            margin: 20px;

            .card1 {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin: 10px;

                span {
                    position: absolute;
                    bottom: 15px;
                    font-size: 8px;
                    font-weight: 400;
                    // font-size: ;
                    color: #fff;
                }

                img {
                    width: 150px;
                }
            }
        }

        .cta-content {
            text-align: center;
            min-width: 320px;
            margin: auto;
            margin-bottom: 20px;
            // border: 1px solid red;
            height: 100px;
            background-color: #132038;
            border-radius: 10px;

            img {
                width: 100%;
                display: none;
            }

            position: relative;
            // border: 1px solid red;

            .center-con {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                margin: 0 0px;
                position: absolute;
                top: 10px;

                width: 90%;
                top: 50%;
                transform: translateY(-50%);

                .left {
                    font-weight: 500;
                    font-size: 14px;
                    color: #fff;
                }

                .right {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: 5px;

                    div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 0px;


                        p {
                            margin: 0;
                            padding: 0;
                            color: #959AA5;
                            font-size: 10px;
                            font-weight: 500;

                            span a {
                                color: #fff;
                                text-decoration: none;
                            }
                        }
                    }

                    img {
                        width: 6px;
                        margin-right: 3px;
                    }
                }
            }
        }
    }

}
</style>
