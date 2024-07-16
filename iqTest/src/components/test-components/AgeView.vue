<script setup>

defineEmits(['handle-click'])

</script>

<template>
  <div class="question">Укажите ваш возраст:</div>
  <div class="content"></div>
  <div class="answers" @click="$emit('handle-click')">
    <label>
      <input type="radio" name="radio" />
      До 18
    </label>
    <label>
      <input type="radio" name="radio" />
      От 18 до 28
    </label>
    <label>
      <input type="radio" name="radio" />
      от 29 до 35
    </label>
    <label>
      <input type="radio" name="radio" />
      От 36
    </label>
  </div>
</template>

<style scoped>
  .question{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-size: 20px;
  }
  .answers{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .answers label{
    font-family: 'PTSerifRegular',serif;
    color: #ffffff;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 39px;
    font-size: 18px;
    background-color: rgba(242, 243, 243, 0.3);
    height: 50px;
    width: 320px;
    padding-left: 35px;
    align-items: center;
    cursor: pointer;
    transition: all 120ms ease-in-out;
  }

  input[type="radio"]{
    font: inherit;
    color: currentColor;
    width: 1.25em;
    height: 1.25em;
    border: 0.1em solid currentColor;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0);
  }

  input[type="radio"]::before {
    content: "";
    width: 1.25em;
    height: 1.25em;
    border-radius: 50%;
    transform: scale(0);
    border: 0.1em solid #ffffff;
    transition: all 120ms ease-in-out;
    background-color: blue;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    border: 0.1em solid black;
  }
  label:has(input[type="radio"]:checked){
    background-color: #FFC700;
    color: #272727;
  }
</style>