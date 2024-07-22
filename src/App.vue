<template>
<div id="app">
    <component v-bind:is="component" />
</div>
</template>

<script>
const init = () => import( /* webpackChunkName: "views/init" */ '@/views/init')
import common from '$COM'
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    components: {
        init
    },
    data() {
        return {
            component: null
        }
    },
    computed: {
        ...mapGetters(['language']),
    },
    watch: {
        language(v) {
            this.$i18n.locale = v
            let lang = this.$route.params.lang
            if (!lang || !lang == v) return
            this.$router.replace({
                params: { lang: v },
                query: this.$route.query
            })
        }
    },
    created() {
        common.Util.initMain(this);
        common.Util.ready().then(() => this.component = 'init')
    }
}
</script>

<style lang="scss">
@import '~@/style/base'
</style>
