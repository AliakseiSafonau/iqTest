<script setup>
import {onMounted} from "vue";

const props = defineProps(['data'])
const jsonData = props.data

onMounted(() => {
  document.querySelector('body').style.overflow = 'visible'
  const link = document.querySelector('.link')
  let event = new MouseEvent("click")
  setTimeout(()=>{},100)
  link.dispatchEvent(event)
})
</script>

<template>
  <div id="fetch-data" class="fetch-data">
    <div class="fetch-data__container">
      <p>name: {{jsonData.name}}</p>
      <p>height: {{jsonData.height}}</p>
      <p>mass: {{jsonData.mass}}</p>
      <p>hair color: {{jsonData['hair_color']}}</p>
      <p>skin color: {{jsonData['skin_color']}}</p>
      <p>eye color: {{jsonData['eye_color']}}</p>
      <p>birth_year: {{jsonData['birth_year']}}</p>
      <p>gender: {{jsonData.gender}}</p>
    </div>
  </div>
</template>

<style scoped>
  .fetch-data{
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh);
  }

  .fetch-data__container p{
    font-family: 'RobotoBlack',serif;
    font-size: 20px;
    color: white;
  }

</style>