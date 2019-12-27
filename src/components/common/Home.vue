<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar :rush="rush"></v-sidebar>
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags :rush="rush"></v-tags>
            <div class="content">
                <transition name="slide-fade">
                    <keep-alive :include="tagsList">
                        <router-view :key="activeDate"></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            activeDate: 123
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
    methods: {
        rush() {
            this.activeDate = new Date().valueOf();
        }
    }
};
</script>
<style scoped>
.slide-fade {
    position: absolute;
    left: 0;
    right: 0;
}
.slide-fade-enter-active {
    transition: all 0.8s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    left: 0;
    right: 0;
    transform: translateX(-50px);
    opacity: 0;
}

</style>
