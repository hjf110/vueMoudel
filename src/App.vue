<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css'; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
/* 进度条颜色 */
#nprogress .bar {
    /* //自定义颜色 */
    background: #3282d3 !important;
    height: 5px !important;
    opacity: 0.9 !important;
}
</style>
