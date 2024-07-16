<script setup>
import HeaderView from "./components/HeaderView.vue";

</script>

<template>
 <div class="wrapper">
    <header class="header" id="header">
      <header-view />
    </header>
   <RouterView />
  </div>
</template>

<style scoped>

  .wrapper{
    position: relative;
  }
  .header{
    width: 100%;
    background-color: #181818;
  }
</style>
