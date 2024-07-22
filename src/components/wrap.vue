<template lang="html">
    <div id="wrapper">
        <toast></toast>
        <alert></alert>
    </div>
</template>

<script>
const toast = () => import(/* webpackChunkName: "components/toast" */'@/components/toast')
const alert = () => import(/* webpackChunkName: "components/alert" */'@/components/alert')
export default {
    components: {
        toast,
        alert
    },
}
</script>

<style lang="scss" scoped>
</style>
