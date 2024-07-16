<script setup>

</script>

<template>
  <div class="main-container">
    <span class="main-span">ПРОЙДИТЕ ТОЧНЫЙ И БЫСТРЫЙ</span>
    <h1 class="main-title">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</h1>
    <RouterLink to="/test/gender" class="main-button">ПРОЙТИ ТЕСТ</RouterLink>
  </div>
</template>

<style scoped>
  .main-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    max-width: 286px;
  }

  .main-span{
    font-family: 'PTSerifRegular',serif;
    color: #ffffff;
    padding-bottom: 20px;
    letter-spacing: 1px;
  }

  .main-title{
    font-family: 'YesevaOneRegular',serif;
    font-size: 30px;
    color: #ffc700;
    text-align: center;
    padding-bottom: 150px;
    line-height: 1.3;
    letter-spacing: 2px;
    font-weight: lighter;
  }

  .main-button{
    font-family: 'MerriweatherBold',serif;
    position: absolute;
    top: 60vh;
    color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    letter-spacing: 1px;
    width: 189px;
    height: 41px;
    background-color: #FFC700;
    border-radius: 20px;
    cursor: pointer;
  }
</style>