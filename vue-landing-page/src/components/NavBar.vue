<script setup lang="ts">
import { reactive, ref, onMounted, onUpdated, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useCommonStore } from "../store";
import { useI18n } from "vue-i18n";
import i18n from "../language";

import lang_EN_IMG from "../assets/navbar/lang-en.png";
import lang_RU_IMG from "../assets/navbar/lang-ru.png";
 
import eventBus from '../eventBus';


const router = useRouter()
const isNavbarOpen = ref(false)
const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
    console.log('clicked', isNavbarOpen.value)

}
const isCollapseOpen = ref(false);
const isRussia = ref(false);


interface Tlang {
    title: string;
    lang: string;
}

const { t: $t } = useI18n();
const commonStore = useCommonStore();
let curLoacle: any = ref();

const localeList = reactive([
    {
        title: "EN",
        lang: "en_US",
        img: lang_EN_IMG,
    },
    {
        title: "RU",
        lang: "ru_RU",
        img: lang_RU_IMG,
    },
]);

const selectedLang = ref(localStorage.getItem("selectedLanguage") || "EN");

const onChange = (locale: string | undefined) => {
    let selectedLanguage = localeList.find((lang) => lang.title === locale);
    isCollapseOpen.value = !isCollapseOpen
    if (!selectedLanguage) {
        // set default value here, e.g. the first language in the list
        selectedLanguage = localeList[0];
    }
    selectedLang.value = selectedLanguage.title; // update the selected value
    localStorage.setItem("selectedLanguage", selectedLanguage.title); // store the selected language in local storage
    console.log("selected lang", selectedLang);
    if (selectedLanguage) {
        commonStore.setLanguage(selectedLanguage.lang);
        eventBus.emit('languageChanged', selectedLanguage.lang);
        if (i18n.mode === "legacy") {
            i18n.global.locale = selectedLanguage.lang;
        } else {
            i18n.global.locale.value = selectedLanguage.lang;
        };
        // router.go(0)
    }
    if (selectedLang.value == 'Russian') {
        isRussia.value = true;
    }
    else {
        isRussia.value = false;
    }

    isNavbarOpen.value = !isNavbarOpen.value;
};

 

onMounted(() => {
    if (commonStore.getLanguage() == 'ru_RU') {
        isRussia.value = true;
    }
    else {
        isRussia.value = false;
    }
})
</script>

