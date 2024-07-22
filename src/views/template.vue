<template lang="html">
  <div class="main">
    <x-header/>
    <router-view/>
    <x-footer/>
  </div>
</template>

<script>
import common from '$COM'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'
const xHeader = () => import(/* webpackChunkName: "views/headerTop" */'@/views/headerTop.vue')
const xFooter = () => import(/* webpackChunkName: "views/footer" */'@/views/footer.vue')

export default {
    data() {
      return {
        menuclean: '',
        menubg: '',
        langtext: '', //初始語言: 繁中 //简中
        footerGsap: null
      }
    },
    components: {
      xHeader,
      xFooter
    },
    watch: {
  		$route(to, from) {
          $('#lang-arrow').removeClass('arrow-up');
      },
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
        isCanShow(){
          let header_top = $(window).scrollTop();
          if(header_top === 0) $('.header-bg').removeClass('is-showbg');
          if(header_top > 128) $('.header-bg').addClass('is-showbg');
        },
    },
    mounted() {
        let self = this;
        // 頂部需求
        window.addEventListener('scroll', function (event) {
          self.isCanShow();
        });
    },
    created() {
      $("body").removeClass();
      $("body").addClass(this.$route.params.lang);
    },
}
</script>
<style lang="scss">
.main {
  width: 100%;
  background: #222;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    border: 0;
    margin: 0;
    vertical-align: middle;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1100px){
    .footer .wrap__inner .footer-nav .nav-footer-wrap .nav-footer .nav-footer__item .nav-footer__link {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 1024px){
    .header{
      &.header--open {
        height: 100%;
      }
      .header-bg{
        height: 94px; //108px //美
      }
      .header__inner {
        justify-content: flex-start;
        margin-left: 0;
        .header__logo {
          width: 164px; // 190px
          left: 1.5rem; //美
          img {
            &:first-child {
              display: none;
            }
            &:last-child {
              display: block;
            }
          }
        }
      }

      .header__inner-bar{
        .nav-wrap {
          position: absolute;
          top: 0;
          right: 0;
          .nav-wrap__trigger{
            opacity: 1;
            position: fixed; //static
            display: block;
          }
          .nav-wrap__dropbox-overlay{
            opacity: 0;
            display: none;
            pointer-events: auto;
            .nav-wrap__dropbox{
              .nav{
                .nav__item{ //li
                  .nav__link {
                    font-size: 24px;
                    padding: 0.75em 0; //美
                    &:hover{
                      color: #fff;
                    }
                  }
                  .li-background{
                    display: none;
                  }
                }
              }
            }
          }
          .langselect{
            opacity: 0;
            display: none;
          }
          .langListshow{
            opacity: 0;
            // display: none;
          }
        } //nav-wrap
      }
    }
    // footer
    .footer{
      padding: 50px 0 30px;
      min-height: 280px;
      &:before {
        content: '';
      }
      .wrap__inner {
        .footer-nav{
          border-bottom: none;
          padding-bottom: 0;
          .footer__logobox{
            margin: 0 auto;
            z-index: 2;
            img {
              &:first-child {
                display: none;
              }
              &:last-child {
                display: block;
              }
            }
          }
          .nav-footer-wrap{
            display: none;
          }
        }
        .footer-info{
          display: block;
          .footer-info__infobox {
            p, a{
              margin: .4rem auto;
              line-height: 1.5;
            }
          }
        }
      }
      .footer__copyright {
        width: auto;
        padding: 0 15px;
        text-align: left;
        line-height: 1.5;
        margin: 0 auto;
      }
    }
  }
  .is-showbg{
    opacity: .7 !important;
  }
}

body{
  &.en{
    p { 
      letter-spacing: 1px;
    }
  }
}
</style>
