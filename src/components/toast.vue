<template lang="html">
    <toast v-model="toast.show" :type="toast.type" :width="toast.width" :text="toast.text" :time="toast.time"
        :position="toast.position" @on-hide="toast.onHide" @on-show="toast.onShow"></toast>
</template>

<script>
import { Toast } from 'vux'
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {
        Toast
    },
    computed: {
        ...mapGetters(['toast']),
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.weui-toast__content {
    line-height: 1.8rem;
    padding: 0 .5rem;
}

.weui-toast {
    // border: 2px solid #e5a655;
    padding: 0 .5rem;
    background: rgba(0, 0, 0, .8) !important;
    border-radius: 2rem !important;
    width: max-content !important;
    min-width: 7.5em;
    min-height: auto !important;
    max-width: 80%;
}
</style>
