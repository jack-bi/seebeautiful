import gsap from "gsap"
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import store from '../store'
import * as types from '@/store/mutation-types'
gsap.registerPlugin(ScrollTrigger);


function menuSelect(item, num) { //menu選取
    let vm = this;
    changeRoute(item.routeName, vm);
    closeMenu(vm);
    scrollToTop();
    store.commit(types.SET_CURRENTMENU, num)
    this.menubg = item.menubg;
}

function changeRoute(routeName, vm) {
    if (routeName) vm.$router.push({
        name: routeName
    });
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function closeMenu(vm) {
    vm.menuOpen = false;
}

function footerEnter(bgID) {
    this.footerGsap = gsap.to(`#${bgID}`, {
        height: 70,
        duration: 1
    });
}

function footerLeave(flID) {
    if (this.footerGsap) this.footerGsap.kill()
    gsap.to(`#${flID}`, {
        height: 0,
        duration: 0
    });
}

function goHome() {
    this.$router.push({
        name: 'home'
    })
    store.commit(types.SET_CURRENTMENU, -1)
    window.scrollTo(0, 0);
}

function mouseEnter(menuID) {
    // 若和footer統一寫法,會動到menu版面
    $('#' + menuID).addClass('active');
    if (this.menubg != menuID) {
        gsap.fromTo(`#${menuID}`, {
            height: 0,
        }, {
            height: 70,
            duration: .8,
            ease: 'SlowMo'
        });
    }
}

function mouseLeave() {
    $('.li-background').removeClass('active');
}

function headerFadeIn() {
    gsap.from(".g-header", {
        y: -100,
        opacity: 0,
        duration: .8,
        delay: 2,
    });
}

export default {
    menuSelect,
    footerEnter,
    footerLeave,
    goHome,
    headerFadeIn,
    mouseEnter,
    mouseLeave
}
