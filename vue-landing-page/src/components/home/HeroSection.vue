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
  <div class="hero">
    <div class="hero-content">
       <div class="left">
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
        <div class="join">
          <!-- <img loading="lazy" src="../../assets/home/join.svg" alt="">
          <span>{{ $t('home.hero.ctaButton') }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// desk
.hero {
  background: linear-gradient(180deg, #9df9ff, rgba(184, 216, 255, 0));
  height: 100vh;
  padding-top: 30px;

  .hero-content {
    width: 80%;
    max-width: 1800px;
    margin: auto;
    // border: 1px solid red;
    background-image: url('../../assets/home/hero.png');
    background-size: cover;
    height: 932px;
    
    max-height: 90vh;
    width: 90%;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Archivo", sans-serif;

    .left {
      margin-left: 100px;


      .para {
        // width: 50%;

        p {
          font-family: "Archivo", sans-serif;
          font-weight: 600;
          font-size: 36px;
          color: #fff;
          margin: 0;
        }
      }

      .join {
        position: relative;
        display: inline-block;

        img {
          margin-top: 50px;
          width: 200px;

        }

        span {
          font-family: "Archivo", sans-serif;
          color: #0CE0FF;
          font-weight: 600;
          font-size: 22px;
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}

// mobile
@media only screen and (max-width: 600px) {
  .hero {
    background: linear-gradient(180deg, #9df9ff, rgba(184, 216, 255, 0));
    height: 500px;
    padding-top: 0px;
    position: relative;

    .hero-content {
      width: 100%;
      margin: auto;
      // background-image: url('../../assets/home/hero.png');
      // 
      // background-image: url('../../assets/home/hero.png');
      background-image: url('../../assets/home/hero.png');
       background-size: cover;
      background-repeat: no-repeat;
      background-position-x: -500px;
      height: 500px;
      max-height: 90vh;
      width: 100%;
      border-radius: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Archivo", sans-serif;


      .left {
        margin-left: 0px;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        // position: absolute;
        // width: 80%;
        // border: 1px solid red;
        // padding: 5px 10px;
        // bottom: -50px;
        // background-color: #000E29 !important;
        display: none;

        .para {
          // width: 50%;
          text-align: center !important;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 0px;



          p {
            font-family: "Archivo", sans-serif;
            font-weight: 600;
            font-size: 16px !important;
            color: #111;
            text-align: center;
            text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.54);

          }
        }

        .join {
          position: relative;
          display: inline-block;


          img {
            margin-top: 50px;
            width: 150px;

          }

          span {
            font-family: "Archivo", sans-serif;
            color: #0CE0FF;
            font-weight: 600;
            font-size: 16px;
            position: absolute;
            top: 58px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

    .hero-content::after {
      content: '';
      background-color: #0000004b;
      position: absolute;
      width: 100%;
      height: 500px;
      z-index: 1;
    }
  }
}
</style>
