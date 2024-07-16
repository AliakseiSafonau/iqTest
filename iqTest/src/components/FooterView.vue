<script setup>

</script>

<template>
  <div class="footer-container">
    <p class="footer-p">
      <span class="footer-span1">И получите рекомендации</span>
      <span class="footer-span1">по развитию своего интеллекта</span>
    </p>
  </div>
  <div class="under-footer-content">
    <div class="switch-up">
      <span class="footer-span2">и улучшению финансового благосостояния и личной жизни</span>
      <a href="#header" class="switch-up__button">
        <span class="switch-up__img">
          <img src="../assets/images/arrow.png" alt="arrow-up">
        </span>
        <span class="switch-up__span">Подробнее</span>
      </a>
    </div>
    <div class="recommendations" id="recommendations">
      <div class="recommendations-content">
        <div class="quotes quote-up">
          <img src="../assets/images/quotes.png" alt="quotes">
        </div>
        <div class="quotes quote-down">
          <img src="../assets/images/quotes.png" alt="quotes">
        </div>
        <span>Профессиональный</span>
        <span>IQ-тест позволяет не только определить коэффициент вашего интеллекта,</span>
        <span>но и выработать список рекомендаций для</span>
        <span>повышения этого показателя.</span>
      </div>
    </div>
    <div class="advice">
      <div class="advice-content">
        <p>
          Также по результатам теста<br>
          <span class="upperCase"><b>вы получите</b></span>
          подробные<br>
          <span class="upperCase"><b>советы</b></span>
          по определению наиболее перспективной
          <span class="upperCase"><b>для вашего<br> типа </b></span>
          <span><b>интеллекта </b></span>
          <span class="upperCase"><b>сферы деятельности, </b></span><br>
          <span>которая принесет вам скорейший финансовый результат.</span>
        </p>
        <div class="advice-image">
          <img src="../assets/images/image3.png" alt="brain">
        </div>
        <div class="advice-image">
          <RouterLink to="/test/gender" class="main-button">ПРОЙТИ ТЕСТ</RouterLink>
        </div>
      </div>
    </div>
    <div class="timing">
      <div class="lightning lightning-up">
        <img src="../assets/images/lightning.png" alt="quotes">
      </div>
      <div class="lightning lightning-down">
        <img src="../assets/images/lightning.png" alt="quotes">
      </div>
      <div class="timing-content">
        <p class="timing-p1">Прохождение теста займет у вас не более <span>12 минут</span>, а его <b>результаты</b> вы сможете <span>использовать всю жизнь.</span></p>
        <p class="timing-p2">Профессиональная интерпретация и детально <b>проработанные<br>рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.</p>
        <div class="timing-button">
          <RouterLink to="/test/gender">ПРОЙТИ ТЕСТ</RouterLink>">
        </div>
      </div>
    </div>
    <p class="copyright">&#169; 2019</p>
  </div>
</template>

<style scoped>
  .footer-container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 286px;
  }
  .footer-p{
    font-family: 'PTSerifBold',serif;
    display: flex;
    flex-direction: column;
  }
  .footer-span1{
    font-size: 15px;
    color: #ffc700;
    text-align: center;
    letter-spacing: 1px;
  }
  .footer-span2{
    font-family: 'PTSerifBold',serif;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 1px;
  }

  .under-footer-content{
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .switch-up{
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    max-width: 286px;

  }

  .switch-up__button{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .switch-up__img{
    display: flex;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    justify-content: center;
    align-items: center;

  }

  .switch-up__span{
    font-family: 'PTSerifRegular',serif;
    padding-top: 3px;
    color: #ffffff;
    font-size: 10px;
    font-weight: 100;
  }

  .recommendations{
    width: 100%;
    background: url("../assets/images/image1.png");
    display: flex;
    justify-content: center;
  }

  .recommendations-content{
    position: relative;
    padding-top: 83px;
    padding-bottom: 60px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .quotes, .lightning{
    position: absolute;
  }

  .quote-up{
    left: 0;
    top: 43.3px;
  }

  .quote-down{
    bottom: 32.65px;
    right: 0;
  }

  .quote-down img{
    transform: rotate(180deg);
  }

  .recommendations-content span{
    font-family: 'YesevaOneRegular',serif;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    line-height: 1.2;
  }

  .advice{
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
  }

  .advice-content{
    padding-top: 38px;
    padding-bottom: 40px;
    max-width: 298px;
    display: flex;
    flex-direction: column;
  }

  .advice-content p{
    font-family: 'PTSerifRegular',serif;
    font-size: 16px;
    letter-spacing: 1px;
    padding-bottom: 32px;
  }

  .upperCase{
    text-transform: uppercase;
  }

  .advice-image{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .advice-image a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'MerriweatherBold',serif;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    width: 189px;
    height: 41px;
    background-color: #FFC700;
    border-radius: 20px;
    cursor: pointer;
    color: black;
    margin-top: -8px;
  }

  .timing{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background: url("../assets/images/rain_bk2.png");
  }

  .timing-content{
    padding-top: 54px;
    padding-bottom: 10px;
    max-width: 303px;
    display: flex;
    flex-direction: column;
  }

  .timing-p1{
    font-family: 'MerriweatherRegular',serif;
    width: 262px;
    color: #ffffff;
    font-size: 13px;
    letter-spacing: 2px;
    padding-bottom: 30px;
  }

  .timing-p1 span{
    color: #FFC700;
    font-weight: bolder;
  }

  .timing-p2{
    font-family: MerriweatherRegular,serif;
    background: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    padding: 29px 15px 31px 14px;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.4;
    margin-bottom: 33px;
  }

  .timing-button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 52px;
  }

  .timing-button a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'MerriweatherBold',serif;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    cursor: pointer;
    color: #ffffff;
    border: 1px solid #ffffff;
  }

  .lightning-up{
    right: 0;
    top: 87px;
  }

  .lightning-down{
    z-index: 0;
    transform: scaleX(-1);
    left: 0;
    bottom: 63px;
  }

  .copyright{
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
  }
</style>