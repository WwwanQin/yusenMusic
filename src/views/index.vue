<template>
    <div class="index">
        <component_head/>
        <component_body/>
        <component_footer/>
    </div>
</template>

<script>
// 引入头部组件
import component_head from '@/components/component-head'
// 引入内容组件
import component_body from '@/components/component-body'
// 引入播放控件组件
import component_footer from '@/components/component-footer'
export default {
    components:{
        component_head,
        component_body,
        component_footer
    },
    methods:{
    }
}
</script>

<style scoped lang="less">
    .index{
        margin-top: -6 / 360 * 100vw;
    }
</style>