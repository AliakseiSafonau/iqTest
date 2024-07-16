<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/result')
  }, 2000)
})
</script>

<template>
  <div class="question">Обработка<br>результатов</div>
  <div class="content">
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  <div class="answers">Определение стиля мышления........... .... ...................................................</div>
</template>

<style scoped>

  .question{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-size: 23px;
    letter-spacing: 2px;
  }

  .content{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(210deg);
  }

  .answers{
    font-family: 'PTSerifRegular',serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    color: #ffffff;
    letter-spacing: 0.9px;
  }

  .lds-default {
    display: inline-block;
    position: relative;
    width: 70px;
    height: 70px;
    color: #3BDE7C
  }

  .lds-default div {
    position: absolute;
    width: 15px;
    height: 15px;
    background: currentColor;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }

  .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 36.8px;
    left: 66.24px;
  }

  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22.08px;
    left: 62.29579px;
  }

  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11.30421px;
    left: 51.52px;
  }

  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7.36px;
    left: 36.8px;
  }

  .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11.30421px;
    left: 22.08px;
  }

  .lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22.08px;
    left: 11.30421px;
  }

  .lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 36.8px;
    left: 7.36px;
  }

  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 51.52px;
    left: 11.30421px;
  }

  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62.29579px;
    left: 22.08px;
  }

  .lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66.24px;
    left: 36.8px;
  }

  .lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 62.29579px;
    left: 51.52px;
  }

  .lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 51.52px;
    left: 62.29579px;
  }

  @keyframes lds-default {
    0% {
      transform: scale(0);
    }

    10% {
      transform: scale(0.1);
    }

    20% {
      transform: scale(0.2);
    }

    30% {
      transform: scale(0.3);
    }

    40% {
      transform: scale(0.4);
    }

    50% {
      transform: scale(0.5);
    }

    60% {
      transform: scale(0.6);
    }

    70% {
      transform: scale(0.7);
    }

    80% {
      transform: scale(0.8);
    }

    90% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }

</style>