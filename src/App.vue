<template>
  <div id="app">
    <transition :name="transitionName">
        <keep-alive>
          <router-view class='child-view'></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import TabBar from './Pages/TabBar.vue'
export default {
  name: 'app',
  data () {
    return {
        transitionName: 'slide-left'
    }
  },
  watch:{
    '$route' (to, from) {
        let isBack = this.$router.isBack
        if (isBack) {
            this.transitionName = 'slide-right'
        } else {
            this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
    }
  },
  components:{
    'tabbar':TabBar
  }
}
</script>

<style>
    .child-view {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all 1s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100%,0);
    }
    .header {
        position: absolute;
        height: 44px;
        background: #0058f1;
        width: 100px;
    }
    ul {
    list-style: none;
    }
    *{
    margin: 0;
    padding: 0;
    }
</style>
