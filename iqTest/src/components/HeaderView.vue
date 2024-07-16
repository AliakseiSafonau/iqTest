<script setup>
  import '../fonts.css';

  import {ref, watch} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute()
  const nav = ref()
  const headerBrain = ref('home')
  const navHandler = () => {
    nav.value.classList.toggle('active')
  }

  if (route.name === 'home') {
    headerBrain.value = 'home'
  }

  watch(
    () => route.params.id,
    (newId, oldId) => {
      console.log(route.name, route.params.id)
      if(route.name === 'result') {
        headerBrain.value = 'result'
      } else {
        headerBrain.value = 'test'
      }
    }
  )
</script>

<template>
  <div class="header-container">
    <nav class="header__nav">
      <ul class="nav__links">
        <li class="nav__link">
          <span class="nav__link__item_active">Главная</span>
        </li>
        <li class="nav__link">
          <a class="nav__link__item" href="#">Информация о тесте</a>
        </li>
        <li class="nav__link">
          <a class="nav__link__item" href="#">Пройти тест</a>
        </li>
      </ul>
    </nav>
    <nav ref="nav" class="header__nav-min">
      <div class="header__nav-min__container" @click="navHandler">
        <div class="header__nav-min__icon">
          <img src="../assets/images/icon.png" alt="exit-png">
        </div>
        <ul class="nav-min__links">
          <li class="nav-min__link_active">
            <RouterLink to="/" class="nav-min__link__item">Главная</RouterLink>
          </li>
          <li class="nav-min__link">
            <a href="/#recommendations" class="nav-min__link__item">Информация о тесте</a>
          </li>
          <li class="nav-min__link">
            <RouterLink to="/test/gender" class="nav-min__link__item_active">Пройти тест</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="burger-menu" @click="navHandler">
      <div class="burger-menu__svg"></div>
    </div>
    <div class="header__min-content">
      <div v-if="headerBrain === 'result'" class="header__min-content__div">
        <div class="header-image">
          <img src="../assets/images/brain.png" alt="brain">
        </div>
        <span class="header__min-content__access">Готово!</span>
      </div>
      <div v-else-if="headerBrain === 'test'" class="header__min-content__div">
        <div class="header-image">
          <img src="../assets/images/brain.png" alt="brain">
        </div>
        <span class="header__min-content__iq">тест на определение IQ</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header-container{
    display: flex;
    padding: 17px 0 13px 15px;
  }

  .header__nav{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .nav__links{
    display: flex;
    gap: 20px;
  }

  .nav__link, .nav__link__item{
    font-family: RobotoLight,serif;
    color: #cdcdcd;
  }

  .header__nav-min{
    display: none;
  }

  .burger-menu{
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
  }

  @media screen and (max-width: 767px) {

    .header-container{
      display: flex;
      align-items: center;
      padding: 0 0 0 15px;
    }

    .header__min-content{
      width: 100%;
    }

    .header__nav{
      display: none;
    }

    .burger-menu{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 16px;
      overflow: visible;
      opacity: 1;
      padding: 23px 0;
    }

    .burger-menu:hover{
      cursor: pointer;
    }

    .burger-menu__svg{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      border-top: 0.15em solid rgba(218, 218, 218, 0.6);
    }

    .burger-menu__svg::before{
      content: '';
      position: absolute;
      left: 0;
      top: -8px;
      width: 24px;
      border-top: 0.15em solid rgba(218, 218, 218, 0.6);
    }

    .burger-menu__svg::after{
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 24px;
      border-top: 0.15em solid rgba(218, 218, 218, 0.6);
    }

    .header__nav-min{
      display: flex;
      position: absolute;
      width: 320px;
      height: 100vh;
      background-color: #292929;
      top: 0;
      left: -500px;
      z-index: 10;
      transition: all 0.3s ease-in;
    }

    .header__nav-min__container{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;

    }

    .header__nav-min__icon{
      position: absolute;
      top: 18px;
      right: 13px;
    }

    .header__nav-min.active{
        left: 0;
        transition: all 0.3s ease-in;
    }

    .nav-min__links{
      display: flex;
      flex-direction: column;
      padding-left: 23px;
      padding-top: 109px;
      gap: 40px;
    }

    .nav-min__link__item, .nav-min__link__item_active{
      font-family: RobotoLight,serif;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 1.53;
    }

    .nav-min__link__item{
      color: #cdcdcd;
      transition: all 0.3s ease;
    }

    .nav-min__link__item:hover{
      color: #fafafa;
    }

    .nav-min__link__item_active{
      color: #FFC700;
    }

    .nav-min__link_active{
      color: #fafafa;
    }

    .header__min-content__div{
      display: flex;
      color: white;
      width: 100%;
    }

    .header__min-content__iq{
      font-family: 'YesevaOneRegular',serif;
      font-size: 12px;
      color: #FFC700;
      text-transform: uppercase;
      padding-top: 15px;
      padding-left: 9px;
      letter-spacing: 1px;
    }

    .header__min-content__access{
      font-family: 'YesevaOneRegular',serif;
      font-size: 20px;
      color: #FFC700;
      text-transform: uppercase;
      padding-top: 10px;
      padding-left: 29px;
      letter-spacing: 2px;
    }

    .header-image{
      width: 47px;
      height: 46px;
      margin-left: 9px;
    }
}
</style>