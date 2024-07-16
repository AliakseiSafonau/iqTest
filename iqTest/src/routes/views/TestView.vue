<script setup>

import { onMounted, ref, watch} from "vue";
import { useRoute } from "vue-router";
import GenderView from "../../components/test-components/GenderView.vue";
import AgeView from "../../components/test-components/AgeView.vue";
import UnnecessaryView from "../../components/test-components/UnnecessaryView.vue";
import NumbersView from "../../components/test-components/NumbersView.vue";
import ColorsView from "../../components/test-components/ColorsView.vue";
import ColorsnextView from "../../components/test-components/ColorsnextView.vue";
import FiguresView from "../../components/test-components/FiguresView.vue";
import ImportantView from "../../components/test-components/ImportantView.vue";
import DefinitionView from "../../components/test-components/DefinitionView.vue";
import InsertView from "../../components/test-components/InsertView.vue";
import ProcessingView from "../../components/test-components/ProcessingView.vue";
import CitiesView from "../../components/test-components/CitiesView.vue";
import ResultView from "./ResultView.vue";

const route = useRoute()
const test = ref('gender')
const url = ref('/test/age')

const button = ref('page')
const bar = ref()

let count = 10

onMounted(() => {
  document.querySelector('body').style.height = '100vh'
})

const counter = () => {
  count += 8.2
  bar.value.style.width = `${count}%`
}

const linkHandler = () => {
  button.value = ''
}

watch(
  () => route.params.id,
  (newId, oldId) => {
    test.value = newId
    test.value === 'age'? url.value = '/test/unnecessary' : test.value === 'unnecessary'? url.value = '/test/numbers' :
      test.value === 'numbers'? url.value = '/test/colors' : test.value === 'colors'? url.value = '/test/colorsnext' :
        test.value === 'colorsnext'? url.value = '/test/cities' : test.value === 'cities'? url.value = '/test/figures' :
          test.value === 'figures'? url.value = '/test/important' : test.value === 'important'? url.value = '/test/definition' :
            test.value === 'definition'? url.value = '/test/insert' : test.value === 'insert'? url.value = '/test/processing' : url.value = '/result'
    button.value = 'page'
  }
)

</script>

<template>
  <main class="main">
    <div class="container">
      <div class="main-bar">
        <div class="main-bar__content">
          <div ref="bar" class="main-bar__inner"></div>
        </div>
      </div>
      <section class="main-content">
        <div v-if="test === 'gender'" class="main-container"><GenderView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='age'" class="main-container" ><AgeView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='unnecessary'" class="main-container" ><UnnecessaryView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='numbers'" class="main-container"><NumbersView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='colors'" class="main-container"><ColorsView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='colorsnext'" class="main-container"><ColorsnextView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='cities'" class="main-container"><CitiesView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='figures'" class="main-container"><FiguresView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='important'" class="main-container"><ImportantView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='definition'" class="main-container"><DefinitionView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='insert'" class="main-container"><InsertView @handle-click="linkHandler"/></div>
        <div v-else-if="test==='processing'" class="main-container"><ProcessingView/></div>
        <div v-else><ResultView/></div>
      </section>
      <div v-if="test !== 'processing'" class="main-button">
        <RouterLink v-bind:to=url class="main-button__link" :aria-current="button" @click="counter">ДАЛЕЕ</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .main{
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100% - 66px);
  }
  .container{
    max-width: 320px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-bar{
    width: 260px;
    height: 11px;
    margin-top: 17px;
  }

  .main-bar__content{
    width: 100%;
    height: 100%;
    background: #979797;
    border-radius: 10.5px;
  }

  .main-bar__inner{
    width: 10%;
    height: 100%;
    background: #3BDE7C;
    border-radius: 10.5px;
    transition: all 125ms ease-in-out;
  }

  .main-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
  }

  .main-container{
    display: flex;
    flex-direction: column;
    gap: 42px;
  }

  .main-button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-button__link{
    font-family: 'MerriweatherBold',serif;
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
    color: #272727;
  }

  [aria-current="page"] {
    font-family: 'MerriweatherBold',serif;
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    color: #8e8e8e;
    background-color: #dadada;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25) inset;
  }

</style>