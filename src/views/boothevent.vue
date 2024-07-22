<template>
    <div id="event-wrapper">
        <div id="mask"></div>
        <!-- block1 -->
        <div class="banner banner-event">
            <div class="banner__infobox">
                <h1 class="event-1">
                    <span class="banner__heading-en">{{$t('boothevent.text11')}}</span>
                    <span class="banner__heading-cht">{{$t('boothevent.text12')}}</span>
                </h1>
                <p class="banner__desc event-2">
                    <span class="banner__desc-line">{{$t('boothevent.text13')}}</span>
                    <span class="banner__desc-line">{{$t('boothevent.text14')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text contact-3">
                <div class="banner__vtl-text__inner">
                    {{$t('boothevent.text1s')}}
                </div>
            </div>
        </div>

        <section class="section" id="event-block2">
            <div class="wrap__inner wrap__inner--950 event-3">
                <h2 class="section__heading">{{$t('boothevent.text21')}}</h2>
                <p class="section__text text-default">
                    {{$t('boothevent.text22')}}
                </p>
            </div>
        </section>

        <div class="row no-gutters">
            <div class="col-md">
                <div class="section section1 event-4">
                    <img :src="`${$cdn}/image-base/event/introImg_01.jpg`">
                </div>
            </div>
            <div class="col-md">
                <div class="section section1 event-5">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-2">
                            <p class="section__heading_lg">{{$t('boothevent.text3a1')}}</p>
                            <p class="section__text_s" v-html="$t(`boothevent.text3a2`)"></p>
                        </div>
                    </div>
                    <img class="section-text__img" :src="`${$cdn}/image-base/event/introImg_03.jpg`" id="introimg03">
                </div>
            </div>
        </div>

        <ol class="row no-gutters rightlist">
            <li class="col-6 col-lg rightlist__item event-6">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text4a1')}}</div>
                    <p class="section__text">{{$t('boothevent.text4a2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-7">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text4b1')}}</div>
                    <p class="section__text">{{$t('boothevent.text4b2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-8">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text4c1')}}</div>
                    <p class="section__text">{{$t('boothevent.text4c2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-9">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text4d1')}}</div>
                    <p class="section__text">{{$t('boothevent.text4d2')}}</p>
                </div>
            </li>
        </ol>

        <div class="row no-gutters no-gutters-2">
            <div class="col-md">
                <div class="section section2 event-10">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-2">
                            <div class="box-center-md">
                                <h3 class="section__heading">{{$t('boothevent.text51')}}</h3>
                                <p class="section__text text-default">
                                    {{$t('boothevent.text52')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="section section2 event-11">
                    <img :src="`${$cdn}/image-base/event/introImg_02.jpg`">
                </div>
            </div>
        </div>

        <ol class="row no-gutters rightlist">
            <li class="col-6 col-lg rightlist__item event-12">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text6a1')}}</div>
                    <p class="section__text">{{$t('boothevent.text6a2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-13">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text6b1')}}</div>
                    <p class="section__text">{{$t('boothevent.text6b2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-14">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text6c1')}}</div>
                    <p class="section__text">{{$t('boothevent.text6c2')}}</p>
                </div>
            </li>
            <li class="col-6 col-lg rightlist__item event-15">
                <div class="rightlist__item-inner">
                    <div class="rightlist__heading">{{$t('boothevent.text6d1')}}</div>
                    <p class="section__text">{{$t('boothevent.text6d2')}}</p>
                </div>
            </li>
        </ol>
        <section class="section section-flow" id="g-event-1617">
            <div class="wrap__inner">
                <div class="box-center-md event-16">
                    <div class="section__heading">{{$t('boothevent.text71')}}</div>
                </div>
                <div class="flowlist-wrap event-17">
                    <ol class="flowlist">
                        <li class="flowlist__item section__text">{{$t('boothevent.text7a1')}}</li>
                        <li class="flowlist__item section__text">{{$t('boothevent.text7a2')}}</li>
                        <li class="flowlist__item section__text">{{$t('boothevent.text7a3')}}</li>
                        <li class="flowlist__item section__text">{{$t('boothevent.text7a4')}}</li>
                        <li class="flowlist__item section__text">{{$t('boothevent.text7a5')}}</li>
                    </ol>
                    <p class="flowlist-wrap__info text-default">{{$t('boothevent.text7a6')}}</p>
                </div>
            </div>
        </section>

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
            gsap.to("#mask",{
                top: "100vh",
                height: 0,
                duration: 1.6,
                ease: "expo.out",
                delay: .5,
                onComplete() {
                    $('#mask').remove()
                }
            });
            gsap.from(".event-1",{
              scrollTrigger:{
                trigger: ".event-1",
              },
              opacity: 0,
              duration: 2,
              delay: 1.2,
              ease: 'back'
            });
            gsap.from(".event-2",{
              scrollTrigger:{
                trigger: ".event-2",
              },
              opacity: 0,
              duration: 2,
              delay: 1.4,
              ease: 'back'
            });
            gsap.from(".event-3",{
                scrollTrigger: {
                    trigger: ".event-3",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.from(".event-4", {
                scrollTrigger: {
                    trigger: ".event-4",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                delay: .2,
                ease: 'power2'
            });
            gsap.from(".event-5", {
                scrollTrigger: {
                    trigger: ".event-5",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -500,
                opacity: 0,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.from(".event-6",{
              scrollTrigger:{
                trigger: ".event-6",
              },
              opacity: 0,
              duration: 2,
              delay: 0.5,
              ease: 'back'
            });
            gsap.from(".event-7",{
              scrollTrigger:{
                trigger: ".event-7",
              },
              opacity: 0,
              duration: 2,
              delay: 0.6,
              ease: 'back'
            });
            gsap.from(".event-8",{
              scrollTrigger:{
                trigger: ".event-8",
              },
              opacity: 0,
              duration: 2,
              delay: 0.7,
              ease: 'back'
            });
            gsap.from(".event-9",{
              scrollTrigger:{
                trigger: ".event-9",
              },
              opacity: 0,
              duration: 2,
              delay: 0.8,
              ease: 'back'
            });
            gsap.from(".event-10", {
                scrollTrigger: {
                    trigger: ".event-10",
                    start: "top 60%",
                    toggleActions: "restart",
                },
                opacity: 0,
                // duration: .1,
                delay: .4
            });
            gsap.from(".event-11", {
                scrollTrigger: {
                    trigger: ".event-11",
                    start: "top 60%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 5,
                delay: .5
            });
            gsap.from(".event-12",{
              scrollTrigger:{
                trigger: ".event-12",
              },
              opacity: 0,
              duration: 2,
              delay: 0.5,
              ease: 'back'
            });
            gsap.from(".event-13",{
              scrollTrigger:{
                trigger: ".event-13",
              },
              opacity: 0,
              duration: 2,
              delay: 0.6,
              ease: 'back'
            });
            gsap.from(".event-14",{
              scrollTrigger:{
                trigger: ".event-14",
              },
              opacity: 0,
              duration: 2,
              delay: 0.7,
              ease: 'back'
            });
            gsap.from(".event-15",{
              scrollTrigger:{
                trigger: ".event-15",
              },
              opacity: 0,
              duration: 2,
              delay: 0.8,
              ease: 'back'
            });
            gsap.from(".event-16",{
                scrollTrigger: {
                    trigger: "#g-event-1617",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 2,
                delay: .5,
                ease: 'slow(0.5, 0.8, true)'
            });
            gsap.to(".event-16",{
                scrollTrigger: {
                    trigger: "#g-event-1617",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2,
            });
            gsap.from(".event-17",{
                scrollTrigger: {
                    trigger: "#g-event-1617",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 2,
                delay: 1,
                ease: 'slow(0.5, 0.8, true)'
            });
            gsap.to(".event-17",{
                scrollTrigger: {
                    trigger: "#g-event-1617",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2,
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

#event-wrapper {
    #mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    .banner.banner-event {
        position: relative;
        height: 100vh;
        background-size: cover;
        background-position: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-image: url(#{$base}/event/banner.jpg);
        .banner__infobox {
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
    .col-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        padding: 2rem 0;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        &.no-gutters {
            margin: 0;
            color: #fff;
            .rightlist__item-inner {
                margin-top: 0.5rem;
                .rightlist__heading {
                    font-size: 18px;
                }
                .section__text {
                    font-size: 16px;
                    line-height: 1.15;
                    width: 98%;
                    margin: 1em auto;
                }
            }
            .section-text__img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                &#introimg03 {
                    .en & {
                        height: 100%;
                    }
                }
            }
        }
        // &.no-gutters-2 {
        //     margin-top: -6rem;
        // }
    }
    .col-md {
        color: #eee;
        .col-lg-10.offset-lg-2 {
            text-align: left;
            margin-top: 15px;
            margin-bottom: 40px;
            .section__text {
                color: #ccc;
                font-size: 16px;
                line-height: 1.67;
                text-align: left;
            }
        }
    }
    .section {
        position: relative;
        .wrap__inner--950 {
            max-width: 950px;
            padding: 0 15px;
            text-align: left;
        }
        &.section1 {
            font-weight: 600;
            margin: 0 -15px;
            .section__heading_lg {
                font-size: 34px;
                margin-bottom: 1.5rem;
            }
            .section__text_s {
                font-size: 24px;
                line-height: 2.5rem;
                font-weight: normal; //美
            }
            .col-lg-10.offset-lg-2 {
                margin: 10% auto 6% 10%;
                .en & {
                    margin: 2% auto 6% 7%;
                }
            }
        }
        &.section2 {
            .section__heading {
                font-size: 34px;
            }
        }
        &.section-flow {
            background-color: #000;
            margin-top: 0;
            padding: 50px 0;
        }
    }
    .wrap__inner {
        color: #eee;
        margin: 2rem auto;
        max-width: 1400px;
        .row {
            display: flex;
            flex-wrap: wrap;
        }
        .section__subheading {
            font-size: 1rem;
        }
        .section__heading {
            font-size: 34px;
            font-weight: 600;
            margin:48px auto;
            line-height: 1.2;
        }
        .section__text {
            font-size: 16px;
            line-height: 2.2rem;
            // text-align: left; //美
            .en & {
                line-height: 1.5;
            }
        }
    }
    .flowlist-wrap {
        max-width: 82%;
        margin: 5% auto 0;
        font-size: 0.5rem;
        .flowlist {
            .flowlist__item {
                background-color: #b00b5d;
                padding: 1.625em 0.5em;
                &:nth-child(2) {
                    background-color: #bf115f;
                }
                &:nth-child(3) {
                    background-color: #cb115f;
                }
                &:nth-child(4) {
                    background-color: #d62b67;
                }
                &:nth-child(5) {
                    background-color: #e54975;
                }
            }
        }
        .flowlist-wrap__info {
            margin-top: 1.25em;
            font-size: 16px;
            text-align: left;
        }
    }
    .rightlist__item {
        &:nth-child(1), &:nth-child(4) {
            background-color: #87164d;
        }
        &:nth-child(2), &:nth-child(3) {
            background-color: #e61673;
        }
    }
    //品美
    #event-block2{
      margin: 180px 0;
    }
}

@media screen and (min-width: 768px) {
    #event-wrapper {
        .banner__vtl-text {
            font-size: 16px;
            bottom: -50px;
            padding-top: 100px;
        }
        .section__vtl-text {
            display: block;
        }
        .col-md {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            padding: 0 !important;
            .col-lg-10.offset-lg-2 {
                margin: 23% auto auto 33.2%;
                width: 50%;
                .en & {
                    margin: 16% 12% 0;
                    width: 80%;
                }
            }
        }
        .section.section1 {
            .col-lg-10.offset-lg-2 {
                margin: 18% 12% 5%;
                .en & {
                    margin: 7% 12% 0;
                }
            }
            .section__heading_lg {
                font-size: 82px;
                margin-top: 0;
            }
            .section__text_s {
                font-size: 34px;
                line-height: 2rem;
                font-weight: normal; //美
            }
        }
        .section.section2 {
            .section__heading {
                font-size: 48px;
                line-height: 1.36;
            }
            .section__text.text-default {
                font-size: 18px;
                line-height: 1.67;
            }
        }
        .banner__infobox {
            .banner__heading-en {
                font-size: 82px;
            }
            .banner__heading-cht {
                font-size: 70px;
                margin-bottom: 15px;
            }
            .banner__desc span {
                font-size: 0.8rem;
                line-height: 1.5rem;
                display: block;
            }
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
            .section__subheading {
                font-size: 0.6rem;
                padding-left: 0;
            }
            .section__heading {
                font-size: 48px;
                line-height: 1;
                font-weight: 600;
            }
            .flowlist-wrap {
                width: 50%; //42%
                .flowlist .flowlist__item {
                    padding: 0.5em;
                    font-size: 18px;
                    line-height: 2.2rem; //1.8rem
                    // height: 72px; //美
                    text-align: center;
                    .en & {
                        padding: 1em;
                        line-height: 1.5;
                    }
                }
            }
        }
        .section {
            // margin: 180px 0;
            &.section1, &.section2 {
                margin: 0;
                min-height: 100%;
            }
            &.section-flow {
                background-color: #000;
                margin-top: 0;
                padding: 50px 0;
            }
            .section__inner {
                display: flex;
            }
        }

        .section__text.text-default {
            font-size: 18px;
            line-height: 1.67;
        }
        .rightlist__item {
            min-height: 22vw;
            &:nth-child(odd) {
                background-color: #87164d;
            }
            &:nth-child(even) {
                background-color: #e61673;
            }
        }

        .row.no-gutters .rightlist__item-inner {
            margin: 33% auto;
            font-weight: bold;
            .rightlist__heading {
                display: block;
                font-size: 48px;
                .en & {
                    font-size: 1.4rem;
                }
            }
            .section__text {
                font-size: 48px;
                .en & {
                    font-size: 1.2rem;
                    width: 100%;
                    margin: 1em auto;
                    line-height: 1.15;
                }
            }
        }
        .col-lg {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            &.col-lg {
                padding: 0;
            }
        }
    }
    .en #event-wrapper .wrap__inner {
        .flowlist-wrap .flowlist .flowlist__item, .section__text {
            line-height: 1.875;
            letter-spacing: 1px;
        }
    }
}

@media screen and (min-width: 1475px) {
    #event-wrapper {
        .section.section1 {
            .section__heading_lg {
                margin-top: 2rem;
            }
        }
    }
    .en #event-wrapper {
        .section.section1 .col-lg-10.offset-lg-2 {
            margin: 16% 12% 4%;
        }
        .row.no-gutters .rightlist__item-inner .section__text {
            width: 70%;
        }
        .col-md .col-lg-10.offset-lg-2 {
            margin: 25% 12% 4%;
        }
    }
}

@media screen and (max-width: 480px) {
  #event-wrapper .banner__infobox .banner__heading-en {
    font-size: 4.4rem;
    margin-left: -0.5rem;
  }
}
</style>
