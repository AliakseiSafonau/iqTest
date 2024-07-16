<script setup>

import MainView from "../../components/MainView.vue";
import FooterView from "../../components/FooterView.vue";

</script>

<template>
  <main class="main">
    <main-view />
  </main>
  <footer class="footer">
    <footer-view />
  </footer>
</template>

<style scoped>
  .main{
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100% + 50px);
    background: center / contain no-repeat url("../../assets/images/rain_bk.png");
  }

  .footer{
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
