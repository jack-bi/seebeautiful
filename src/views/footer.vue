<template>
  <div class="footer">
    <div class="wrap__inner">
      <div class="footer-nav">
        <div class="footer__logobox" @click="goHome()">
          <a href="javascript:void(0)" @click="$router.push({name: 'home'})">
            <img :src="`${$cdn}/image-base/common/logo_title.png`" alt="">
            <img :src="`${$cdn}/image-base/common/logo_title_h5.png`" alt="">
          </a>
        </div>
        <div class="nav-footer-wrap">
          <ul class="nav-footer">
            <li class="nav-footer__item" v-for="(item, index) in menuItems" :key="index">
              <a href="javascript:void(0)" class="nav-footer__link" @click="menuSelect(item, item.num)"
              @mouseenter="footerEnter(item.footerbg)" @mouseleave="footerLeave(item.footerbg)">
                {{$t(`${item.text}`)}}
              </a>
              <div class="footerli-background" :id="item.footerbg"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
          <div class="footer-info__infobox">
              <p>{{$t('footer.text1')}}</p>
              <p><a>{{$t('footer.text2')}}</a></p>
              <p><a>{{$t('footer.text3')}}</a></p>
          </div>
      </div>
    </div>
    <div class="footer__copyright">
      Copyright © SeeBeauty International Entertainment Co., Ltd. All Rights Reserved.
    </div>
  </div>
</template>

<script>
import common from '$COM'
import { mapGetters, mapMutations } from 'vuex'
export default {
    data(){
      return {
        footerGsap: null,
        menuclean: '',
      }
    },
    methods: {
        menuSelect: common.Menu.menuSelect,
        footerEnter: common.Menu.footerEnter,
        footerLeave: common.Menu.footerLeave,
        goHome: common.Menu.goHome,
    },
    computed: {
      ...mapGetters(['menuItems']),
    }
}
</script>
<style lang="scss">
.footer{
      background: #222;
      position: relative;
      padding: 88px 0;
      overflow: hidden;
      min-height: 340px;
      &:before {
        content: 'BORN TO LEAD';
        color: #555;
        opacity: .2;
        font-size: 200px;
        font-weight: bolder;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 4em;
        line-height: .9;
        margin-bottom: -0.05em;
        pointer-events: none;
        text-align: left;
      }

      .wrap__inner {
        margin: 0 auto;
        padding: 0 15px;
        max-width: 1400px;
        .footer-nav{ //footer-menu
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 30px;
          border-bottom: 1px solid #e61673;
          margin-bottom: 50px;
          .footer__logobox{
            max-width: 260px;
            margin: 0;
            z-index: 99;
            img:last-child {
              display: none;
            }
          }
          .nav-footer-wrap{
            display: block;
            font-size: 18px;
            font-weight: 500; //美
            .nav-footer{//ul
              margin: 0;
              .nav-footer__item{//li
                display: inline-block;
                margin-left: 22px;
                position: relative;
                .nav-footer__link{//a
                  position: relative;
                  z-index: 1;
                  color: #e61673;
                  // top: 64px;
                  display: block;
                  z-index: 2;
                  &:hover{
                    color: #fff;
                  }
                }
                .footerli-background{
                  width: 132%;
                  height: 0;
                  background: #e61673;
                  bottom: -8px;
                  left: -16%;
                  position: absolute;
                  margin: 0 auto;
                  // z-index: -1;
                  &#footerbg3{
                    width: 120%;
                    left: -10%;
                  }
                  display: block;
                  // opacity: 0;
                  &.active{
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
        .footer-info{
          display: flex;
          justify-content: space-between;
          // line-height: 1.5;
          .footer-info__infobox {
            margin-bottom: 15px;
            letter-spacing: 0; //美
            p, a{
              font-size: 16px; //美
              line-height: 1.88;
              text-align: left;
              color: #fff;
            }
          }
        }
      }
      .footer__copyright {
        color: #999;
        font-size: 16px;
        width: 100%;
        position: absolute;
        margin-top: 50px;
        letter-spacing: 0; //美
      }
      .en & {
        .wrap__inner .footer-nav .nav-footer-wrap .nav-footer .nav-footer__item .footerli-background{
          width: 114%;
          left: -7%;
          &#footerbg3{
            width: 110%;
            left: -5%;
          }
          &#footerbg4{
            width: 128%;
            left: -14%;
          }
          &#footerbg5{
            width: 124%;
            left: -12%;
          }
        }
      }
    }
</style>