<script setup>
defineEmits(['handle-click'])
</script>

<template>
  <div class="question">Выберите цвет, который сейчас наиболее Вам приятен:</div>
  <div class="content"></div>
  <div class="answers" @click="$emit('handle-click')">
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
    <label><input type="radio" name="radio" /></label>
  </div>
</template>

<style scoped>

  .question{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 2px;
  }

  .content{
    display: flex;
    justify-content: center;
  }

  .answers{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  .answers label{
    font-family: 'PTSerifRegular',serif;
    color: #000000;
    display: flex;
    font-size: 20px;
    background-color: rgb(255, 255, 255);
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    outline: 6px solid rgba(0, 0, 0, 0);
    outline-offset: -6px;
    transition: all 120ms ease-in-out;
  }

  label:has(input[type="radio"]:checked){
    outline: 6px solid #FFC700;
    outline-offset:-6px;
  }

  .answers label:nth-child(1){
    background-color: #A8A8A8;
  }
  .answers label:nth-child(2){
    background-color: #0000A9;
  }
  .answers label:nth-child(3){
    background-color: #00A701;
  }
  .answers label:nth-child(4){
    background-color: #F60100;
  }
  .answers label:nth-child(5){
    background-color: #FDFF19;
  }
  .answers label:nth-child(6){
    background-color: #A95403;
  }
  .answers label:nth-child(7){
    background-color: #000000;
  }
  .answers label:nth-child(8){
    background-color: #850068;
  }
  .answers label:nth-child(9){
    background-color: #46B2AC;
  }
</style>