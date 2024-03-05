<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted, reactive, computed, watchEffect } from "vue";
import { useCommonStore } from "../../store";
import eventBus from "../../eventBus";

import car1 from '../../assets/home/car1.png'
import car2 from '../../assets/home/car2.png'
import car3 from '../../assets/home/car3.png'
import car4 from '../../assets/home/car4.png'
import car5 from '../../assets/home/car5.png'

import brand1 from '../../assets/home/brand1.png'
import brand2 from '../../assets/home/brand2.png'
import brand3 from '../../assets/home/brand3.png'
import brand4 from '../../assets/home/brand4.png'
import brand5 from '../../assets/home/brand5.png'
import brand6 from '../../assets/home/brand6.png'

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
const images = [
    car1,
    car2,
    car3,
    car4,
    car5,
];
const brandImages = [
    // brand2,

    brand4,
    brand3,

    brand5,
    brand6,
    brand1,
];


// new start
const imagesLoop = [...images, ...images, ...images, ...images];
const viewport = ref<HTMLElement | null>(null);
const offset = ref(0);
const slideWidth = 300; // Width of each image
const currentCenterIndex = ref(0); // Keep track of the index of the center image

const animateCarousel = () => {
    return setInterval(() => {
        offset.value -= 1;
        if (offset.value <= -images.length * slideWidth) {
            offset.value = 0;
        }
    }, 50);
};

const timer = animateCarousel();

watchEffect(() => {
    currentCenterIndex.value = Math.abs(Math.floor(offset.value / slideWidth)) % images.length;
    return () => clearInterval(timer);
});

// mew end

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
    <!-- <div class="trust">
        <div class="trust-carousel">
            <div class="viewport" ref="viewport">
                <div class="track" :style="{ transform: `translateX(${offset}px)` }">
                    <img loading="lazy" v-for="(image, index) in imagesLoop" :key="index" :src="image" alt="carousel image" />
                </div>
            </div>
        </div>
    </div>  -->
    <div class="trust">
        <div class="trust-carousel">
            <div class="viewport" ref="viewport">
                <div class="track" :style="{ transform: `translateX(${offset}px)` }">
                     <!--  <img loading="lazy" v-for="(image, index) in imagesLoop" :key="index" :src="image"
                        :class="{ 'center-image': index === currentCenterIndex }" alt="carousel image" />-->
                     <img 
                     v-for="(image, index) in imagesLoop"
                     :key="index"
                     :src="image"
                     :class="{'center-image': index===currentCenterIndex}"
                     alt="car image"
                     />
                </div>
            </div>
        </div>
        <div class="brand-logo">
            <p class="para-font">{{ $t('home.top.trust') }}</p>
            <img 
            v-for="(image, index) in brandImages"
            :key="index"
            :src="image"
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
// desk
.trust {
    background-image: url('../../assets/home/trustbg.png');
    background-size: cover;
    height: 100vh;
    margin-top: 100px;

    .trust-carousel {
        width: 100%;
        overflow: hidden;
        position: relative;
        top: 200px;

        .viewport {
            display: flex;
        }

        .track {
            display: flex;
        }

        img {
            width: 450px;
            /* Adjust this to fit your image width */
            height: auto;
            transition: transform 0.3s ease;
            margin: 20px
        }

        img:hover {
            transform: scale(1.01);
        }

        img:nth-child(2n) {

            margin-top: 40px;
        }

        .center-image {
            // transform: scale(1.1);
            /* Apply scale animation to center image */
            /* Add box shadow to center image */
        }
    }

    .brand-logo {
        position: relative;
        top: 300px;
        margin: auto;
        text-align: center;

        p {
            font-weight: 500;
        }

        img {
            margin: 10px;
        }

        img:hover {
            transform: scale(1.1);
        }
    }

}

// mobile
@media only screen and (max-width: 600px) {

    .trust {
        background-image: url('../../assets/home/trustbg.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: auto;
        margin-top: 50px;
        margin-bottom: 100px;

        .trust-carousel {
            width: 100%;
            overflow: hidden;
            position: relative;
            top: 50px;

            .viewport {
                display: flex;
            }

            .track {
                display: flex;
            }

            img {
                width: 200px;
                /* Adjust this to fit your image width */
                height: auto;
                transition: transform 0.3s ease;
                margin: 20px
            }

            img:hover {
                transform: scale(1.01);
            }

            img:nth-child(2n) {

                margin-top: 40px;
            }

            .center-image {
                // transform: scale(1.1);
                /* Apply scale animation to center image */
                /* Add box shadow to center image */
            }
        }

        .brand-logo {
            position: relative;
            top: 50px;
            margin: auto;
            text-align: center;
            margin-top: 30px;

            p {
                font-weight: 500;
            }

            img {
                margin: 10px;
                width: 100px;
            }

            img:hover {
                transform: scale(1.1);
            }
        }

    }
}
</style>
 