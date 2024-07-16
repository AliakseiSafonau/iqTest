<script setup>
import '../../fonts.css'
import {ref} from "vue";
import FetchData from "../../components/test-components/FetchData.vue";
const jsonData = ref(null)

const time = ref('10:00')
let timer = 600

const setTime = (data=false) => {
  time.value = `${Math.floor(timer / 60)}:${timer % 60 > 9? timer % 60:'0' + timer % 60}`
  if(data){time.value = '0:00'}
}

const myTimer = setInterval(() => {
  timer--
  if (timer < 0) {clearInterval(myTimer); setTime(true)}
  else setTime()
}, 1000)

const fetchData = () => {
  clearInterval(myTimer)
  fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      jsonData.value = data
    })
}

</script>

<template>
  <main class="main">
    <div class="result-1">
      <h2 class="result-01">Ваш результат рассчитан: </h2>
      <p class="result-001">
        <span><u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на</span>
        <span>15 пунктов отличается от среднего в большую или меньшую сторону!</span>
      </p>
      <h2 class="result-02">Скорее получите свой результат!</h2>
      <p class="result-002">В целях защиты персональных<br>данных результат теста, их<br>подробная интерпретация
        и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</p>
      <p class="result-003">Звоните скорее, запись доступна всего<br><span>{{ time }}</span> минут</p>
      <div class="result-2">
        <button @click="fetchData" class="result-004">
          <img src="../../assets/images/call.png" alt="call">
          <span>Позвонить и прослушать результат</span>
        </button>
        <a class="link" href="#fetch-data"></a>
      </div>
    </div>
  </main>
  <div class="result__footer">
    <div class="result__footer__container">
      <div class="result__footer__content">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
        <FetchData v-if="jsonData" :data="jsonData"/>
      </div>
    </div>
  </div>

</template>

<style scoped>

  .main{
    width: 100%;
    margin: 0 auto;
  }

  .result-1{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 18px;
    width: 320px;
  }

  .result-01{
    font-family: 'PTSerifBold',serif;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 2px;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
  }

  .result-001{
    display: flex;
    flex-direction: column;
    width: 286px;
    text-align: center;
    padding-bottom: 22px;
  }

  .result-001 span{
    font-family: 'PTSerifRegular',serif;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 1.1;
  }

  .result-02{
    font-family: 'PTSerifBold',serif;
    font-size: 16px;
    letter-spacing: 1px;
    color: #3BDE7C;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 12px;
  }

  .result-002{
    font-family: 'RobotoMedium',serif;
    width: 256px;
    padding: 15px 12px;
    background-color: rgba(28, 39, 65, 1);
    border-radius: 6px;
    color: white;
    font-size: 8px;
    line-height: 2;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .result-003{
    font-family: 'PTSerifRegular',serif;
    color: #3BDE7C;
    text-align: center;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 1;
    padding: 10px 0;
  }

  .result-003 span{
    font-size: 20px;
  }

  .result-2{
    width: 100%;
  }

  .result-004{
    padding: 0 15px;
    margin: 0 auto;
    width: 290px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EB1B00;
    color: white;
    gap: 18px;
    border-radius: 5px;
    cursor: pointer;
  }

  .result-004 span{
    font-family: 'RobotoBlack',serif;
    text-align: left;
    font-size: 15px;
  }

  .result__footer{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
  }

  .result__footer__container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .result__footer__content{
    font-family: 'RobotoRegular',serif;
    width: 294px;
    font-size: 7px;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
  }

</style>