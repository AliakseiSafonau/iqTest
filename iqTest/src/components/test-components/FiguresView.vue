<script setup>
defineEmits(['handle-click'])
</script>

<template>
  <div class="question">Выберите правильную фигуру из четырёх пронумерованных.</div>
  <div class="content">
    <img src="../../assets/images/image6.png" alt="star">
  </div>
  <div class="answers" @click="$emit('handle-click')">
    <label>
      <input type="radio" name="radio" />
      1
    </label>
    <label>
      <input type="radio" name="radio" />
      2
    </label>
    <label>
      <input type="radio" name="radio" />
      3
    </label>
    <label>
      <input type="radio" name="radio" />
      4
    </label>
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
    gap: 29px;
    width: 100%;
  }

  .answers label{
    cursor: pointer;
    font-family: 'PTSerifRegular',serif;
    color: #000000;
    display: flex;
    font-size: 20px;
    background-color: rgb(255, 255, 255);
    width: 41px;
    height: 41px;
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
</style>