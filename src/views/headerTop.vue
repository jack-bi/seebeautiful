<template>
    <header class="header g-header" :class="{'header--open': menuOpen}">
      <div class="header__inner">
        <div class="header__logo logo" @click="goHome()">
          <a href="javascript:void(0)" @click="$router.push({name: 'home'})">
            <img :src="`${$cdn}/image-base/common/logo_title.png`" alt="">
            <img :src="`${$cdn}/image-base/common/logo_title_h5.png`" alt="">
          </a>
        </div>
        <!--  -->
        <div class="header__inner-bar">
          <div class="header__navbar navbar">
            <nav class="nav-wrap" id="menulist" :class="{'nav-wrap--open': menuOpen}">
              <a href="javascript:void(0)" class="nav-wrap__trigger" @click="menuOpen = !menuOpen">
                <div class="nav-wrap__trigger-line"></div>
                <div class="nav-wrap__trigger-line"></div>
                <div class="nav-wrap__trigger-line"></div>
              </a>
              <div class="nav-wrap__dropbox-overlay">
                <div class="nav-wrap__dropbox">
                  <ul class="nav">
                    <li v-for="(item, index) in menuItems" :key="index" :id="item.id" class="nav__item" :class="{'active': item.num === currentMenu }">
                      <a href="javascript:void(0)" class="nav__link" @click="menuSelect(item, item.num)"
                      @mouseenter="mouseEnter(item.menubg)" @mouseleave="mouseLeave()">
                        {{$t(`${item.text}`)}}
                      </a>
                      <div class="li-background" :id="item.menubg"></div>
                    </li>
                  </ul>
                  <span class="nav__item-border"></span>
                </div>
              </div>
              <div class="langselect" @click="showLangList = !showLangList">
                <span>{{ langText }}</span>
                <div class="arrow" id="lang-arrow" :class="{'arrow-up': showLangList}"></div>
              </div>
              <div class="langListshow" v-show="showLangList">
                <ul>
                  <li v-for="(lang, index) in langList" :key="index" @click="langDo(lang.enName, lang.cnName, index)" :class="{'nonClick': lang.enName === language}">
                    <span>{{lang.cnName}}</span>
                  </li>
                  <li id="langCLOSE" class="langclose" @click="showLangList = false">
                    <span>{{$t('common.text1')}}</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="header-bg"></div>
    </header>
</template>

<script>
import common from '$COM'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'


