<script setup>
defineEmits(['handle-click'])
</script>

<template>
  <div class="question">Вставьте подходящее<br>число</div>
  <div class="content">
    <img src="../../assets/images/image5.png" alt="star">
  </div>
  <hr/>
  <div class="answers" @click="$emit('handle-click')">
    <label>
      <input type="radio" name="radio" />
      34
    </label>
    <label>
      <input type="radio" name="radio" />
      36
    </label>
    <label>
      <input type="radio" name="radio" />
      53
    </label>
    <label>
      <input type="radio" name="radio" />
      44
    </label>
    <label>
      <input type="radio" name="radio" />
      66
    </label>
    <label>
      <input type="radio" name="radio" />
      42
    </label>
  </div>
</template>

<style scoped>

  hr{
    margin: 0;
    width: 320px;
    border-top: 4px solid rgba(242, 243, 243, 0.3);
  }

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
    gap: 8px;
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