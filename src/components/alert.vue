<template lang="html">
    <alert v-model="alert.show" :content="alert.content" :title="alert.title" @on-hide="alert.onHide"
        @on-show="alert.onShow">
    </alert>
</template>

<script>
import { Alert } from 'vux'
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {
        Alert
    },
    computed: {
        ...mapGetters(['alert']),
    },
    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="scss"></style>