export default{
    data(){
        return {
          showLangList: false,
          menuOpen: false,
          menubg: '',
        }
    },
    methods: {
        ...mapMutations({
            setLanguage: types.SET_LANGUAGE
        }),
        menuSelect: common.Menu.menuSelect,
        mouseEnter: common.Menu.mouseEnter,
        mouseLeave: common.Menu.mouseLeave,
        goHome: common.Menu.goHome,
        langDo(langid){
          this.setLanguage(langid);
          this.setLangClass(langid);
          this.showLangList = false;
        },
        setLangClass(lang){
          $("body").removeClass();
          $("body").toggleClass(lang);
        },
    },
    computed: {
      ...mapGetters(['language', 'menuItems', 'currentMenu', 'langList']),
      langText(){
        let vm = this;
        return vm.langList.find(function(item){
          return item.enName === vm.language;
        }).cnName
      }
    },
    mounted(){
      common.Menu.headerFadeIn();
    },
    created(){
    },
}
</script>
<style lang="scss">
$base: 'https://seebeautymedia.com/seebeautymedia/image-base';
.header{
    height: 88px;
    background: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    .header-bg{
      width: 100%;
      height: 128px;
      background: #000;
      position: absolute;
      top: 0;
      opacity: 0;
      z-index: -1;
    }
    .header__inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 100%;
      padding: 20px 0;
      margin-left: 30px;
      .header__logo {
        width: 256px;
        position: relative;
        overflow: hidden;
        top: -5px;
        img:last-child {
          display: none;
        }
      }
    }
    .header__inner-bar{
      display: flex;
      justify-content: flex-end;
      flex-direction: row-reverse;
      z-index: 2;
      .nav-wrap {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        .nav-wrap__trigger{
          opacity: 0;
          position: static;
          display: none;
          top: 10px;
          right: 10px;
          z-index: 11;
          padding: 12px 20px;
          .nav-wrap__trigger-line {
            width: 30px;
            height: 3px;
            background-color: #fff;
            display: block;
            margin: 8px auto;
            transition: all 0.3s ease-in-out;
          }
        }
        .nav-wrap__dropbox-overlay{
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: none;
          position: static;
          opacity: 1;
          transform: none;
          transition: opacity .25s;
          pointer-events: auto;
          height: auto;
          display: flex;
          .nav-wrap__dropbox{
            padding: 0;
            overflow: visible;
            height: 100%;
            position: relative;
            .nav{
              display: flex;
              flex-wrap: wrap;
              padding: 0;
              margin: 0;
              margin-top: 20px;
              .nav__item{
                opacity: 1;
                width: auto;
                margin-left: 20px;
                .nav__link { //a
                  display: block;
                  cursor: pointer;
                  text-decoration: none;
                  font-size: 18px;
                  font-weight: bold;
                  padding: 0.5em 10px;
                  color: #e61673;
                  text-align: center;
                  padding-left: 0;
                  padding-right: 0;
                  &:hover, &.active{
                      color: #fff;
                  }
                  .en & {
                    letter-spacing: 1px;
                  }
                }
                .li-background{
                  width: 130%;
                  height: 70px;
                  background: #e61673;
                  top: -35px;
                  left: -15%;
                  position: relative;
                  margin: 0 auto;
                  z-index: -1;
                  &#menubg3{
                    width: 114%;
                    left: -7%;
                  }
                  display: block;
                  opacity: 0;
                  &.active{
                    opacity: 1;
                  }
                }
                &.active{ //點選內頁
                  .nav__link {
                    color: #fff;
                  }
                  .li-background{
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
        .langselect{
          opacity: 1;
          font-size: 16px;
          font-weight: bold;
          padding: 6px 10px;
          background: none;
          color: #e61673;
          border: solid 1px #e61673;
          border-radius: 18px;
          margin: 0 20px;
          cursor: pointer;
          margin-top: -50px;
          display: flex;;
          .arrow {
            width: 14px;
            height: 8px;
            background-image: url(#{$base}/common/lang_arrow.png);
            background-size: contain;
            margin: 4px;
            &.arrow-up{
              transform:scaleY(-1);
            }
          }
        }
        .langListshow{
          width: 80px;
          border-radius: 12px;
          background-color: #292929;
          position: absolute;
          margin-top: 124px;
          right: 20px;
          ul {
            height: 124px;
            li{
              font-size: 16px;
              color: #dfdfdf;
              cursor: pointer;

              &:nth-child(1){
                padding : 15px 0;
              }
              &:nth-child(2){
                padding: 15px 0;
                border-top: solid 1px #404040;
                border-bottom: solid 1px #404040;
              }
              &:nth-child(3){
                padding-top: 15px;
              }
              &.nonClick{
                color: #e61673;
                cursor: default;
              }
              &.langclose{
                display: none;
              }
            }
          }
        }
      }
    }
    .en & {
      .header__inner-bar .nav-wrap .nav-wrap__dropbox-overlay .nav-wrap__dropbox .nav .nav__item .li-background{
        width: 112%;
        left: -6%;
        &#menubg3{
          width: 108%;
          left: -4%;
        }
        &#menubg4{
          width: 122%;
          left: -11%;
        }
        &#menubg5{
          width: 118%;
          left: -9%;
        }
      }
    }
}
//H5 menu
.header .header__inner-bar{
  .nav-wrap.nav-wrap--open{
    width: 100vw;
    //button
    .nav-wrap__trigger{
      .nav-wrap__trigger-line{
        &:nth-child(1){
          transform: translateY(11px) rotate(45deg);
        }
        &:nth-child(2){
          opacity: 0;
        }
        &:nth-child(3){
          transform: translateY(-11px) rotate(-45deg);
        }
      }
    }
    //menu
    .nav-wrap__dropbox-overlay {
        pointer-events: auto;
        opacity: 1;
        display: block;
        position: fixed;
        background: #000;
        transform: none;
        z-index: 10;
        transition: transform .35s, opacity .3s;
        .nav-wrap__dropbox{
          overflow-y: auto;
          height: 50%;
          padding: 80px 0 10vh;
          .nav{
            padding: 0;
            margin: 0;
            display: block;
            .nav__item{
              margin-left: 0;
              // 美
              .nav__link{
                color: #fff;
              }
              &.active{
                .nav__link{
                  color: #e61673;
                }
              }
              &:after{
                display: none;
              }
            }
          }
        }
    }
    .langselect{
      opacity: 1;
      position: fixed;
      display: flex; //block
      z-index: 10;
      margin: 0;
      background: #000;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      padding: 8px 30px; //美
    }
    .langListshow{
      opacity: 1;
      background: #292929;
      z-index: 12;
      width: 100%;
      height: 310px; //美 188px
      position: fixed;
      margin-top: 0;
      padding: 0;
      right: 0;
      bottom: 0;
      border-radius: 0;
      ul li{
        height: 60px;
        line-height: 60px;
        font-size: 18px; //美
        padding: 8px 0;
        &:nth-child(3){
          border-bottom: solid #141414 8px;
        }
        &.langclose{
          display: block;
          color: #8a8a8a;
        }
      }
    }

  }
}
</style>
