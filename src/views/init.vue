<template lang="html">
    <div class="init-main">
        <x-template></x-template>
        <x-wrap></x-wrap>
    </div>
</template>

<script>
const xTemplate = () => import(/* webpackChunkName: "views/template" */'@/views/template')
const xWrap = () => import(/* webpackChunkName: "components/wrap" */'@/components/wrap')
export default {
    components: {
        xTemplate,
        xWrap
    }
}
</script>
<style lang="scss">
.init-main {
    width: 100%;
}
</style>
