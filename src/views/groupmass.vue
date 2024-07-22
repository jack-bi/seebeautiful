<template>
    <div id="masses-wrapper">
        <div id="mask"></div>
        <!-- block1 -->
        <div class="banner banner-masses">
            <div class="banner__infobox">
                <h1 class="masses-1">
                    <span class="banner__heading-en">{{$t('groupmass.text11')}}</span>
                    <span class="banner__heading-cht">{{$t('groupmass.text12')}}</span>
                </h1>
                <p class="banner__desc masses-2">
                    <span class="banner__desc-line">{{$t('groupmass.text13')}}</span>
                    <span class="banner__desc-line">{{$t('groupmass.text14')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text contact-3">
                <div class="banner__vtl-text__inner">
                    {{$t('groupmass.text1s')}}
                </div>
            </div>
        </div>

        <section class="section">
            <div class="wrap__inner wrap__inner--950 masses-3">
                <strong class="section__subheading">{{$t('groupmass.text21')}}</strong>
                <h2 class="section__heading section__heading-2">{{$t('groupmass.text22')}}</h2>
                <p class="section__text text-default text-ccc">
                    {{$t('groupmass.text23')}}
                </p>
            </div>
        </section>

        <div class="row no-gutters">
            <div class="col-md">
                <div class="section section1 section1-left masses-4">
                    <div>
                        <div class="section__word">
                            <div class="section-real__heading">{{$t('groupmass.text31')}}</div>
                            <p class="section-real__text">{{$t('groupmass.text32')}}</p>
                        </div>
                    </div>
                    <img class="section-logo__img" :src="`${$cdn}/image-base/masses/introImg_01.jpg`">
                </div>
            </div>
            <div class="col-md">
                <div class="section section1 section1-right masses-5">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="box-center-md">
                                <strong class="section__subheading">{{$t('groupmass.text33')}}</strong>
                                <h3 class="section__heading">{{$t('groupmass.text34')}}</h3>
                                <p class="section__text text-default text-ccc">
                                    {{$t('groupmass.text35')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="section section-affect">
            <div class="wrap__inner wrap__inner--950">
                <div class="box-center masses-6">
                    <strong class="section__subheading">{{$t('groupmass.text41')}}</strong>
                    <h2 class="section__heading">{{$t('groupmass.text42')}}</h2>
                </div>
                <ul class="circlelist masses-7">
                    <li class="circlelist__item">
                        <div class="circlelist__infobox">
                            <h3 class="circlelist__heading text-primary">{{$t('groupmass.text4a1')}}</h3>
                            <p class="section__text text-eee">
                                {{$t('groupmass.text4a2')}}
                            </p>
                        </div>
                    </li>
                    <li class="circlelist__item">
                        <div class="circlelist__infobox">
                            <h3 class="circlelist__heading text-primary">{{$t('groupmass.text4b1')}}</h3>
                            <p class="section__text text-eee">
                                {{$t('groupmass.text4b2')}}
                            </p>
                        </div>
                    </li>
                    <li class="circlelist__item">
                        <div class="circlelist__infobox">
                            <h3 class="circlelist__heading text-primary">{{$t('groupmass.text4c1')}}</h3>
                            <p class="section__text text-eee">
                                {{$t('groupmass.text4c2')}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section section-flow">
            <div class="wrap__inner">
                <div class="box-center-md masses-8">
                    <strong class="section__subheading">{{$t('groupmass.text51')}}</strong>
                    <h3 class="section__heading">{{$t('groupmass.text52')}}</h3>
                    <p class="section__text text-default text-eee">
                        {{$t('groupmass.text53')}}
                    </p>
                </div>
                <div class="flowlist-wrap text-eee masses-9">
                    <ol class="flowlist">
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a1')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a2')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a3')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a4')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a5')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a6')}}</li>
                        <li class="flowlist__item section__text">{{$t('groupmass.text5a7')}}</li>
                    </ol>
                    <p class="flowlist-wrap__info text-default">{{$t('groupmass.text5a8')}}</p>
                </div>
            </div>
        </section>

        <div class="row no-gutters">
            <div class="col-md">
                <div class="section section2 masses-10">
                    <img class="section-logo__img" :src="`${$cdn}/image-base/masses/introImg_02.jpg`">
                </div>
            </div>
            <div class="col-md order-md-first">
                <div class="section section2 masses-11">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-2">
                            <div class="box-center-md">
                                <strong class="section__subheading">{{$t('groupmass.text61')}}</strong>
                                <h3 class="section__heading">{{$t('groupmass.text62')}}</h3>
                                <p class="section__text text-default text-ccc">
                                    {{$t('groupmass.text63')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
            gsap.from(".masses-1",{
              scrollTrigger:{
                trigger: ".masses-1",
              },
              opacity: 0,
              duration: 2,
              delay: 1.2,
              ease: 'back'
            });
            gsap.from(".masses-2",{
              scrollTrigger:{
                trigger: ".masses-2",
              },
              opacity: 0,
              duration: 2,
              delay: 1.4,
              ease: 'back'
            });
            gsap.from(".masses-3",{
                scrollTrigger: {
                    trigger: ".masses-3",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.from(".masses-4", {
                scrollTrigger: {
                    trigger: ".masses-4",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -500,
                opacity: 0,
                duration: 1.4,
                delay: .2,
                ease: 'power2'
            });
            gsap.to(".masses-4", {
                scrollTrigger: {
                    trigger: ".masses-4",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                x: -500,
                opacity: 0,
                duration: .2,
            });
            gsap.from(".masses-5", {
                scrollTrigger: {
                    trigger: ".masses-5",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.to(".masses-5", {
                scrollTrigger: {
                    trigger: ".masses-5",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: .2,
            });
            gsap.from(".masses-6", {
                scrollTrigger: {
                    trigger: ".masses-6",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .2,
                ease: 'power4.easein'
            });
            gsap.to(".masses-6", {
                scrollTrigger: {
                    trigger: ".masses-6",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: .2
            });
            gsap.from(".masses-7", {
                scrollTrigger: {
                    trigger: ".masses-7",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: 2,
                delay: .5,
                ease: 'power4.easein'
            });
            gsap.to(".masses-7", {
                scrollTrigger: {
                    trigger: ".masses-7",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                x: -30,
                opacity: 0,
                duration: .2,
            });
            gsap.from(".masses-8", {
                scrollTrigger: {
                    trigger: ".masses-8",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 1,
                delay: .2,
                ease: "back",
            });
            gsap.to(".masses-8", {
                scrollTrigger: {
                    trigger: ".masses-8",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2,
            });
            gsap.from(".masses-9", {
                scrollTrigger: {
                    trigger: ".masses-9",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 1.2,
                delay: .2,
                ease: 'slow(0.5, 0.8, true)'
            });
            gsap.to(".masses-9", {
                scrollTrigger: {
                    trigger: ".masses-9",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2,
            });
            gsap.from(".masses-10", {
                scrollTrigger: {
                    trigger: ".masses-10",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 1,
                delay: .4,
                // ease: 'slow(0.5, 0.8, true)'
            });
            gsap.to(".masses-10", {
                scrollTrigger: {
                    trigger: ".masses-10",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2
            });
            gsap.from(".masses-11", {
                scrollTrigger: {
                    trigger: ".masses-11",
                    start: "top 75%",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: 1,
                // delay: 1.5,
                // ease: 'slow(0.5, 0.8, true)'
            });
            gsap.to(".masses-11", {
                scrollTrigger: {
                    trigger: ".masses-11",
                    start: "top bottom",
                    toggleActions: "restart",
                },
                opacity: 0,
                duration: .2
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

#masses-wrapper {
    #mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    .banner.banner-masses {
        position: relative;
        height: 100vh;
        background-size: cover;
        background-position: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-image: url(#{$base}/masses/banner.jpg);
        .banner__infobox {
            max-width: 1000px;
            padding: 60px;
            position: relative;
            text-align: left;
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
        // padding-right: 15px;
        // padding-left: 15px;
    }
    .col-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        padding: 0;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        &.no-gutters {
            margin: 0;
            color: #fff;
            background-color: #000;
            .rightlist__item-inner {
                font-size: 1.25rem;
            }
        }
        &.no-gutters-2 {
            margin-top: -6rem;
        }
    }
    .col-md {
        color: #fff;
        .col-lg-8 , .col-lg-10 {
            &.offset-lg-2 {
                text-align: left;
                margin: 20% 7%;
                .section__text {
                    font-size: 16px;
                    line-height: 1.5;
                    text-align: left;
                }
                .box-center-md .section__subheading {
                    display: flex;
                    width: 60vw;
                        line-height: 1.15;
                }
            }
        }
    }
    .section {
        .wrap__inner--950 {
            max-width: 950px;
            margin: 100px auto;
            padding: 0 15px;
            text-align: left;
            .en & {
                max-width: 1400px;
            }
            &.masses-3 {
                max-width: 950px;
            }
        }
        &.section1 {
            font-weight: 600;
            .section__word {
                position: absolute;
                margin: 33% 0;
                left: 0;
                right: 0;
                .en & {
                    width: 71%;
                    left: 15%;
                    text-align: left;
                    margin: 26% 0;
                }
                >div {
                    font-size: 48px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    white-space: nowrap;
                }
                > p {
                    font-size: 18px;
                    line-height: 3rem;
                    .en & {
                        line-height: 1.5;
                        text-align: left;
                        margin-left: 0.3rem;
                    }
                }
            }
            .section__heading_lg {
                font-size: 2.5rem;
                margin-bottom: 1.5rem;
            }
            .col-lg-10.offset-lg-2 {
                margin: 10% 7%;
            }
        }
        &.section-flow {
            padding: 5rem 0;
        }
    }
    .wrap__inner {
        color: #fff;
        margin: 0 auto;
        max-width: 1400px;
        .row {
            display: flex;
            flex-wrap: wrap;
        }
        .section__subheading {
            font-size: 16px;
        }
        .section__text {
            font-size: 16px;
            line-height: 1.5;
        }
        .box-center-md {
            text-align: left;
            width: 90%;
            margin: auto;
        }
    }
    .section__heading {
        font-size: 34px;
        line-height: 1.45;
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
                &:nth-child(6) {
                    color: #e61673;
                    background-color: #e5e5e5;
                }
                &:nth-child(7) {
                    color: #e61673;
                    background-color: #fff;
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
    .box-center {
        display: table;
        margin: 0 auto;
        text-align: left;
        width: 70%;
    }
    .circlelist__item {
        position: relative;
        background: rgba(204,204,204,.2);
        border-radius: 50%;
        margin: 0 auto -10%;
        max-width: 350px;
        &:before {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }
    .circlelist__infobox {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 16.667%;
        .circlelist__heading {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 0.85em;
            text-align: center;
            color: #e61673;
            margin-top: 0.25rem;
        }
    }
}

//品美
#masses-wrapper{
  .section__text.text-default.text-ccc{
      color: #ccc;
  }
  .section__text.text-eee, .flowlist-wrap.text-eee{
    color: #eee;
    .en & {
        font-size: 13px;
        line-height: 1.4;
    }
  }
}

// // EN
// body{
//   &.en{
//     @media screen and (min-width: 768px){
//        #masses-wrapper .wrap__inner {
//         .flowlist-wrap .flowlist .flowlist__item, .section__text {
//             line-height: 1.875;
//             // padding: 1em;
//         }
//       }
//     }
//   }
// }

@media screen and (min-width: 768px) {
    #masses-wrapper {
        .banner__vtl-text {
            font-size: 16px;
            bottom: -50px;
            padding-top: 100px;
        }
        .col-md {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            padding: 0 !important;
            &.order-md-first {
                -webkit-box-ordinal-group: 0;
                -ms-flex-order: -1;
                order: -1;
            }
        }
        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 46.8%;
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
                padding-left: 0;
            }
            .box-center-md {
                width: 36%;
                .en & {
                    width: 38%;
                }
            }
            .section__text {
                font-size: 14px;
                line-height: 1.5;
                .en &{
                    font-size: 14px;
                    line-height: 1.5;
                }
            }
            .flowlist-wrap {
                width: 42%;
                .flowlist .flowlist__item {
                    font-size: 18px;
                    text-align: center;
                    padding: 0.5em;
                    line-height: 2.2rem;
                    &:nth-child(3), &:nth-child(4){
                        .en & {
                            padding: 0.5em 2em;
                        }
                    }
                    .en & {
                        line-height: 1.875;
                    }
                }
            }
        }
        .box-center {
            width: auto;
        }
        .section {
            .section__subheading {
                font-size: 16px;
                font-weight: 300;
            }
            .col-lg-8.offset-lg-2 {
                margin: 5% auto auto 10%;
                width: 80%;
                .section__heading {
                    font-size: 1rem;
                    line-height: 0.5;
                }
            }
            .col-lg-10.offset-lg-2 {
                margin: 14% auto auto 33.2%;
                width: 50%;
                .en & {
                    margin: 5% auto auto 10%;
                    width: 80%;
                }
            }

            &.section-flow {
                background-color: #a40b5d;
                margin-top: 0;
                padding: 150px 0;
            }
            .section__inner {
                display: flex;
            }
            .wrap__inner--950 {
                margin: 180px auto;
            }
        }
        .col-md .col-lg-8.offset-lg-2 .section__text, .col-md .col-lg-10.offset-lg-2 .section__text {
            font-size: 18px;
            line-height: 1.67;
            font-weight: 300;
        }
        .rightlist__item {
            min-height: 22vw;
            &:nth-child(odd) {
                background-color: #87164d;
            }
            &:nth-child(even) {
                background-color: #e61673;
            }
            .rightlist__item-inner {
                margin: 33% auto;
            }
        }
        .col-lg {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
        }

        .circlelist {
            display: flex;
            margin-bottom: 100px;
            padding: 0 2.5%;
        }
        .circlelist__item {
            flex-grow: 1;
            margin: 0 -2.5%;
            max-width: 360px;
            .en & {
                max-width: 500px;
            }
        }
    }
}

@media screen and (min-width: 1420px) {
    #masses-wrapper {
        .section {
            .section__subheading {
                font-size: 16px;
                font-weight: 300;
            }
            .col-lg-8.offset-lg-2 {
                margin: 15% auto auto 16.6%;
                width: 48%;
                .en & {
                    width: 71%;
                }
            }
            .col-lg-10.offset-lg-2 {
                margin: 14% auto auto 33.2%;
                width: 50%;
                .en & {
                    margin: 5.5% auto auto 33.2%;
                    width: 50%;
                }
            }
        }
        .section.section1 {
            .section__word {
                position: absolute;
                margin: 40% 10%;
                .en & {
                    margin: 28% 11%;
                    left: 0;
                }
                >div {
                    font-size: 2.5rem;
                }
                .section-real__text {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 1.5;
                    width: auto;
                    .en & {
                        margin-top: 0.5rem;
                        margin-left: 0.2rem;
                    }
                }
            }
        }

        .wrap__inner .section__text {
            font-size: 16px;
            line-height: 1rem;
            .en & {
                font-size: 16px;
                line-height: 1rem;
            }
        }
    }
}
@media screen and (min-width: 1475px) {
    #masses-wrapper {
        .section {
            .col-lg-8.offset-lg-2 {
                margin: 18% auto auto 16.6%;
            }
            .col-lg-10.offset-lg-2 {
                margin: 20% auto auto 33.2%;
                .en & {
                    margin: 13% auto auto 33.2%;
                    width: 50%;
                }
            }
            &.section.section1 {
                .section__word {
                    position: absolute;
                    margin: 41% 11%;
                    .en & {
                        width: 56%;
                        left: 10.3%;
                    }
                }
            }
        }
        .section.section1 .section__word .section-real__text {
            .en & {
                margin-top: 0.5rem;
            }
        }
    }
}
@media screen and (min-width: 1680px) {
    #masses-wrapper {
        .section__heading {
            font-size: 48px !important;
            line-height: 1.36 !important;
            margin-top: 30px;
            margin-bottom: 35px;
            &.section__heading-2 {
                .en & {
                    width: 590px;
                }
            }
        }
    }

}

@media screen and (min-width: 1440px) and (max-width: 1440px) {
    #masses-wrapper .section.section1 .col-lg-10.offset-lg-2, #masses-wrapper .section.section2 .col-lg-10.offset-lg-2 {
        margin: 15% auto auto 33.2%;
        width: 50%;
    }
}

@media screen and (max-width: 380px) {
    .en #masses-wrapper .section.section1 .section__word {
        width: 78%;
        left: 11%;
    }
}

</style>
