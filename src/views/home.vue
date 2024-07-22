<template>
    <div id="home-wrapper">
        <div id="mask"></div>
        <!-- block1 -->
        <div class="banner g-banner">
            <div class="banner__infobox">
                <h1 class="g-title">
                    <span class="banner__heading-en">{{$t('home.text11')}}</span>
                    <span class="banner__heading-cht" v-html="$t(`home.text12`)"></span>
                </h1>
                <p class="banner__desc g-subtitle">
                    <span class="banner__desc-line">{{$t('home.text13')}}</span>
                    <span class="banner__desc-line">{{$t('home.text14')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text g-banner-slide">
                <div class="banner__vtl-text__inner">
                    {{$t('home.text1s')}}
                </div>
            </div>
        </div>

        <!-- block2 -->
        <section class="section section-promo" id="block2">
            <div class="wrap__inner wrap__inner--1200">
                <div class="box-center">
                    <h3 class="section__subheading g-fadeinLeft">{{$t('home.text21')}}</h3>
                    <h2 class="section__heading g-fadeinLeft">{{$t('home.text22')}}</h2>
                </div>
                <ul class="promolist">

                    <li class="promolist__item g-fadein1">
                        <div class="promolist__heading text-secondary">
                            <span class="promolist__heading-en">{{$t('home.text2a1')}}</span>
                            <span class="promolist__heading-cht">{{$t('home.text2a2')}}</span>
                        </div>
                        <p class="section__text text-default">{{$t('home.text2a3')}}</p>
                    </li>
                    <li class="promolist__item g-fadein2">
                        <div class="promolist__heading text-secondary">
                            <span class="promolist__heading-en">{{$t('home.text2b1')}}</span>
                            <span class="promolist__heading-cht">{{$t('home.text2b2')}}</span>
                        </div>
                        <p class="section__text text-default">{{$t('home.text2b3')}}</p>
                    </li>
                    <li class="promolist__item g-fadein3">
                        <div class="promolist__heading text-secondary">
                            <span class="promolist__heading-en">{{$t('home.text2c1')}}</span>
                            <span class="promolist__heading-cht">{{$t('home.text2c2')}}</span>
                        </div>
                        <p class="section__text text-default">{{$t('home.text2c3')}}</p>
                    </li>
                </ul>
            </div>
            <div class="section__vtl-text g-fadeinSlide">
                <p>{{$t('home.text2s')}}</p>
            </div>
        </section>

        <!-- block3 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md" id="block3">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="section section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/home/introImg_01.jpg`" alt="" id="g-pic3">
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="section section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-1">
                                    <div class="section__subheading text-default " id="g-text31">{{$t('home.text31')}}</div>
                                    <div class="section__heading" id="g-text32">
                                        <div v-html="$t(`home.text32`)"></div>
                                        <div>{{$t('home.text33')}}</div>
                                    </div>
                                    <div class="section__text text-default" id="g-text33">
                                        <p v-html="$t(`home.text34`)"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text3s">
                            <div>{{$t('home.text3s')}}</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- block4 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-swap g-block" id="block4">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="section section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/home/introImg_02.jpg`" alt="" id="g-pic4">
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="section section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-1">
                                    <div class="section__subheading text-default" id="g-text41">{{$t('home.text41')}}</div>
                                    <div class="section__heading" id="g-text42">
                                        <div v-html="$t(`home.text42`)"></div>
                                        <div>{{$t('home.text43')}}</div>
                                    </div>
                                    <div class="section__text text-default" id="g-text43">
                                        <p v-html="$t(`home.text44`)"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text4s">
                            <div>{{$t('home.text4s')}}</div>
                        </div>
                    </section>
                </div>

            </div>
        </div>

        <!-- block5 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-sd" id="block5">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="section section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/home/introImg_03.jpg`" alt="" id="g-pic5">
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="section section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-1">
                                    <div class="section__subheading text-default" id="g-text51">{{$t('home.text51')}}</div>
                                    <div class="section__heading" id="g-text52" v-html="$t(`home.text52`)">
                                    </div>
                                    <div class="section__text text-default" id="g-text53">
                                        <p>{{$t('home.text53')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text5s">
                            <div>{{$t('home.text5s')}}</div><!-- fadein-right -->
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- block6 -->
        <section class="section section-plan" id="block6">
            <div class="wrap__inner" id="block6-title">
                <div class="box-center">
                    <h3 class="section__subheading subtext">{{$t('home.text61')}}</h3>
                    <h2 class="section__heading subtext" v-html="$t(`home.text62`)"></h2>
                </div>
            </div>
            <div class="planlist">
                <div class="row no-gutters">
                    <div class="col-md-6 col-lg" id="g-61">
                        <div class="block6-pic pic1"></div>
                        <div class="pic-mask" id="mask-block6-1"></div>
                        <div class="planlist__item planlist__item-buzz">
                            <div class="planlist__infobox" id="g-61-txt">
                                <div class="section__subheading planlist__subheading">{{$t('home.text6a1')}}</div>
                                <div class="section__heading planlist__heading">{{$t('home.text6a2')}}</div>
                                <div class="section__text text-default planlist__desc" v-html="$t(`home.text6a3`)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg" id="g-62">
                        <div class="block6-pic pic2"></div>
                        <div class="pic-mask" id="mask-block6-2"></div>
                        <div class="planlist__item planlist__item-buzz">
                            <div class="planlist__infobox" id="g-62-txt">
                                <div class="section__subheading planlist__subheading">{{$t('home.text6b1')}}</div>
                                <div class="section__heading planlist__heading">{{$t('home.text6b2')}}</div>
                                <div class="section__text text-default planlist__desc" v-html="$t(`home.text6b3`)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg" id="g-63">
                        <div class="block6-pic pic3"></div>
                        <div class="pic-mask" id="mask-block6-3"></div>
                        <div class="planlist__item planlist__item-buzz">
                            <div class="planlist__infobox" id="g-63-txt">
                                <div class="section__subheading planlist__subheading">{{$t('home.text6c1')}}</div>
                                <div class="section__heading planlist__heading">{{$t('home.text6c2')}}</div>
                                <div class="section__text text-default planlist__desc" v-html="$t(`home.text6c3`)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg" id="g-64">
                        <div class="block6-pic pic4"></div>
                        <div class="pic-mask" id="mask-block6-4"></div>
                        <div class="planlist__item planlist__item-buzz">
                            <div class="planlist__infobox" id="g-64-txt">
                                <div class="section__subheading planlist__subheading">{{$t('home.text6d1')}}</div>
                                <div class="section__heading planlist__heading">{{$t('home.text6d2')}}</div>
                                <div class="section__text text-default planlist__desc" v-html="$t(`home.text6d3`)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- block7 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-swap g-block" id="block7">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="section section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/home/introImg_04.jpg`" alt="" id="g-pic7">
                        </div>
                        <div class="pic-mask" id="mask-block7"></div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="section section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-1">
                                    <div class="section__subheading text-default" id="g-text71">{{$t('home.text71')}}</div>
                                    <div class="section__heading" id="g-text72" v-html="$t(`home.text72`)">
                                    </div>
                                    <div class="section__text text-default" id="g-text73">
                                        <p>{{$t('home.text73')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text7s">
                            <div>{{$t('home.text7s')}}</div>
                        </div>
                    </section>
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

export default {
    data() {
        return {

        }
    },
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
        doToast() {
            common.Util.toast('toast...')
        },
        doAlert() {
            /*
            common.Util == this.$util，你可以直接在 vue template 裡面使用 $util
            因為使用了 src\plugin\index.js
            */
            // common.Util.alert('alert...')
            this.$util.alert('alert...')
        },
        doAnimation() {
            gsap.registerPlugin(ScrollTrigger);

            // animate1
            gsap.from(".g-banner",{
              scrollTrigger:{
                trigger: ".g-banner", //可不同元件 #block2
              },
              // x: 0,
              // y: 0,
              // width: 0,
              // height: 0,
              opacity: 0,
              duration: 2,
              // ease: 'back'
            });
            gsap.from(".g-title",{
              scrollTrigger:{
                trigger: ".g-title", //可不同元件 #block2
              },
              opacity: 0,
              duration: 2,
              delay: 1.2,
              ease: 'back'
            });
            gsap.from(".g-subtitle",{
              opacity: 0,
              duration: 2,
              delay: 1.8,
              ease: 'back'
            });
            gsap.from(".g-banner-slide",{
              scrollTrigger:{
                trigger: ".g-banner-slide",
              },
              y: -40,
              opacity: 0,
              delay: 2.4,
              duration: 1.2
            });

            // animate2
            gsap.from(".g-fadeinLeft",{
              scrollTrigger:{
                trigger: "#block2", //可不同元件
                start: "top 75%",
                // endTrigger: ".g-fadeinLeft", //可不同元件
                // end: "50% 80%",
                toggleActions: "restart", // reverse
                // markers: true
              },
              x: -30,
              opacity: 0,
              duration: .6
            });
            gsap.to(".g-fadeinLeft",{
              scrollTrigger:{
                trigger: "#block2", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from(".g-fadein1",{
              scrollTrigger:{
                trigger: ".g-fadein1", //#block2
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              delay: .2,
              opacity: 0,
              duration: 1
            });
            gsap.to(".g-fadein1",{
              scrollTrigger:{
                trigger: ".g-fadein1", //#block2
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .2
            });
            gsap.from(".g-fadein2",{
              scrollTrigger:{
                trigger: ".g-fadein2", //#block2
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              delay: .4,
              opacity: 0,
              duration: 1
            });
            gsap.to(".g-fadein2",{
              scrollTrigger:{
                trigger: ".g-fadein2", //#block2
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .2
            });
            gsap.from(".g-fadein3",{
              scrollTrigger:{
                trigger: ".g-fadein3", //#block2
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              delay: .6,
              opacity: 0,
              duration: 1
            });
            gsap.to(".g-fadein3",{
              scrollTrigger:{
                trigger: ".g-fadein3", //#block2
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .2
            });
            gsap.from(".g-fadeinSlide",{
              scrollTrigger:{
                trigger: "#block2",
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              y: -10,
              opacity: 0,
              duration: 1.2
            });
            gsap.to(".g-fadeinSlide",{
              scrollTrigger:{
                trigger: "#block2",
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              y: -10,
              opacity: 0,
              duration: .2
            });

            // animate3
            gsap.from("#g-pic3",{
              scrollTrigger:{
                trigger: "#g-pic3",
                start: "top 60%",
                toggleActions: "restart",
                // end: "-=500 50%",
                // markers: true
              },
              x: -1000,
              // opacity: 1,
              duration: .8,
            });
            gsap.to("#g-pic3",{
              scrollTrigger:{
                trigger: "#block3",
                start: "top bottom",
                toggleActions: "restart",
                // end: "-=500 50%",
                // markers: true
              },
              x: -1000,
              // opacity: 0,
              duration: .2,
              // ease: 'back'
            });
            gsap.from("#g-text31",{
              scrollTrigger:{
                trigger: "#block3", //可不同元件
                start: "top 60%",
                toggleActions: "restart", // reverse
              },
              x: -30,
              opacity: 0,
              delay: .8,
              duration: .6
            });
            gsap.from("#g-text32",{
              scrollTrigger:{
                trigger: "#block3", //可不同元件
                start: "top 60%",
                toggleActions: "restart", // reverse
              },
              x: -60,
              opacity: 0,
              delay: .8,
              duration: 1
            });
            gsap.from("#g-text33",{
              scrollTrigger:{
                trigger: "#block3", //可不同元件
                start: "top 60%",
                toggleActions: "restart", // reverse
              },
              x: -70,
              opacity: 0,
              delay: .8,
              duration: 1.4
            });
            gsap.to("#g-text31",{
              scrollTrigger:{
                trigger: "#block3",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text32",{
              scrollTrigger:{
                trigger: "#block3",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text33",{
              scrollTrigger:{
                trigger: "#block3",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.from("#g-text3s",{
              scrollTrigger:{
                trigger: "#g-text3s",
                // trigger: "#block3",
                // start: "top 75%",
                toggleActions: "restart",
              },
              // y: -10,
              height: 0,
              opacity: 0,
              delay: 1,
              duration: 1.2
            });

            // animate4
            gsap.from("#g-pic4",{
              scrollTrigger:{
                trigger: "#g-pic4",
                start: "top 60%",
                toggleActions: "restart",
              },
              // x: -1000,
              // width: 0,
              opacity: 0,
              delay: .2,
              duration: 1.2,
            });
            gsap.to("#g-pic4",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top bottom",
                toggleActions: "restart",
              },
              // x: -1000,
              // width: 0,
              opacity: 0,
              duration: .2,
            });
            gsap.from("#g-text41",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              delay: .8,
              duration: .6
            });
            gsap.from("#g-text42",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -60,
              opacity: 0,
              delay: .8,
              duration: 1
            });
            gsap.from("#g-text43",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -70,
              opacity: 0,
              delay: .8,
              duration: 1.4
            });
            gsap.to("#g-text41",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text42",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text43",{
              scrollTrigger:{
                trigger: "#block4",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.from("#g-text4s",{
              scrollTrigger:{
                trigger: "#g-text4s",
                toggleActions: "restart",
              },
              // y: -10,
              height: 0,
              opacity: 0,
              delay: 1,
              duration: 1.2
            });

            // animate5
            gsap.from("#g-pic5",{
              scrollTrigger:{
                trigger: "#g-pic5",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -1000,
              duration: .8,
            });
            gsap.to("#g-pic5",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -1000,
              duration: .2,
            });
            gsap.from("#g-text51",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              delay: .8,
              duration: .6
            });
            gsap.from("#g-text52",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -60,
              opacity: 0,
              delay: .8,
              duration: 1
            });
            gsap.from("#g-text53",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -70,
              opacity: 0,
              delay: .8,
              duration: 1.4
            });
            gsap.to("#g-text51",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text52",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text53",{
              scrollTrigger:{
                trigger: "#block5",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.from("#g-text5s",{
              scrollTrigger:{
                trigger: "#g-text5s",
                toggleActions: "restart",
              },
              // y: -10,
              height: 0,
              opacity: 0,
              delay: 1,
              duration: 1.2
            });

            // animate6
            gsap.from("#block6-title",{
              scrollTrigger:{
                trigger: "#block6", //可不同元件
                start: "top 75%",
                // endTrigger: ".g-fadeinLeft", //可不同元件
                // end: "50% 80%",
                toggleActions: "restart", // reverse
                // markers: true
              },
              x: -30,
              opacity: 0,
              duration: .6
            });
            gsap.to("#block6-title",{
              scrollTrigger:{
                trigger: "#block6", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              x: -30,
              opacity: 0,
              duration: .2
            });

            gsap.from("#g-61-txt",{
              scrollTrigger:{
                trigger: "#g-61",
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
              delay: .4
            });
            gsap.to("#g-61-txt",{
              scrollTrigger:{
                trigger: "#g-61", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
            });
            gsap.from("#g-62-txt",{
              scrollTrigger:{
                trigger: "#g-62",
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
              delay: .4
            });
            gsap.to("#g-62-txt",{
              scrollTrigger:{
                trigger: "#g-62", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
            });
            gsap.from("#g-63-txt",{
              scrollTrigger:{
                trigger: "#g-63",
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
              delay: .4
            });
            gsap.to("#g-63-txt",{
              scrollTrigger:{
                trigger: "#g-63", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
            });
            gsap.from("#g-64-txt",{
              scrollTrigger:{
                trigger: "#g-64",
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
              delay: .4
            });
            gsap.to("#g-64-txt",{
              scrollTrigger:{
                trigger: "#g-64", //可不同元件
                start: "top bottom",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
            });
            
            // animate6
            gsap.from("#mask-block6-1",{
              scrollTrigger:{
                trigger: "#g-61", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              left: 0,
              duration: 2,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#mask-block6-2",{
              scrollTrigger:{
                trigger: "#g-62", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              left: 0,
              duration: 2,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#mask-block6-3",{
              scrollTrigger:{
                trigger: "#g-63", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              left: 0,
              duration: 2,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#mask-block6-4",{
              scrollTrigger:{
                trigger: "#g-64", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              left: 0,
              duration: 2,
              delay: .2,
              ease: "power1.easein",
            });

            // animate7
            gsap.from("#mask-block7",{
              scrollTrigger:{
                trigger: "#block7", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              // width: 0,
              left: 0,
              duration: 1.6,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#g-pic7",{
              scrollTrigger:{
                trigger: "#block7", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              opacity: 0,
              duration: .1,
              // delay: 1,
            });

            gsap.from("#g-text71",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              delay: .2,
              duration: .6
            });
            gsap.from("#g-text72",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -60,
              opacity: 0,
              delay: .2,
              duration: 1
            });
            gsap.from("#g-text73",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top 60%",
                toggleActions: "restart",
              },
              x: -70,
              opacity: 0,
              delay: .2,
              duration: 1.4
            });
            gsap.to("#g-text71",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text72",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.to("#g-text73",{
              scrollTrigger:{
                trigger: "#block7",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
            });
            gsap.from("#g-text7s",{
              scrollTrigger:{
                trigger: "#g-text7s",
                toggleActions: "restart",
              },
              // y: +-10,
              height: 0,
              opacity: 0,
              delay: .4,
              duration: 1.2
            });

            gsap.to("#mask",{
                top: "100vh",
                height: 0,
                duration: 1.6,
                ease: "expo.out",
                delay: .5,
                onComplete() {
                    $('#mask').remove()
                }
            })
        }
    },
    mounted() {
        this.doAnimation();
    },
    created() {
    },
    destroyed() {
        //好像沒清也沒問題(?)
        const triggers = ScrollTrigger.getAll();
        triggers.forEach((trigger) => {
        // 把 ScrollTrigger 綁定的動畫消除
          trigger.kill();
        });
        // 消除綁定 MatchMedia();
        // ScrollTrigger.clearMatchMedia();
    }
}
</script>

<style lang="scss">
$base: 'https://seebeautymedia.com/seebeautymedia/image-base';

#home-wrapper {
    #mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    .pic-mask {
      position: absolute;
      background-color: #000;
      display: block;
      top: 0;
      bottom: 0;
      left: 100vw;
      right: 0;
    }
    background: #222;
    padding: 0;
    // min-height: 50vh;
    flex: 1 0 auto;
    // user-select: none; //美

    // block1
    .banner {
      position: relative;
      height: 100vh;
      background-size: cover;
      background-position: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-image: url(#{$base}/home/banner.jpg);
      .banner__infobox {
          max-width: 1000px;
          padding: 60px;
          position: relative;
          h1 {
            margin-bottom: 0;
            .en & {
      				margin-top: 5rem;
            }
            .banner__heading-en, .banner__heading-cht {
              text-align: left;
              color: #eee;
              font-weight: bold;
              margin-bottom: 10px;
              display: table;
              animation: fadeIn 1s .45s both;
            }
            .banner__heading-en {
                font-size: 82px;
            }
            .banner__heading-cht {
                font-size: 70px;
                line-height: 1.5;
                .en & {
          					line-height: 1.4;
                }
            }
          }
          >p {
            margin-top: 0;
            text-align: left;
          }
          .banner__desc span {
              font-size: 24px;
              line-height: 1.5rem;
              font-weight: bold;
              .en &{
                display: initial;
              }
              &:last-child:before {
                  content: '';
              }
          }
      }
      .banner__vtl-text {
          color: #fff;
          font-size: 16px;
          position: absolute;
          left: 0;
          bottom: -50px; //0
          padding-top: 100px;
          transform: rotate(-90deg);
          transform-origin: left top;
          font-weight: 300;
          // letter-spacing: .05em;
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
    }
    // block2
    .section-promo {
      position: relative;
      &:before{
        content: 'BORN TO LEAD';
        color: #555;
        opacity: .2;
        font-size: 280px;
        position: absolute;
        font-weight: bold;
        width: 3em;
        line-height: .9;
        top: -177px; //-180px
        right: 0;
        pointer-events: none;
        text-align: left;
        // .en & {
        //   font-size: 340px;
        //   right: -50px;
        //   top: -182px;
        // }
      }
      .wrap__inner{ //.wrap__inner--1200
        padding: 0 15px;
        max-width: 1200px;
        margin: 0 auto;
        .box-center {
            display: table;
            margin: 0 auto;
            .section__subheading { //h3
                display: table;
                font-weight: normal;
                margin-bottom: 2em;
                font-size: 16px;
                color: #eee;
            }
            .section__heading { //h2
                margin-bottom: 90px;
                font-size: 48px; //34px
                color: #eee;
                line-height: 1.45;
                font-weight: bold;
                display: block;
            }
        }
        .promolist{ //ul
          display: flex;
          .promolist__item { //li
              width: 33.333%;
              // margin: 0 10px;
              margin-left: 50px;
              margin-right: 50px;
              border-left: 1px solid #e61673; //#cc0000
              padding-left: 28px;
              z-index: 2;
              .promolist__heading { //div
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 28px;
                  display: table;
                  padding-right: 0.5em;
                  .promolist__heading-en, .promolist__heading-cht {
                      display: table;
                      font-size: 24px;
                      font-weight: bold;
                      color: #e61673;
                      line-height: 1.25;
                  }
              }
              .section__text { //p
                font-size: 16px; //18px
                line-height: 1.67;
                color: #ccc;
                text-align: left;
                margin-bottom: 0; //important
              }
          }
        }
        &.wrap__inner--1200 .box-center {
          .en & {
            width: 905px;
          }
        }
      }
      .section__vtl-text {
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-90deg) translateX(-50%);
        transform-origin: left top;
        font-size: 14px;
        padding-top: 18px;
        font-weight: 300;
        color: #ccc;
      }
    }
    // block3, block5 (block4:swap)
    .bg-primary{
      position: relative;
      background: #a40b5d;
      .no-gutters{
        margin-right: 0;
        margin-left: 0;
        //.row
        display: flex;
        flex-wrap: wrap;
        .col-md{
          padding-right: 0;
          padding-left: 0;

          .section1{
            position: relative;
            padding: 100px 0;
            height: 100%;
            // min-height: 46.875vw;
            margin: 0;

            &:before {
                content: '';
                background: #222;
                display: block;
                width: 50%;
                height: 100%;
                position: absolute;
                z-index: 0;
                top: 0;
                bottom: 0;
            }
            .section-img{
              position: relative;
              background: #000;
            }
          }
          .section2{
            height: 100%;
            margin: 0;
            .section__inner {
                width: 100%;
                padding: 0 15px;
                max-width: 76%; //700px 64%
                color: #fff;
                text-align: left;
                display: flex;
                height: 100%;
                align-items: center;
                .row {
                  display: flex;
                  flex-wrap: wrap;
                  // margin-right: -15px;
                  // margin-left: -15px;
                  .section__subheading{
                    font-size: 16px;
                    color: #ccc;
                    margin-bottom: 2em;
                    line-height: 26px;
                  }
                  .section__heading{
                    font-size: 48px;
                    font-weight: bold;
                    line-height: 1.38;
                    // >div:first-child {
                    //   white-space: nowrap;
                    // }
                  }
                  .section__text{
                    font-size: 18px;
                    color: #ccc;
                    line-height: 1.67;
                  }
                }
            }
          }
        }
      }
      .section__vtl-text{
        display: block;
        position: absolute;
        font-size: 14px;
        font-weight: 300;
        color: #ccc;

        padding-top: 0;
        top: 50%;
        left: auto;
        right: 0;
        padding-top: 18px;
        padding-bottom: 100px;
        transform-origin: right bottom;
        transform: rotate(-90deg) translateX(150%);
      }
      //反方向
      &.bg-primary-swap{
        background: #000;
        .no-gutters{
          flex-direction: row-reverse;
          .section1{
            &:before {
              right: 0;
            }
          }
          .section2{
            .section__inner{
              margin: auto;
            }
            .section__vtl-text{
              left: 0;
              right: auto;
              padding-bottom: 40px; //0
            }
          }
        }
      } //block4 end
      &#block7{
        background: #a40b5d;
        .no-gutters{
          .section1{
            padding: 0;
            .pic-mask { //遮罩animate
                position: absolute;
                background: #000;
                display: block;
                top: 0;
                bottom: 0;
                left: 100vw; //0
                right: 0;
            }
          }
          .section2{
            .section__vtl-text{
              padding-bottom: 100px;
            }
          }
        }
      }
    }

    //.section(block2,6)
    .section{
      margin: 100px 0;
      &.section-plan {
        margin-bottom: 0;
      }
      &#block2 {
        margin: 135px 0;
      }
    }
    // block6
    .section-plan{
      .wrap__inner{ //title
        margin: 0 auto;
        padding: 0 15px;
        max-width: 1400px;
        .box-center{
          display: table;
          margin: 0 auto;
          h3{
            font-size: 16px;
            font-weight: normal;
          }
          h2{
            font-size: 48px; //美
            margin-bottom: 30px;
            line-height: 1.45;
          }
          .subtext{
            text-align: left;
            color: #eee;
          }
        }
      }
      .planlist{ // 4pic
        margin-top: 60px;
        .no-gutters {
          margin-right: 0;
          margin-left: 0;
          // .row
          display: flex;
          flex-wrap: wrap;
          .col-md-6{
            position: relative;
            background: #000;
            transition: all 0.2s;
            &:hover {
              filter: brightness(1.25);
            }
            .block6-pic{
              position: absolute;
              width: 100%; //important
              background-size: cover;
              display: block;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              &.pic1{
                background-image: url(#{$base}/home/menu_img_01.jpg);
              }
              &.pic2{
                background-image: url(#{$base}/home/menu_img_02.jpg);
              }
              &.pic3{
                background-image: url(#{$base}/home/menu_img_03.jpg);
              }
              &.pic4{
                background-image: url(#{$base}/home/menu_img_04.jpg);
              }
            }
            .planlist__item {
              width: 100%;
              position: relative;
              background: no-repeat 50%;
              background-size: cover;
              &:after { //靠他把圖片撐大
                  content: '';
                  padding-top: 145.833%;
                  display: block;
              }
              .planlist__infobox {
                position: absolute;
                width: fit-content;
                text-align: left;
                bottom: 12%;
                left: 50%;
                transform: translateX(-50%);
                .section__subheading{
                  color: #eee;
                  font-size: 16px;
                  margin-bottom: 5px;
                }
                .section__heading{
                  color: #eee;
                  font-size: 34px;
                  margin-bottom: 5px;
                  line-height: 1.45;
                  font-weight: bold;
                  display: block;
                }
                .section__text{
                  color: #ccc;
                  white-space: nowrap;
                  margin-bottom: 1.25em;
                  font-size: 16px;
                  line-height: 1.875;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1440px){
      .bg-primary{
        .section__vtl-text {
          padding-top: 0;
          padding-bottom: 18px;
        }
        .no-gutters .col-md .section2 .section__inner .row {
          .offset-lg-1 {
              flex: 0 0 100%;
              max-width: 100%;
          }
          .section__subheading {
            margin-top: 1em;
          }
        }
        &.bg-primary-swap{
          .no-gutters .no-gutters .section2 .section__vtl-text{
            padding-bottom: 80px;
          }
        }
      }
    }
    @media screen and (max-width: 1024px){
      // block1
      .banner {
        .banner__infobox {
          padding-left: 98px;
          h1{
            .banner__heading-en {
              font-size: 70px;
              width: 110%;
            }
            .banner__heading-cht {
              font-size: 24px;
              .en & {
                font-size: 20px;
              }
            }
          }
          .banner__desc span {
            font-size: 16px;
            line-height: 1.5;
            font-weight: 300;
            &:last-child:before {
              content: '，';
              .en & {
                content: '';
              }
            }
          }
        }
        .banner__vtl-text {
            font-size: 14px;
            bottom: 30px; //0
            padding-top: 18px;
        }
      }
      // block2
      .section-promo {
        margin: 100px 0;
        &:before {
          content: '';
        }
        .wrap__inner{ //.wrap__inner--1200
          .box-center {
            .section__heading {
                text-align: left;
            }
          }
          .promolist{ //ul
            flex-direction: column;
            .promolist__item { //li
              width: 90%; //100%
              margin-left: 0;
              margin-right: 0;
              &:not(:last-child) {
                margin-bottom: 45px;
              }
              .section__text { //p
                line-height: 1.875;
                color: #ccc;
              }
            }
          }
        }
        .section__vtl-text {
            display: none;
        }
      }
      // block3
      .bg-primary{
        .no-gutters{
          .col-md{
            .section1{
              padding: 0;
              margin-right: 15px;
              &:before {
                  width: 15px; //50%
                  height: auto;
                  bottom: 50%;
                  right: -15px;
              }
            }
            .section2{
              padding: 30px 0;
              margin-bottom: 100px;
              .section__inner {
                max-width: 92%;
                .row {
                  .section__heading{
                    font-size: 34px;
                    margin-bottom: 30px;
                    line-height: 1.45;
                  }
                  .offset-lg-1 {
                      flex: auto;
                  }
                  .section__subheading {
                    margin-top: 1em;
                  }
                  .section__text{
                    font-size: 16px;
                  }
                }
              }

            }
          }
        }
        .section__vtl-text{
          display: none;
        }
        //反方向
        &.bg-primary-swap{
          background: #000;
          .no-gutters{
            flex-direction: row-reverse;
            .section1{
              &:before {
                background: #a40b5d;
                right: auto;
                left: 0; //-15px
              }
              .section-img{
                left: 15px;
              }
            }
            .section2{
              .section__inner{
                margin: auto;
              }
              .section__vtl-text{
                left: 0;
                right: auto;
                padding-bottom: 0;
              }
            }
          }
        } //block4
        &.bg-primary-sd{
          .no-gutters .col-md .section1{
            &:before {
              background: #000;
            }
          }
        }
        &#block6{
          background: #a40b5d;
          .no-gutters{
            .section1{
              margin-right: 0;
              &:before {
                background: #222;
              }
            }
          }
        }//block5
        &#block7{
          background: #a40b5d;
          .no-gutters{
            .section1{
              margin-right: 0;
              &:before {
                background: #222;
              }
            }
          }
        }
      }
      .offset-lg-1 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }

      .banner .banner__infobox {
        width: 100%;
        padding: 60px;
        .banner__desc span {
          font-size: 16px;
          line-height: 1.5;
          text-align: left;
          // float: left;
        }
      }
    }
    @media screen and (max-width: 768px){ //for block6
      .section-plan .planlist{
        .no-gutters.row{
          display: block;
        }
      }
    }
    
    
    //原站
    @media screen and (min-width: 769px){ //min-width: 768px //一下子吃不到
      .col-md{
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      }
      .col-md-6 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          max-width: 50%;
      }
      .g-title {
        margin-bottom: 0;
      }
      .banner {
        background-attachment: fixed;
        .banner__infobox h1 .banner__heading-cht {
          white-space: nowrap;
        }
      }
      .banner__desc-line {
        display: block;
        font-size: 24px;
        text-align: left;
        line-height: 1.875;
      }
    }
    // 美
    @media screen and (min-width: 769px) and (max-width:1024px) {
      .bg-primary .no-gutters .col-md .section1:before{
        content: none;
      }
    }

    @media screen and (min-width: 992px){
      .offset-lg-1 {
          margin-left: 8.333333%;
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
      }
      .col-lg {
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          max-width: 100%;
      }
    }
    
    @media screen and (min-width: 1430px){
      .section-promo .wrap__inner .promolist .promolist__item .section__text,
      .section-plan .planlist .no-gutters .col-md-6 .planlist__item .planlist__infobox .section__text {
        font-size: 18px;
        line-height: 1.67;
      }
    }

    @media screen and (min-width: 1680px){
      .section-plan .planlist .no-gutters .col-md-6 .planlist__item .planlist__infobox .section__heading {
        font-size: 48px;
        line-height: 1.36;
        margin-bottom: 5px;
        white-space: nowrap;
      }
    }
}

// EN
body.en{
    #home-wrapper .section-plan .planlist .no-gutters .col-md-6 .planlist__item .planlist__infobox{
      width: 72%;
      margin-left: 2%;
      .section__text{
        white-space: break-spaces;
      }
      @media screen and (min-width: 480px) and (max-width: 1440px){ 
        width: 75%;
        margin-left: 3%;
        bottom: 12%;
        &#g-62-txt , &#g-64-txt{
            width: 92%;
        }
      }
    }
    @media screen and (max-width: 480px){
	    #home-wrapper .section-promo .wrap__inner .box-center .section__subheading {
		    margin-left: 0;
	    }
	}

}
</style>