<template>
    <!-- start -->
    <nav class="desktop-nav  n-nav  navbar navbar-expand-lg navbar-light bg-white bg-primary">
        <div class="container-own">
            <a class="navbar-brand" href="#">
                <img loading="lazy" src="../assets/fav.png" alt="Your Logo">
            </a>
            <span class="navbar-toggler margin-right" type="icon" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggleNavbar">
                <span class="navbar-toggler-icon"></span>
            </span>
            <div class="w-100 collapse navbar-collapse cust-width" :class="{ 'show': isNavbarOpen }" id="navbarNav">
                <ul class="menu navbar-nav " :class="{ 'rusMenu': isRussia }">
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/"
                            :class="{ 'nav-link-active': $route.path === '/' }">{{ $t("header.home")
                            }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark'
                            :class="{ 'nav-link-active': $route.path === '/about' }" to="/about">{{ $t("header.about")
                            }}</router-link>
                    </li>
     
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark'
                            :class="{ 'nav-link-active': $route.path === '/team' }" to="/team">{{
                                $t("header.team") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark'
                            :class="{ 'nav-link-active': $route.path === '/ai' }" to="/ai">{{
                                $t("header.ai") }}</router-link>
                    </li>
                      <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark'
                            :class="{ 'nav-link-active': $route.path === '/ai' }" to="/ai">Contact Us</router-link>
                    </li>
                     
                </ul>
            </div>
        </div>
    </nav>

    <!-- h5-nav -->
    <!-- mobile-only-nav n-nav navbar navbar-lg -->
    <nav class="mobile-only-nav n-nav navbar navbar-lg">
        <div class="container-fuild">
            <div class="d-flex align-items-center justify-content-between">
                <a class="navbar-brand" href="#">
                    <img loading="lazy" src="../assets/fav.png" alt="Your Logo">
                </a>
                <span class="navbar-toggler margin-right" type="icon" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    v-on:click="toggleNavbar">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <span class="navbar-toggler-icon"></span>
                    <!-- <span>--</span> -->
                </span>
            </div>
            <div class="w-100 collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarNav">
                <ul class="menu navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/">{{ $t("header.home")
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/about">{{ $t("header.about")
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/ai">{{
                            $t("header.insure") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/team">{{ $t("header.team")
                        }}</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link v-on:click="toggleNavbar" class='nav-link text-dark' to="/ai">{{ $t("header.ai")
                        }}</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown second-menu">
                        <a class="nav-links dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ selectedLang }}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="lang in localeList" :key="lang.title" :value="lang.title">
                                <a @click="onChange(lang.title)" class="dropdown-item">{{ lang.title }}</a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.container-own {
    display: flex;
    width: 90% !important;
    max-width: 1800px;
    margin: auto;

    // border: 1px solid red;
    background: linear-gradient(89.85deg,
            rgba(14, 0, 0, 0.62),
            rgba(217, 217, 217, 0));
    // margin-top: 100px;
    position: absolute;
    // position: fixed;
    // padding: 0;
    left: 50%;
    transform: translateX(-50%);
    top: 70px;
    z-index: 9;
    // border: 1px solid red;
    align-items: center;
    justify-content: start;
}

.navbar {
    padding: 0 !important;
}

.cust-width {
    // border: 1px solid green;

    ul {

        // border: 1px solid gold;
        li a {
            font-size: 16px;
        }

        li {
            padding: 20px !important;
        }
    }

}

.navbar-expand-lg .navbar-nav .nav-link {
    padding: 0 !important;
}

.dropdown-menu {
    background-color: #1A1A1A !important;
}

.second-menu {
    margin-left: 100px;
}

.second-menu li {
    padding: 0 !important;
    font-weight: 300;
    font-size: 12px;


}

.dropdown-item:hover {
    background-color: #CF2230 !important;
}

.mobile-only-nav {
    display: none;
}

.n-nav {
    height: auto;
    font-weight: 300;
    font-size: 14px;
    width: 100% !important;
    background-color: #1a1a1a00 !important;
    color: #fff;

    img {
        width: 100px;
        height: 100px;
        margin-left: 20px;
    }

    .menu li {
        a {
            text-decoration: none;
            color: #fff !important;
            font-weight: 300;
        }

        list-style-type: none;
        padding: 20px;

    }

    .second-menu ul li {
        padding: 0 !important;

        a:hover {
            background-color: #2CA2FB !important;
        }
    }
}

@media only screen and (max-width: 600px) {
    .n-nav {
        margin: 0;
        padding: 0;
        height: auto;
    }

    .menu li {
        a {
            text-decoration: none;
            color: #fff !important;
        }

        list-style-type: none;
        padding: 5px !important;

    }

    .cta-btn {
        margin-top: 10px;
        margin-left: 0 !important;

    }

    .navbar-collapse {
        z-index: 99999;
        background-color: #000E29 !important;
        border: 1px solid #000E29 !important;
        padding: 20px 20px;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        width: 100vw !important;

    }

    .navbar-toggler {
        // color: red !important;
        background-color: #132038;
        border: 1px solid #fff;
    }

    .navbar-toggler-icon {
        // color: red !important;
        filter: brightness(0%) invert(100%);
    }

    .margin-right {
        margin-right: 20px;
        font-size: 15px !important;
    }

    .dropdown-menu {
        background-color: #000E29 !important;
        border: 1px solid #fff !important;
    }

    .mobile-only-nav {
        display: block;
        z-index: 9999999;
        background-color: #000E29 !important;

        img {
            width: auto;
            height: 60px;
            // margin-top: -10px;
            margin-left: 20px;
        }
    }

    .second-menu {
        margin-left: 0;

    }

    .desktop-nav {
        display: none;

    }

    .dropdown-menu {
        border: 1px solid #CF2230;
    }
}

.rusMenu li {
    padding: 0 !important;
    padding-left: 10px !important;
    font-size: 11.2px !important;
}

.nav-link,
.nav-links {
    position: relative;
    z-index: 101;
}

.nav-link::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background-color: #fff;
    margin-top: 3px;
    transition: width 0.3s ease-in-out;
}

.nav-link-active::after {
    // width: 100%;
}

.nav-link-active {
    font-weight: 600 !important;
    // border: 1px solid red;
}
</style>
