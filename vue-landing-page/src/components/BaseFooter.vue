<script setup lang="ts">
import { useI18n } from "vue-i18n";
import i18n from "../language";
const { t: $t } = useI18n();


// defineProps<{ msg: string }>()
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
     <div class="base-footer">
        <div class="base-top">
            <div class="first">
                <div>
                    <div style="visibility: hidden;">2</div>
                </div>
                <div>
                    <a href="https://www.facebook.com/RayanWalla/
" target="_blank"><img loading="lazy" src="../assets/baseFooter/Link.png" alt="">
                    </a>
                    <a href="https://twitter.com/RayanWalaa01" target="_blank"><img loading="lazy"
                            src="../assets/baseFooter/Link-1.png" alt="">
                    </a>
                    <a href="https://www.instagram.com/rayanwalaa001/" target="_blank"><img loading="lazy"
                            src="../assets/baseFooter/Link-2.png" alt=""></a>
                    <a href="https://www.youtube.com/channel/UCc1a3A3fp053UyAurGxniHQ" target="_blank"><img loading="lazy"
                            src="../assets/baseFooter/Link-3.png" alt=""></a>
                    <a href="
https://www.tiktok.com/@rayan_walaa" target="_blank"><img loading="lazy" src="../assets/baseFooter/Link-4.png" alt="">
                    </a>
                </div>
            </div>
            <div class="second">
                <div class="left">
                    <img loading="lazy" src="../assets/fav.png" alt="">
                    <span class="para-font">AI - Where innovation meets influence.</span>
                </div>
                <div class="right">
                    <p class="para-font">Newsletter</p>
                    <form action="">
                        <input class="para-font" type="email" placeholder="Enter email" id="">
                        <button class="para-font">SUBSCRIBE</button>
                    </form>
                    <div>
                        <input class="para-font" type="checkbox" name="" id="">
                        <span class="para-font">I agree that my submitted data is being collected and stored.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-top">
            <img loading="lazy" src="../assets/baseFooter/nfootup.png" alt="">
        </div>
    </div>
    <div class="base-bottom">
        <div class="left para-font">© 2023 SaaS website. All Rights Reserved.</div>
        <div class="right floating-element" @click="scrollToTop">
            <p class="para-font"> Scroll Top<img loading="lazy" src="../assets/baseFooter/top.png" /></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.floating-element {
    animation: floatAnimation 2s ease-in-out infinite alternate;
}

@keyframes floatAnimation {
    0% {
        transform: translate(0, -5px);
    }

    100% {
        transform: translate(-10px, 5px);
    }
}

.base-footer {
    height: 60vh;
    background-color: #000E29;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .footer-top {
        width: 100%;
        position: absolute;
        top: 0px;

        img {
            width: 100%;
        }
    }

    .base-top {
        width: 80%;
        margin: auto;

        .first {
            margin-top: 50px;
            width: 100%;
            justify-content: space-between;
            display: flex;
            border-bottom: 1px solid #253450;
            padding-bottom: 20px;

            // border: 1px solid red;
            img {
                margin: 10px;
            }
        }

        .second {
            display: flex;
            justify-content: space-between;
            align-self: center;
            // border: 1px solid red;
            color: #fff;
            margin-top: 50px;

            .left {
                // border: 1px solid red;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;

                span {
                    margin-top: 10px;
                }
            }

            img {
                width: 100px;
            }

            p {
                font-size: 18px;
            }

            .right {

                // display: flex;
                // align-items: flex-end;
                // justify-content: center;
                // flex-direction: column;
                form {
                    position: relative;

                    input,
                    button {
                        padding: 10px;
                        color: #fff;
                        background-color: #132038;
                        border: none;

                    }

                    input {
                        width: 400px;
                        border-radius: 50px;
                        outline: none;
                    }

                    button {
                        background-color: #2CA2FB;
                        border-radius: 50px;
                        position: absolute;
                        right: 0px;
                    }

                    input::placeholder {
                        color: #475063;
                    }
                }

                div {

                    display: flex;
                    align-items: center;
                    margin-top: 10px;

                    input {
                        margin-right: 2px;
                    }
                }

                div span {
                    font-size: 10px;

                }
            }
        }
    }
}

.base-bottom {
    background-color: #000E29;
    // border: 1px solid red;
    padding: 0 10%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
        cursor: pointer;
    }
}

@media only screen and (max-width: 600px) {
    .base-footer {
        height: 60vh;
        background-color: #000E29;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;

        .footer-top {
            width: 100%;
            position: absolute;
            top: -2px;

            img {
                width: 100%;
            }
        }

        .base-top {
            width: 90%;
            margin: auto;

            .first {
                margin-top: 0px;
                width: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                display: flex;
                border-bottom: 1px solid #253450;
                padding-bottom: 20px;

                // border: 1px solid red;
                img {
                    margin: 6px;
                }
            }

            .second {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-self: center;
                // border: 1px solid red;
                color: #fff;
                margin-top: 50px;


                img {
                    width: 50px;
                }

                p {
                    font-size: 18px;
                    margin: 0;
                }

                .right {
                    margin-top: 10px;

                    // display: flex;
                    // align-items: flex-end;
                    // justify-content: center;
                    // flex-direction: column;
                    form {
                        position: relative;


                        input,
                        button {
                            padding: 10px;
                            color: #fff;
                            background-color: #132038;
                            border: none;

                        }

                        input {
                            width: 100%;
                            border-radius: 50px;
                            outline: none;
                        }

                        button {
                            background-color: #2CA2FB;
                            border-radius: 50px;
                            position: absolute;
                            right: 0px;
                        }

                        input::placeholder {
                            color: #475063;
                        }
                    }

                    div {

                        display: flex;
                        align-items: center;
                        margin-top: 10px;

                        input {
                            margin-right: 2px;
                        }
                    }

                    div span {
                        font-size: 10px;

                    }
                }
            }
        }
    }

    .base-bottom {
        background-color: #000E29;
        // border: 1px solid red;
        padding: 10px 10%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;


        .right {
            cursor: pointer;

            p {
                margin: 0;

            }

            img {
                margin-left: 2px;
            }
        }
    }

}
</style>
