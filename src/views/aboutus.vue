<template>
    <div id="about-wrapper">
        <div id="mask"></div>
        <!-- block1 -->
        <div class="banner banner-about">
            <div class="banner__infobox">
                <h1 class="about-1">
                    <span class="banner__heading-en">{{$t('aboutus.text11')}}</span>
                    <span class="banner__heading-cht">{{$t('aboutus.text12')}}</span>
                </h1>
                <p class="banner__desc about-2">
                    <span class="banner__desc-line">{{$t('aboutus.text13')}}</span>
                    <span class="banner__desc-line">{{$t('aboutus.text14')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text about-3">
                <div class="banner__vtl-text__inner">
                    {{$t('aboutus.text1s')}}
                </div>
            </div>
        </div>
        <section class="section section-about">
            <div class="wrap__inner">
                <div class="row no-gutters">
                    <div class="col-md-5 offset-lg-1 col-lg-4 about-4">
                        <h3 class="section__heading-en">{{$t('aboutus.text21')}}<br>{{$t('aboutus.text22')}}<br>{{$t('aboutus.text23')}}</h3>
                    </div>
                    <div class="col-md-7 col-lg-6 about-5">
                        <strong class="section__subheading">{{$t('aboutus.text24')}}</strong>
                        <h2 class="section__heading">{{$t('aboutus.text25')}}</h2>
                        <p class="section__text text-default">
                            {{$t('aboutus.text26')}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="section__vtl-text">
                <div>{{$t('aboutus.text2s')}}</div>
            </div>
        </section>
        <div class="row no-gutters">
            <div class="">
                <section class="section">
                    <div class="section__inner">
                        <div class="section-logo__imgbox about-6">
                            <img class="section-logo__img" :src="`${$cdn}/image-base/about/introImg_01.jpg`">
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section class="section">
            <div class="wrap__inner wrap__inner--950 about-7">
                <h3 class="section__subheading">{{$t('aboutus.text31')}}</h3>
                <h2 class="section__heading">{{$t('aboutus.text32')}}</h2>
                <p class="section__text text-default">
                    {{$t('aboutus.text33')}}
                </p>
            </div>
            <div class="section__vtl-text about-8">
                <div>{{$t('aboutus.text3s')}}</div>
            </div>
        </section>
        <div class="row no-gutters">
            <div class="">
                <section class="section">
                    <div class="section__inner section__inner-2">
                        <div class="section-logo__imgbox about-9">
                            <img class="section-logo__img" :src="`${$cdn}/image-base/about/introImg_02.jpg`">
                        </div>
                        <div class="section-logo__imgbox about-10">
                            <img class="section-logo__img" :src="`${$cdn}/image-base/about/introImg_03.jpg`">
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
const triggers = ScrollTrigger.getAll();
export default {
    computed: {
        ...mapGetters(['language']),
        lang: {
            get() {
                return this.language
            },
            set(v) {
                this.setLanguage(v)
            }
        }
    },
    methods: {
        ...mapMutations({
            setLanguage: types.SET_LANGUAGE
        }),
        doAnimation() {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#mask", {
                top: "100vh",
                height: 0,
                duration: 1.6,
                ease: "expo.out",
                delay: .5,
                onComplete() {
                    $('#mask').remove()
                }
            });
            gsap.from(".about-1", {
                scrollTrigger: {
                    trigger: ".about-1",
                },
                opacity: 0,
                duration: 2,
                delay: 1.2,
                ease: 'back'
            });
            gsap.from(".about-2", {
                scrollTrigger: {
                    trigger: ".about-2",
                },
                opacity: 0,
                duration: 2,
                delay: 1.4,
                ease: 'back'
            });
            gsap.from(".about-3", {
                scrollTrigger: {
                    trigger: ".about-3",
                },
                opacity: 0,
                duration: 2,
                delay: 2,
                ease: 'back'
            });
            gsap.from(".about-4", {
                scrollTrigger: {
                    trigger: ".about-4",
                },
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'back'
            });
            gsap.from(".about-5", {
                scrollTrigger: {
                    trigger: ".about-5",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.from(".about-6", {
                scrollTrigger: {
                    trigger: ".about-6",
                },
                opacity: 0,
                duration: 2,
                delay: 1,
                ease: 'back'
            });
            gsap.from(".about-7", {
                scrollTrigger: {
                    trigger: ".about-7",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.from(".about-8", {
                scrollTrigger: {
                    trigger: ".about-8",
                },
                opacity: 0,
                duration: 2,
                delay: 2,
                ease: 'back'
            });
            gsap.from(".about-9", {
                scrollTrigger: {
                    trigger: ".about-9",
                },
                opacity: 0,
                duration: 2,
                delay: 1.2,
                ease: 'back'
            });
            gsap.from(".about-10", {
                scrollTrigger: {
                    trigger: ".about-10",
                },
                opacity: 0,
                duration: 2,
                delay: 1.6,
                ease: 'back'
            });
        }
    },
    mounted() {
        this.doAnimation();
    },
    created() {
    },
    destroyed() {
        triggers.forEach((trigger) => {
            trigger.kill();
        });
    }
}
</script>

<style lang="scss">
$base: 'https://seebeautymedia.com/seebeautymedia/image-base';

#about-wrapper {
    #mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    .banner.banner-about {
        position: relative;
        height: 100vh;
        background-size: cover;
        background-position: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-image: url(#{$base}/about/banner.jpg);
        .banner__infobox {
            max-width: 580px;
            padding: 60px;
            padding-left: 70px;
            position: relative;
            text-align: left;
            color: #fff;
            >h1 {
                margin-bottom: 0;
            }
            >p {
                margin-top: 0;
            }
        }
    }
    .banner__infobox {
        .banner__heading-en {
            font-size: 70px;
            font-weight: bold;
            line-height: 1.02;
            margin-bottom: 10px;
            display: table;
            .en & {
  				margin-bottom: 40px;
            }
        }
        .banner__heading-cht {
            font-size: 24px;
            font-weight: bold;
            line-height: 1.5;
            margin-bottom: 10px;
            display: table;
            .en & {
                display: none;
            }
        }
        .banner__desc span {
            font-size: 16px;
            line-height: 1.5;
            &:last-child:before {
                content: '，';
                .en & {
                    content: '';
                }
            }
        }
    }
    .banner__vtl-text {
        color: #fff;
        position: absolute;
        left: 0;
        transform: rotate(-90deg);
        transform-origin: left top;
        bottom: 60px;
        font-size: 14px;
        padding-top: 1.5rem;
        font-weight: 300;
        .banner__vtl-text__inner{
            &:after{
                content: '';
                width: 22px;
                height: 22px;
                position: absolute;
                background-image: url(#{$base}/common/arrow_down.png);
                background-size: contain;
                transform: rotate(90deg);
                transform-origin: left top;
                left: -4px;
                bottom: -4.5px; //美
            }
        }
    }
    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .section {
        margin: 100px 0 0;
        position: relative;
        .wrap__inner--950 {
            max-width: 950px;
            margin: auto;
            padding: 0 15px;
        }
    }
    .wrap__inner {
        color: #fff;
        margin: 0 auto;
        max-width: 1400px;
        text-align: left;
        .row {
            display: flex;
            flex-wrap: wrap;
        }
        .section__heading-en {
            font-size: 70px;
            line-height: 1.02;
            margin-top: 0px;
        }
        .section__subheading {
            font-size: 16px;
        }
        .section__heading {
            font-size: 34px;
            margin-bottom: 30px;
            line-height: 1.45;
        }
        .section__text {
            color: #ccc;
            font-size: 16px;
            line-height: 2.2rem;
            .en & {
                line-height: 1.875;
            }
        }
    }
    .section__vtl-text {
        display: none;
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-90deg) translateX(-50%);
        transform-origin: left top;
        font-size: 14px;
        padding-top: 1.5rem;
        font-weight: 300;
        color: #ccc;
    }
}

@media screen and (min-width: 768px) {
    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        padding: 0;
    }
    #about-wrapper {
        .banner__vtl-text {
            font-size: 16px;
            bottom: -50px;
            padding-top: 100px;
        }
        .banner__infobox .banner__desc span {
            font-size: 24px;
            line-height: 1.5rem;
            display: block;
            font-weight: bold;
            .en & {
                display: initial;
            }
            &:last-child:before {
                content: '';
            }
        }
        .section__vtl-text {
            display: block;
        }
        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 46.8%;
        }
        .banner__heading-en {
            font-size: 82px;
        }
        .banner__infobox .banner__heading-cht {
            font-size: 70px;
            margin-bottom: 15px;
        }
        .banner {
            background-attachment: fixed;
        }
        .wrap__inner {
            .row {
                flex-wrap: initial;
                >div:first-child {
                    margin-left: 10%;
                    width: 15rem;
                }
            }
            .section__heading-en {
                font-size: 100px;
                margin: 0;
            }
            .section__subheading {
                font-size: 0.6rem;
                padding-left: 0;
            }
            .section__heading {
                font-size: 34px;
                margin-bottom: 30px;
                line-height: 1.45;
            }
            .vtl-text_inner {
                padding-top: 100px;
            }
            .section__text {
                font-size: 18px;
                line-height: 1.67;
            }
        }
        .section {
            margin: 180px 0 0;
            .section__inner-2 {
                width: 100%;
                display: flex;
                > div {
                    width: 50%;
                    display: flex;
                }
            }
            // .section__inner {
            //     display: flex;
            // }
        }
        .vtl-text_inner {
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: rotate(-90deg) translateX(-50%);
            transform-origin: left top;
            font-size: 14px;
            padding-top: 100px;
            font-weight: 300;
            color: #ccc;
        }
        .section__subheading {
            font-size: 0.6rem;
        }
    }
}

@media screen and (min-width: 1680px) {
    #about-wrapper .wrap__inner .section__heading {
        font-size: 48px;
        line-height: 1.36;
        margin-bottom: 35px;
    }
}


</style>
