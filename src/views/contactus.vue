<template>
    <div id="contact-wrapper">
        <div id="mask"></div>
        <!-- block1 -->
        <div class="banner banner-contact">
            <div class="banner__infobox">
                <h1 class="contact-1">
                    <span class="banner__heading-en">{{$t('contactus.text11')}}</span>
                    <span class="banner__heading-cht">{{$t('contactus.text12')}}</span>
                </h1>
                <p class="banner__desc contact-2">
                    <span class="banner__desc-line">{{$t('contactus.text13')}}</span>
                </p>
            </div>
            <div class="banner__vtl-text contact-3">
                <div class="banner__vtl-text__inner">
                    {{$t('contactus.text1s')}}
                </div>
            </div>
        </div>

        <!-- block2 -->
        <div class="section contact-4">
            <div class="wrap__inner wrap__inner--950">
                <form class="form form--simple">
                    <fieldset>
                        <div class="form__body">
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup">
                                    <input id="name" class="form__control" name="name" type="text"
                                        :placeholder="$t('contactus.text21a')" maxlength="50" autocomplete="off" v-model="form.name">
                                    <label class="form__label" for="name">{{$t('contactus.text21a')}}</label>
                                    <div class="form__feedback" v-show="error_name">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text21b')}}
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup">
                                    <input class="form__control" id="web" name="web" type="url"
                                        :placeholder="$t('contactus.text22a')" maxlength="500" v-model="form.web">
                                    <label class="form__label" for="web">{{$t('contactus.text22a')}}</label>
                                    <div class="form__feedback" v-show="error_web">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text22b')}}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form__field form__field-required">
                                        <div class="form__inputgroup">
                                            <input class="form__control" id="industry" name="industry" type="text"
                                                :placeholder="$t('contactus.text23a')" maxlength="50" v-model="form.industry">
                                            <label class="form__label" for="industry">{{$t('contactus.text23a')}}</label>
                                            <div class="form__feedback" v-show="error_industry">
                                                <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text23b')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form__field form__field-required">
                                        <div class="form__inputgroup">
                                            <input class="form__control" id="industryName" name="industryName" type="text"
                                                :placeholder="$t('contactus.text24a')" maxlength="100" v-model="form.industryName">
                                            <label class="form__label" for="industryName">{{$t('contactus.text24a')}}</label>
                                            <div class="form__feedback" v-show="error_industryName">
                                                <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text24b')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup">
                                    <input class="form__control" id="contact" name="contact" type="text"
                                        :placeholder="$t('contactus.text25a')" maxlength="50" v-model="form.contact">
                                    <label class="form__label" for="contact">{{$t('contactus.text25a')}}</label>
                                    <div class="form__feedback" v-show="error_contact">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text25b')}}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form__field form__field-required">
                                        <div class="form__inputgroup">
                                            <input class="form__control" id="tel" name="tel" type="tel"
                                                :placeholder="$t('contactus.text26a')" maxlength="50" v-model="form.tel">
                                            <label class="form__label" for="tel">{{$t('contactus.text26a')}}</label>
                                            <div class="form__feedback" v-show="error_tel">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text26b')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form__field form__field-required">
                                        <div class="form__inputgroup">
                                            <input class="form__control" id="mail" name="mail" type="email"
                                                :placeholder="$t('contactus.text27a')" maxlength="100" v-model="form.mail">
                                            <label class="form__label" for="tel">{{$t('contactus.text27a')}}</label>
                                            <div class="form__feedback" v-show="error_mail">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text27b')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup select__inputgroup">
                                    <select class="form__control" name="corp" id="corp" required v-model="form.corp">
                                        <option value="" disabled selected>{{$t('contactus.text28a')}}</option>
                                        <option value="1">{{$t('contactus.text28b')}}</option>
                                        <option value="2">{{$t('contactus.text28c')}}</option>
                                        <option value="3">{{$t('contactus.text28d')}}</option>
                                        <option value="4">{{$t('contactus.text28e')}}</option>
                                        <option value="5">{{$t('contactus.text28f')}}</option>
                                    </select>
                                    <label class="form__label en__label" for="corp">{{$t('contactus.text28a')}}</label>
                                    <div class="form__feedback" v-show="error_corp">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text28g')}}
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup select__inputgroup">
                                    <select class="form__control" name="findOutFrom" id="findOutFrom" required  v-model="form.findOutFrom">
                                        <option value="" disabled selected>{{$t('contactus.text29a')}}</option>
                                        <option value="1">{{$t('contactus.text29b')}}</option>
                                        <option value="2">{{$t('contactus.text29c')}}</option>
                                        <option value="3">{{$t('contactus.text29d')}}</option>
                                        <option value="4">{{$t('contactus.text29e')}}</option>
                                        <option value="5">{{$t('contactus.text29f')}}</option>
                                    </select>
                                    <label class="form__label en__label" for="where">{{$t('contactus.text29a')}}</label>
                                    <div class="form__feedback" v-show="error_findOutFrom">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text29g')}}
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup select__inputgroup">
                                    <select class="form__control" name="purpose" id="purpose" required v-model="form.purpose">
                                        <option value="" disabled selected>{{$t('contactus.text30a')}}</option>
                                        <option value="1">{{$t('contactus.text30b')}}</option>
                                        <option value="2">{{$t('contactus.text30c')}}</option>
                                        <option value="3">{{$t('contactus.text30d')}}</option>
                                        <option value="4">{{$t('contactus.text30e')}}</option>
                                        <option value="5">{{$t('contactus.text30f')}}</option>
                                        <option value="6">{{$t('contactus.text30g')}}</option>
                                    </select>
                                    <label class="form__label en__label" for="purpose">{{$t('contactus.text30a')}}</label>
                                    <div class="form__feedback" v-show="error_purpose">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text30h')}}
                                    </div>
                                </div>
                            </div>
                            <div class="form__field form__field-required">
                                <div class="form__inputgroup">
                                    <textarea class="form__control" id="comment" name="comment" rows="5"
                                        :placeholder="$t('contactus.text31a')" maxlength="1000" v-model="form.comment"></textarea>
                                    <label class="form__label" for="comment">{{$t('contactus.text31a')}}</label>
                                    <div class="form__feedback" v-show="error_comment">
                                        <i class="form__feedback-icon icon-warning"></i>{{$t('contactus.text31b')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form__btn">
                            <button type="button" class="btn btn--primary btn--max-width-170-md"
                                :value="$t('contactus.text32')" @click="sendContact">{{$t('contactus.text32')}}
                            </button>
                        </div>
                    </fieldset>
                </form>
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
    data (){
        return {
            error_name: false,
			error_web: false,
			error_industry: false,
			error_industryName: false,
			error_contact: false,
			error_tel: false,
			error_mail: false,
			error_corp: false,
			error_findOutFrom: false,
			error_purpose: false,
			error_comment: false,

            form: {
                name: '',
                web: '',
                industry: '',
                industryName: '',
                contact: '',
                tel: '',
                mail: '',
                corp: '',
                findOutFrom: '',
                purpose: '',
                comment: '',
            },
            check: {
                name: true,
                web: true,
                industry: true,
                industryName: true,
                contact: true,
                tel: true,
                mail: true,
                corp: true,
                findOutFrom: true,
                purpose: true,
                comment: true,
            }
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
    watch:{
        'form.name'(v){
			this.error_name = v.length < 2;
			this.check.name = this.error_name;
		},
        'form.web'(v){
			this.web = v.length < 2;
			this.check.web = this.error_web;
		},
        'form.industry'(v){
			this.industry = v.length < 2;
			this.check.industry = this.error_industry;
		},
        'form.industryName'(v){
			this.industryName = v.length < 2;
			this.check.industryName = this.error_industryName;
		},
        'form.contact'(v){
			this.contact = v.length < 2;
			this.check.contact = this.error_contact;
		},
		'form.tel'(v){
			this.error_tel = !/^\d+$/.test(v) || (v.length < 8);
			this.check.tel = this.error_tel;
		},
		'form.mail'(v){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.error_mail = v == '' ? false : !re.test(v);
			this.check.mail = this.error_mail;
		},
        'form.corp'(v){
			this.corp = v.length < 2;
			this.check.corp = this.error_corp;
		},
        'form.findOutFrom'(v){
			this.findOutFrom = v.length < 2;
			this.check.findOutFrom = this.error_findOutFrom;
		},
        'form.purpose'(v){
			this.purpose = v.length < 2;
			this.check.purpose = this.error_purpose;
		},
        'form.comment'(v){
			this.comment = v.length < 2;
			this.check.comment = this.error_comment;
		},
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
            gsap.from(".contact-1",{
              scrollTrigger:{
                trigger: ".contact-1",
              },
              opacity: 0,
              duration: 2,
              delay: 1.2,
              ease: 'back'
            });
            gsap.from(".contact-2",{
              scrollTrigger:{
                trigger: ".contact-2",
              },
              opacity: 0,
              duration: 2,
              delay: 1.4,
              ease: 'back'
            });
            gsap.from(".contact-3",{
              scrollTrigger:{
                trigger: ".contact-3",
              },
              opacity: 0,
              duration: 2,
              delay: 1.4,
              ease: 'back'
            });
            gsap.from(".contact-4",{
              scrollTrigger:{
                trigger: ".contact-4",
                start: "top 75%",
                toggleActions: "restart",
              },
              opacity: 0,
              duration: 1,
              delay: .5,
              ease: 'back'
            });
        },
        sendContact(){
            this.error_name = this.check.name;
            this.error_web = this.check.web;
            this.error_industry = this.check.industry;
            this.error_industryName = this.check.industryName;
            this.error_contact = this.check.contact;
            this.error_tel = this.check.tel;
            this.error_corp = this.check.corp;
            this.error_mail = this.check.mail;
            this.error_findOutFrom = this.check.findOutFrom;
            this.error_purpose = this.check.purpose;
            this.error_comment = this.check.comment;

			if(this.check.name || this.check.web || this.check.industry || this.check.industryName || this.check.contact || this.check.tel ||
            this.check.corp || this.check.mail || this.check.findOutFrom || this.check.purpose || this.check.comment) return;
		},
        doReset(){
			Object.keys(this.form).map(o => {
				this.form[o] = '';
				setTimeout(() => {
					this[`error_${o}`] = false;
					this.check[o] = true;
				}, 50);
			})
		},
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

#contact-wrapper {
    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    #mask {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #222;
        z-index: 999;
    }
    .banner.banner-contact {
        position: relative;
        height: 100vh;
        background-size: cover;
        background-position: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-image: url(#{$base}/contact/banner.jpg);
        .banner__infobox {
            max-width: 580px;
            padding: 60px;
            position: relative;
            text-align: left;
            .en & {
                max-width: 987px;
            }
        }
    }
    .banner__infobox {
        >h1 {
            margin-bottom: 0;
        }
        >p {
            margin-top: 0;
        }
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
    }

    .banner__desc .banner__desc-line {
        font-size: 16px;
        line-height: 2rem;
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
    .section {
        margin: 100px 0;
        position: relative;
        .wrap__inner--950 {
            max-width: 950px;
            margin: auto;
            padding: 0 15px;
            .form {
                width: 100%;
                position: relative;
            }
        }
    }

    .form__control {
        font-family: inherit;
        font-size: 16px;
        line-height: 1.15;
        width: 100%;
        color: inherit;
        padding: 13px 20px;
        border: 1px solid currentColor;
        background: none;
        border-color: #fff;
        color:#fff;
    }
    .form--simple .form__label, .form--simple select.form__control:required:invalid ~ .form__label {
        position: absolute;
        left: 15px;
        pointer-events: none;
        transform: none;
        color: #ccc;
        font-size: 16px;
        line-height: 3;
         &.en__label {
            font-size: 12px;
            line-height: 4;
            letter-spacing: 0.5px;
        }
        &:before {
            content: '*';
            position: relative;
            left: -2px;
            color: #c00;
        }
    }
    .form__feedback {
        font-size: 14px;
        position: absolute;
        bottom: -17px;
        color: #CC0000;
        left: 26px;
        .en & {
            font-size: 12px;
            letter-spacing: -0.1px;
        }
    }
    .form__field >div {
        display: flex;
    }
    .form__field--error .form__control {
        border-color: #CC0000
    }

    .form--simple {
        .en & {
            text-align: left;
        }
        option[value=""][disabled] {
            display: none;
        }
        option {
            background-color: #999;
            color: #fff;
        }
        .row {
            overflow: visible;
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
        }
        .form__field {
            margin-bottom: 45px;
            position: relative;
            &:before, &:after {
                content: none;
            }
        }
        .form__control:placeholder-shown::placeholder,.input-fill:placeholder-shown::placeholder ,select.form__control:required:invalid {
            color: transparent;
        }
    }

    .form__btn {
        text-align: left;
        .btn {
            display: inline-block;
            padding: 12px 10px;
            font-size: 16px;
            line-height: 1;
            text-decoration: none;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            letter-spacing: .05em;
            touch-action: manipulation;
            cursor: pointer;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            transition: all .1s ease-in-out;
            &.btn--primary {
                color: #e61673;
                background: #fff;
                width: 100%;
                &:hover {
                    color: #fff;
                    background: #e61673;
                }
            }
        }
    }
    select.form__control {
        border-color: #fff;
        -webkit-appearance: none;
        cursor: pointer;
    }
    .select__inputgroup {
        .form__label {
            transform: scale(0.75) translate(-20px, -4.5em);
            transform-origin: left bottom;
            opacity: .8;
        }
        &:before {
            content: '';
            position: absolute;
            left: 90%;
            bottom: 38%;
            width: 20px;
            height: 12px;
            background-size: contain;
            background-image: url(#{$base}/contact/down_arrow.png);
        }
    }

    .form--simple option[value=""][disabled] {
        display: none;
    }
    
    .form__control:not(:placeholder-shown) ~ .form__label, .form__control:focus ~ .form__label {
        transform: scale(0.75) translate(-1.5em, -3.3em);
        &.en__label {
            transform: scale(0.85) translate(-1em, -3.8em);
        }
    }

    /* for IE */
    _:-ms-lang(x)::-ms-backdrop, .form--simple .form__label {
        display: none;
    }
    _:-ms-lang(x)::-ms-backdrop, .form--simple select.form__control:required:invalid {
        color: #ccc;
    }
}

@media screen and (min-width: 768px) {
    #contact-wrapper {
        .btn--max-width-170-md {
            width: 170px;
        }
        .banner {
            background-attachment: fixed;
            .banner__infobox {
                .banner__heading-en {
                    font-size: 82px;
                }
                .banner__heading-cht {
                    font-size: 70px;
                    margin-bottom: 15px;
                }
                .banner__desc {
                    font-size: 24px;
                    font-weight: bold;
                    line-height: 1.875;
                    text-align: left;
                    margin: 0;
                    padding-left: 5px;
                    span {
                        font-size: 0.8rem;
                        line-height: 1.5rem;
                    }
                }
            }
            .banner__vtl-text {
                font-size: 16px;
                bottom: -50px;
                padding-top: 100px;
            }
        }
        .section {
            margin: 180px 0;
        }
        .select__inputgroup:before {
            left: 96%;
        }
        .form__btn .btn.btn--primary {
            max-width: 170px;
        }
        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 46.9%;
        }
        .section__subheading {
            font-size: 0.8rem;
            .section__heading {
                font-size: 34px;
            }
        }
        .form--simple {
            .form__control {
                font-size: 18px;
                padding: 16px 26px;
                &:focus-visible {
                    outline: none;
                }
            }
            .form__field {
                margin-bottom: 50px;
            }

            select.form__control:required:invalid ~ .form__label {
                transform: none;
            }
            .form__label, select.form__control:required:invalid ~ .form__label {
                top: 18px;
                line-height: 20px;
                 &.en__label {
                    font-size: 16px;
                    line-height: 20px;
                    letter-spacing: inherit;
                }
            }
            .form__control:not(:placeholder-shown) ~ .form__label, .form__control:focus ~ .form__label {
                transform: scale(0.75) translate(-24px, -3.3em);
            }
        }
    }
}
</style>
