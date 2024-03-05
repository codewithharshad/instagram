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
    <div>
        <div class="join">
            <div class="left">
                <img loading="lazy" src="../../assets/home/join-left.png" alt="">
            </div>
            <div class="right">
                <h3 class="para-font">{{ $t('home.join.h1') }} <br><span>{{ $t('home.join.h2') }}</span></h3>
                <p class="para-font">AI Technology invites you to be a part of a transformative journey into the
                    future
                    of AI and technology. Whether you're a business seeking innovative solutions or an individual looking to
                    stay ahead in the digital age, we have the expertise and resources to propel you forward.</p>
                <div class="cta">
                    <!-- <button class="para-font">{{ $t('home.join.invest') }}</button> -->
                    <!-- <RouterLink to="/about"><img loading="lazy" src="../../assets/home/play.png" alt=""></RouterLink> -->
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="left">
                <p class="para-font">{{ $t('home.contact.h1') }}</p>
            </div>
            <div class="right">
                <!-- <button>{{ $t('home.contact.invest') }}</button>
                <button>{{ $t('home.contact.contact') }}</button> -->
            </div>
        </div>
        <div class="last">
            <p class="para-font">{{ $t('home.contact.para') }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// desk
.join {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
        img {
            width: 500px;
        }
    }

    .right {
        margin-left: 50px;

        h3 {
            font-size: 40px;
            font-weight: 500;

            span {
                color: #2CA2FB;
            }
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

        p {
            font-weight: 500;
        }
    }

}

.contact {
    background-image: url('../../assets/home/contact.png');
    height: 150px;
    background-size: cover;
    width: 80%;
    margin: auto;
    border-radius: 20px;
    margin-bottom: 50px;
    margin-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    p {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 500;
        color: #fff;
    }

    .right {
        button {
            background-color: #2CA2FB;
            border: none;
            color: #ffff;
            font-size: 15px;
            font-weight: 200;
            border-radius: 100px;
            padding: 10px 30px;
        }

        button:nth-child(2) {
            background-color: #FCAF3D;
            border: none;
            color: #ffff;
            font-size: 15px;
            font-weight: 200;
            border-radius: 100px;
            padding: 10px 30px;
            margin-left: 10px;
        }
    }
}

.last {
    text-align: center;
    font-size: 30px;

    width: 80%;
    margin: auto;
    margin-bottom: 100px;

    p {
        font-weight: 500 !important;
    }
}

// mobile
@media only screen and (max-width: 600px) {
    .join {
        width: 90%;
        margin: auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .left {
            width: 100%;
            text-align: center;

            img {
                width: 60%;
            }
        }

        .right {
            margin-left: 0px;
            width: 100%;

            h3 {
                font-size: 20px;
                font-weight: 500;

                span {
                    color: #2CA2FB;
                }
            }

            p {
                font-size: 12px;
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
                margin-left: 10px;
                cursor: pointer;
            }
        }

    }

    .contact {
        background-image: url('../../assets/home/contact.png');
        height: 150px;
        background-size: cover;
        width: 90%;
        margin: auto;
        border-radius: 20px;
        margin-bottom: 20px;
        margin-top: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

        p {
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-weight: 500;
            color: #fff;
        }

        .right {
            button {
                background-color: #2CA2FB;
                border: none;
                color: #ffff;
                font-size: 12px;
                font-weight: 200;
                border-radius: 100px;
                padding: 10px 20px;
            }

            button:nth-child(2) {
                background-color: #FCAF3D;
                border: none;
                color: #ffff;
                font-size: 12px;
                font-weight: 200;
                border-radius: 100px;
                padding: 10px 20px;
                margin-left: 5px;
            }
        }
    }

    .last {
        text-align: center;
        font-size: 20px;

        width: 90%;
        margin: auto;
        margin-bottom: 50px;

        p {
            font-weight: 500 !important;
        }
    }
}
</style>
