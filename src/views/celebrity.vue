<template>
    <div class="celebrity-main" id="celebrity-wrapper">
        <div id="mask-kol"></div>
        <!-- block1 -->
        <div class="banner g-banner-kol">
            <div class="banner__infobox">
                <h1 class="g-title g-title-kol">
                    <span class="banner__heading-en">{{$t('celebrity.text11')}}</span>
                    <span class="banner__heading-cht">{{$t('celebrity.text12')}}</span>
                </h1>
                <p class="banner__desc g-subtitle g-subtitle-kol">
                    <span class="banner__desc-line">{{$t('celebrity.text13')}}</span>
                    <span class="banner__desc-line">{{$t('celebrity.text14')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text g-banner-slide g-banner-slide-kol">
                <div class="banner__vtl-text__inner">
                    {{$t('celebrity.text1s')}}
                </div>
            </div>
        </div>

        <!-- block2 -->
        <section class="section section-brand" id="block2-kol">
            <div class="wrap__inner">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h3 class="section__subheading" id="g-block21-kol">{{$t('celebrity.text21')}}</h3>
                        <h2 class="section__heading" id="g-block22-kol">{{$t('celebrity.text22')}}</h2>
                        <div id="g-block23-kol">
                            <p class="section__text text-default">{{$t('celebrity.text23')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__vtl-text" id="g-block2s-kol">
                <div>{{$t('celebrity.text2s')}}</div>
            </div>
        </section>

        <!-- block3 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md" id="block3-kol">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="sectioned section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/celebrity/introImg_01.jpg`" alt="" id="g-pic3-kol">
                            <div class="pic-mask" id="mask-block3-kol"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="sectioned section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row row-right">
                                <div class="col-lg-8 offset-lg-2" id="g-block31-kol">
                                    <div class="section__subheading text-default " id="g-text31-kol">{{$t('celebrity.text31')}}</div>
                                    <div class="section__heading" id="g-text32-kol">
                                        <div>{{$t('celebrity.text32')}}</div>
                                    </div>
                                    <div class="section__text text-default" id="g-text33-kol">
                                        <p>{{$t('celebrity.text33')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text3s-kol">
                            <div>{{$t('home.text3s')}}</div>
                        </div>

                    </section>
                </div>
            </div>
        </div>

        <!-- block4 -->
        <section class="section section-ko" id="block4-kol">
            <div class="wrap__inner wrap__inner--1200">
              <ul class="kollist">
                  <li class="kollist__item" id="g-block41-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text4a1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text4a2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text4a3')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block42-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text4b1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text4b2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text4b3')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block43-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text4c1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text4c2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text4c3')}}</p>
                  </li>
              </ul>
            </div>
        </section>

        <!-- block5 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-swap" id="block5-kol">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="sectioned section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/celebrity/introImg_02.jpg`" alt="" id="g-pic5-kol">
                            <div class="pic-mask" id="mask-block5-kol"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="sectioned section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2" id="g-block51-kol">
                                    <div class="section__subheading text-default " id="g-text31-kol">{{$t('celebrity.text51')}}</div>
                                    <div id="g-text52-kol">
                                        <div class="section__heading">{{$t('celebrity.text52')}}</div>
                                        <div class="section__title">{{$t('celebrity.text53')}}</div>
                                    </div>
                                    <div class="section__text text-default" id="g-text53-kol">
                                        <p>{{$t('celebrity.text54')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--left" id="g-text5s-kol">
                            <div>{{$t('home.text5s')}}</div>
                        </div>

                    </section>
                </div>
            </div>
        </div>

        <!-- block6 -->
        <section class="section section-ko" id="block6-kol">
            <div class="wrap__inner wrap__inner--1200">
              <ul class="kollist">
                  <li class="kollist__item" id="g-block61-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text6a1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text6a2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text6a3')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block62-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text6b1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text6b2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text6b3')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block63-kol">
                      <p class="kollist__subheading">{{$t('celebrity.text6c1')}}</p>
                      <p class="kollist__heading">{{$t('celebrity.text6c2')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text6c3')}}</p>
                  </li>
              </ul>
            </div>
        </section>

        <!-- block7 -->
        <div class="sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md" id="block7-kol">
            <div class="row no-gutters">
                <div class="col-md">
                    <div class="sectioned section1 section--full">
                        <div class="section-img">
                            <img :src="`${$cdn}/image-base/celebrity/introImg_03.jpg`" alt="" id="g-pic7-kol">
                            <div class="pic-mask" id="mask-block7-kol"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <section class="sectioned section2 section--solid d-md-flex align-items-md-center">
                        <div class="section__inner">
                            <div class="row row-right">
                                <div class="col-lg-8 offset-lg-2" id="g-block71-kol">
                                    <div class="section__subheading text-default " id="g-text31-kol">{{$t('celebrity.text71')}}</div>
                                    <div class="section__heading" id="g-text72-kol">
                                        <div>{{$t('celebrity.text72')}}</div>
                                    </div>
                                    <div class="section__text text-default" id="g-text73-kol">
                                        <p>{{$t('celebrity.text73')}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__vtl-text section__vtl-text--right" id="g-text7s-kol">
                            <div>{{$t('home.text7s')}}</div>
                        </div>

                    </section>
                </div>
            </div>
        </div>

        <!-- block8 -->
        <section class="section section-ko" id="block8-kol">
            <div class="wrap__inner wrap__inner--1200 wrap__inner--ad">
              <div class="wrap__inner-title">
                  <div class="row">
                      <div class="col-lg-8 offset-lg-2" id="g-block8-kol">
                          <h3 class="section__subheading" id="g-block8a-kol">{{$t('celebrity.text24')}}</h3>
                          <h2 class="section__heading" id="g-block8b-kol">{{$t('celebrity.text25')}}</h2>
                      </div>
                  </div>
              </div>
              <ul class="kollist">
                  <li class="kollist__item" id="g-block81-kol">
                      <p class="kollist__heading">{{$t('celebrity.text8a1')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text8a2')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block82-kol">
                      <p class="kollist__heading">{{$t('celebrity.text8b1')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text8b2')}}</p>
                  </li>
                  <li class="kollist__item" id="g-block83-kol">
                      <p class="kollist__heading">{{$t('celebrity.text8c1')}}</p>
                      <p class="section__text text-default">{{$t('celebrity.text8c2')}}</p>
                  </li>
              </ul>
            </div>
        </section>

        <!-- block9 -->
        <section class="section section--solid section-more" id="block9-kol">
            <!-- <img :src="`${$cdn}/image-base/celebrity/introImg_04.jpg`"> -->
            <div class="wrap__inner">
                <div class="section__infobox" id="g-block91-kol">
                    <h2 class="section__heading">{{$t('celebrity.text91')}}</h2>
                    <p class="section__text">{{$t('celebrity.text92')}}</p>
                </div>
            </div>
            <div class="pic-mask" id="mask-block9-kol"></div>
        </section>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    methods: {
        ...mapMutations({
            setLanguage: types.SET_LANGUAGE
        }),
        doAnimation() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to("#mask-kol",{
                top: "100vh",
                height: 0,
                duration: 1.6,
                ease: "expo.out",
                delay: .5,
                onComplete() {
                    $('#mask-kol').remove()
                }
            })
            // animate1
            gsap.from(".g-banner-kol",{
              opacity: 0,
              duration: 2,
            });
            gsap.from(".g-title-kol",{
              opacity: 0,
              duration: 2,
              delay: 1.2,
              ease: 'back'
            });
            gsap.from(".g-subtitle-kol",{
              opacity: 0,
              duration: 2,
              delay: 1.8,
              ease: 'back'
            });
            gsap.from(".g-banner-slide-kol",{
              y: -40,
              opacity: 0,
              delay: 2.4,
              duration: 1.2
            });
            
            // animate2
            gsap.from("#g-block21-kol",{
              scrollTrigger:{
                trigger: "#g-block21-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block21-kol",{
              scrollTrigger:{
                trigger: "#g-block21-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block22-kol",{
              scrollTrigger:{
                trigger: "#g-block22-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              delay: .2,
              ease: 'power4.easein'
            });
            gsap.to("#g-block22-kol",{
              scrollTrigger:{
                trigger: "#g-block22-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block23-kol",{
              scrollTrigger:{
                trigger: "#g-block23-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              delay: .4,
              ease: 'power4.easein'
            });
            gsap.to("#g-block23-kol",{
              scrollTrigger:{
                trigger: "#g-block23-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block2s-kol",{
              scrollTrigger:{
                trigger: "#block2-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              y: -30,
              opacity: 0,
              delay: .6,
              duration: 1.2
            });
            gsap.to("#g-block2s-kol",{
              scrollTrigger:{
                trigger: "#block2-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              y: -30,
              opacity: 0,
              duration: .2
            });
            // animate3
            gsap.from("#g-pic3-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: 1.2,
              delay: .2,
              // ease: 'back'
            });
            gsap.from("#g-pic3-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
              delay: .2,
            });
            gsap.from("#mask-block3-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              left: 0,
              duration: 1.8,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#g-block31-kol",{
              scrollTrigger:{
                trigger: "#g-block31-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -40,
              opacity: 0,
              duration: 1.2,
              ease: 'power2'
            });
            gsap.to("#g-block31-kol",{
              scrollTrigger:{
                trigger: "#g-block31-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-text3s-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -10,
              opacity: 0,
              delay: .6,
              duration: 1.2
            });
            gsap.to("#g-text3s-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -10,
              opacity: 0,
              duration: .2
            });
            // animate4(H5版面會改上下)
            gsap.from("#g-block41-kol",{
              scrollTrigger:{
                trigger: "#g-block41-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block41-kol",{
              scrollTrigger:{
                trigger: "#g-block41-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block42-kol",{
              scrollTrigger:{
                trigger: "#g-block42-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block42-kol",{
              scrollTrigger:{
                trigger: "#g-block42-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block43-kol",{
              scrollTrigger:{
                trigger: "#g-block43-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block43-kol",{
              scrollTrigger:{
                trigger: "#g-block43-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            // animate5
            gsap.from("#g-pic5-kol",{
              scrollTrigger:{
                trigger: "#block5-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: 1.2,
              delay: .2,
              // ease: 'back'
            });
            gsap.from("#g-pic5-kol",{
              scrollTrigger:{
                trigger: "#block5-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
              delay: .2,
            });
            gsap.from("#mask-block5-kol",{
              scrollTrigger:{
                trigger: "#block5-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              left: 0,
              duration: 1.8,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#g-block51-kol",{
              scrollTrigger:{
                trigger: "#g-block51-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -40,
              opacity: 0,
              duration: 1.2,
              ease: 'power2'
            });
            gsap.to("#g-block51-kol",{
              scrollTrigger:{
                trigger: "#g-block51-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-text5s-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -20,
              opacity: 0,
              delay: .6,
              duration: 1.2
            });
            gsap.to("#g-text5s-kol",{
              scrollTrigger:{
                trigger: "#block3-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -20,
              opacity: 0,
              duration: .2
            });
            // animate6
            gsap.from("#g-block61-kol",{
              scrollTrigger:{
                trigger: "#g-block61-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block61-kol",{
              scrollTrigger:{
                trigger: "#g-block61-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block62-kol",{
              scrollTrigger:{
                trigger: "#g-block62-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block62-kol",{
              scrollTrigger:{
                trigger: "#g-block62-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block63-kol",{
              scrollTrigger:{
                trigger: "#g-block63-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block63-kol",{
              scrollTrigger:{
                trigger: "#g-block63-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            // animate7
            gsap.from("#g-pic7-kol",{
              scrollTrigger:{
                trigger: "#block7-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: 1.2,
              delay: .2,
              // ease: 'back'
            });
            gsap.from("#g-pic7-kol",{
              scrollTrigger:{
                trigger: "#block7-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: .2,
              delay: .2,
            });
            gsap.from("#mask-block7-kol",{
              scrollTrigger:{
                trigger: "#block7-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              left: 0,
              duration: 1.8,
              delay: .2,
              ease: "power1.easein",
            });
            gsap.from("#g-block71-kol",{
              scrollTrigger:{
                trigger: "#g-block71-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -40,
              opacity: 0,
              duration: 1.2,
              ease: 'power2'
            });
            gsap.to("#g-block71-kol",{
              scrollTrigger:{
                trigger: "#g-block71-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-text7s-kol",{
              scrollTrigger:{
                trigger: "#block7-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -10,
              opacity: 0,
              delay: .6,
              duration: 1.2
            });
            gsap.to("#g-text7s-kol",{
              scrollTrigger:{
                trigger: "#block7-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -10,
              opacity: 0,
              duration: .2
            });
            // animate8
            gsap.from("#g-block8a-kol",{
              scrollTrigger:{
                trigger: "#g-block8-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block8a-kol",{
              scrollTrigger:{
                trigger: "#g-block8-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block8b-kol",{
              scrollTrigger:{
                trigger: "#g-block8-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              delay: .2,
              ease: 'power4.easein'
            });
            gsap.to("#g-block8b-kol",{
              scrollTrigger:{
                trigger: "#g-block8-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block81-kol",{
              scrollTrigger:{
                trigger: "#g-block81-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block81-kol",{
              scrollTrigger:{
                trigger: "#g-block81-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block82-kol",{
              scrollTrigger:{
                trigger: "#g-block82-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block82-kol",{
              scrollTrigger:{
                trigger: "#g-block82-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            gsap.from("#g-block83-kol",{
              scrollTrigger:{
                trigger: "#g-block83-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: 2,
              ease: 'power2'
            });
            gsap.to("#g-block83-kol",{
              scrollTrigger:{
                trigger: "#g-block83-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              x: -30,
              opacity: 0,
              duration: .2
            });
            // animate9
            gsap.from("#mask-block9-kol",{
              scrollTrigger:{
                trigger: "#block9-kol", //可不同元件
                start: "top 75%",
                toggleActions: "restart", // reverse
              },
              // width: 0,
              left: 0,
              duration: 1.4,
              delay: .2,
              ease: "back",
            });
            gsap.from("#g-block91-kol",{
              scrollTrigger:{
                trigger: "#block9-kol",
                start: "top 75%",
                toggleActions: "restart",
              },
              y: 30,
              opacity: 0,
              duration: 2,
              delay: .8,
              ease: 'power2'
            });
            gsap.to("#g-block91-kol",{
              scrollTrigger:{
                trigger: "#block9-kol",
                start: "top bottom",
                toggleActions: "restart",
              },
              y: 30,
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

#celebrity-wrapper {
    #mask-kol {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    background: #222;
    padding: 0;
    flex: 1 0 auto;
    // user-select: none; //美

    .col-md{
      position: relative;
      width: 100%;
      min-height: 1px;
    }

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
      background-image: url(#{$base}/celebrity/banner.jpg);
      .banner__infobox {
        max-width: 1000px;
        padding: 60px;
        position: relative;
				h1 {
					margin-bottom: 0;
					.banner__heading-en, .banner__heading-cht {
						text-align: left;
						color: #eee;
						font-weight: bold;
						margin-bottom: 10px;
						display: table;
						.en & {
  						margin-bottom: 40px;
            }
					}
					.banner__heading-en {
						font-size: 82px;
						line-height: 1.02;
					}
					.banner__heading-cht {
						font-size: 70px;
						line-height: 1.5;
						.en & {
              display: none;
            }
					}
				}
				p{
				text-align: left;
				margin-top: 0;
					span{
						color: #eee;
						font-size: 16px;
						line-height: 1.5;
					}
				}
				.banner__desc span:last-child:before {
					content: '，';
          .en & {
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
    .section { //.section-brand
      margin: 100px 0;
      position: relative;
      .wrap__inner {
          margin: 0 auto;
          padding: 0 15px;
          max-width: 992px; //1400px
          text-align: left;
          .row {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              margin-right: -15px;
              margin-left: -15px;
              .col-lg-8{
                position: relative;
                margin: 0 auto;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;
                color: #eee;
                .section__subheading{
                  font-size: 16px;
                  margin-bottom: 40px;
									font-weight: 300;
                }
                .section__heading{
                  font-size: 34px;
									line-height: 1.45;
									margin-bottom: 30px;
                }
                .section__text{
                  font-size: 16px;
                  line-height: 1.8;
                }
              }
          }
      }
      .section__vtl-text {
        display: block;
        position: absolute;
        font-size: 14px;
        padding-top: 18px;
        font-weight: 300;
        color: #ccc;
        left: 0;
        top: 50%;

        bottom: -50px; //0
        padding-top: 100px;
        transform: rotate(-90deg);
        transform-origin: left top;
        font-weight: 300;
      }
    }

    // block3, block7 (block5:swap)
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
            height: 100%;

            .section-img{
              background: #000;
              width: 100%;
              overflow: hidden;
              .pic-mask { //遮罩animate
                  position: absolute;
                  background-color: #000;
                  display: block;
                  top: 0;
                  bottom: 0;
                  left: 100vw;
                  right: 0;
              }
            }
          }
          .section2{
            height: 100%;
            margin: 0;
            .section__inner {
                padding: 0 15px;
                color: #fff;
                text-align: left;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                .row {
                  display: flex;
                  flex-wrap: wrap;
                  max-width: 51%;
                  margin-left: 34%;
                  .en & {
                    max-width: 54%;
                  }
                  .section__subheading{
                    font-size: 16px;
                    color: #ccc;
                    margin-bottom: 2em;
                  }
                  .section__heading{
                    font-size: 34px;
                    margin-bottom: 30px;
                    color: #eee;
                    font-weight: bold;
                    line-height: 1.45;
                  }
                  .section__title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 40px;
                    line-height: 1.2;
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
        padding-bottom: 100px;
        transform-origin: right bottom;
        transform: rotate(-90deg); //translateX(150%)
        &.section__vtl-text--right{
          top: 30%;
        }
      }
      //反方向
      &.bg-primary-swap{
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
              top: 40%;
              left: -90px;
              right: auto;
              padding-bottom: 0;
            }
          }
        }
      } //block5 end
    }

    // block4,6(8)
    .section-ko { //.section-brand
      .wrap__inner--1200 {
          max-width: 1200px;
          .kollist { //ul
              display: flex;
              margin: 0 -3.3%;
              list-style: none;
              counter-reset: num;
              .kollist__item { //li
                  width: 33.33%;
                  padding: 0 3.3%;
                  &:before {
                    counter-increment: num;
                    content: counter(num, decimal-leading-zero);
                    font-size: 48px;
                    font-weight: bold;
                    color: #e61673;
                    border-bottom: 1px solid #e61673; //#ff0000 //美
                    margin-bottom: 20px;
                    display: block;
                    padding-bottom: 10px;
                }
                .kollist__subheading{
                  color: #eee;
                  font-size: 16px;
									margin-bottom: 20px;
									font-weight: normal;
									display: block;
                }
                .kollist__heading{
                  color: #e61673;
                  font-size: 24px;
                  font-weight: bold;
									margin-bottom: 15px;
									line-height: 1.3;
                }
                .section__text{
                  color: #ccc;
									font-size: 16px;
									line-height: 1.875;
                }
              }
          }
          &.wrap__inner--ad{
            .row .col-lg-8 .section__heading{
              margin-bottom: 120px;
              margin-top: 60px;
            }
          }
      }
    }
    // block9
    .section-more{
      margin-bottom: 0;
      padding: 220px 0;
      background-image: url(#{$base}/celebrity/introImg_04.jpg);
      background-position: center;
      .en & {
        padding: 100px 0;
      }
      .wrap__inner {
          margin: 0 auto;
          padding: 0 15px;
          max-width: 1400px;
          .section__infobox{
            max-width: 468px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 40px;
            text-align: center;
            color: #eee;
            .en & {
              max-width: 780px;
            }
            .section__heading{
              font-size: 34px;
              font-weight: bold;
              line-height: 1.45;
            }
            .section__text{
              font-size: 16px;
              line-height: 1.875;
            }
          }
      }
      .pic-mask { //遮罩animate
          position: absolute;
          background: #000;
          display: block;
          top: 0;
          bottom: 0;
          left: 100vw;
          right: 0;
      }
    }

    @media screen and (max-width: 1024px){
      // block1
      .banner {
        .banner__infobox {
          // padding-left: 98px; //0
          h1{
            .banner__heading-en {
                font-size: 70px;
            }
            .banner__heading-cht {
                font-size: 24px;
                .en & {
                  display: none;
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
      .section-brand {
        margin: 100px 0;
      }
      // block3, block7 (block5:swap)
      .bg-primary{
        .no-gutters{
          .col-md{
            .section1{
              &:before {
                content: '';
                background: #222;
                display: block;
                width: 15px;
                position: absolute;
                z-index: 0;
                top: 0;
                bottom: 50%;
                right: 0; //-15px
              }
              .section-img{
                position: relative;
                right: 15px;
              }
            }
            .section2{
              .section__inner {
                padding: 80px 0;
                .row {
                  max-width: 92%;
                  margin-left: 4%;
                  .en & {
                    max-width: 92%;
                  }
                  .section__text{
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
        //反方向
        &.bg-primary-swap{
          .row.no-gutters .col-md .section1{
            &:before {
              left: 0;
            }
            .section-img{
              left: 15px;
            }
          }
        } //block5 end
      }
      // block4
      .section-ko { //.section-brand
        .wrap__inner--1200 {
          .kollist { //ul
              display: block;
              .kollist__item { //li
                  width: 94%;
                  padding: 0;
                  margin: auto;
                  margin-bottom: 90px;
              }
          }
          &.wrap__inner--ad{
            .row .col-lg-8 .section__heading{
              margin-bottom: 80px;
              margin-top: 0px;
            }
          }
        }
      }

      .section__vtl-text {
          display: none !important;
      }
      // block8
      .section .wrap__inner .wrap__inner-title .row .col-lg-8{
        margin: unset;
      }
      .section-more {
        padding: 168px 0;
      }
    }
    //原站
    @media screen and (min-width: 768px){
			.section {
				margin: 180px 0;
				&:last-child {
					margin: 180px 0 0;
				}
			}
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
			.banner {
			  background-attachment: fixed;
  			.banner__infobox p span {
  				display: block;
  				font-size: 24px;
  				font-weight: 600;
  				line-height: 1.5rem;
  				&:last-child:before {
  					display: none;
  				}
        }
			}
			.bg-primary .no-gutters .col-md .section2 .section__inner .row.row-right {
				margin-left: 16%;
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
			.section-ko .wrap__inner--1200 .kollist .kollist__item .section__text , .section-more .wrap__inner .section__infobox .section__text, .section .wrap__inner .row .col-lg-8 .section__text {
				font-size: 18px;
				line-height: 1.67;
			}
		}
    @media screen and (min-width: 1680px){
      .bg-primary .no-gutters .col-md .section2 .section__inner .row {
        .section__text {
          font-size: 18px;
        }
				.section__heading {
					> div {
						font-size: 48px;
						line-height: 1.36;
						margin-bottom: 35px;
					}
				}
      }
			.bg-primary .no-gutters .col-md .section2 .section__inner .row .section__heading, .section .wrap__inner .row .col-lg-8 .section__heading , .section-more .wrap__inner .section__infobox .section__heading{
				font-size: 48px;
				line-height: 1.36;
				margin-bottom: 35px;
			}


    }
    @media screen and (max-width: 1440px){
      .bg-primary{
        .section__vtl-text {
            top: 10%;
            padding-top: 0;
            padding-bottom: 18px;
        }
        &.bg-primary-swap{
          .no-gutters .section2 .section__vtl-text{
            top: 40%;
            left: -90px; //-30px //美
          }
        }
      }
    }
}

</style>
