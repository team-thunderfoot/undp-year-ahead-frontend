<template>
  <div class="b--site-a">
    <section class="b--section-a" id="index">
      <div>
        <h1>lets try it</h1>
        <p>scroll down.</p>
      </div>
    </section>
    <section class="b--section-a" id="one">
      <div class="b--section-a__back-items">
        <img class="b--section-a__back-items__media" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/background.png" alt="">
      </div>
      <div class="b--section-a__items">
        <div class="b--col-a">
          <h2>one item relative</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
        </div>
        <div class="b--col-b align-items-center">
          <!-- <img class="" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/screen.gif" alt=""> -->
        </div>
        <div class="b--col-a align-self-end">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
        </div>
      </div>
      <div class="b--section-a__front-items">
        <img class="b--section-a__front-items__media" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/foreground.png" alt="">
      </div>
    </section>
    <section class="b--section-b" id="two">
      <div class="b--section-b__back-items">
        <div class="b--section-b__back-items__artwork"></div>
        <img class="b--section-b__back-items__media" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/background.png" alt="">
      </div>
      <div class="b--section-b__items">
        <div class="b--col-a">
          <h2>two back relative</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
        </div>
        <div class="b--col-b align-items-center">
          <!-- <img class="" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/screen.gif" alt=""> -->
        </div>
        <div class="b--col-a align-self-end">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe amet perferendis? Voluptatum veritatis mollitia facilis. Nulla, adipisci eius cum veniam deserunt animi optio est, tenetur sint labore excepturi quos?</p>
        </div>
      </div>
      <div class="b--section-b__front-items">
        <img class="b--section-b__front-items__media" src="https://mailchimp.com/annual-report/assets/mailchimp-hq/foreground.png" alt="">
      </div>
    </section>
    <section class="b--section-c" id="three">
      <div class="b--card-a">
        <div class="b--card-a__back-items"></div>
        <div class="b--card-a__items">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi est porro quibusdam delectus atque vero quaerat rerum quas. Animi nobis fugit dolor facere doloribus dolores cumque omnis temporibus nostrum.</p>
        </div>
        <div class="b--card-a__front-items">
        </div>
      </div>
      <div class="b--card-a">
        <div class="b--card-a__back-items"></div>
        <div class="b--card-a__items"></div>
        <div class="b--card-a__front-items">
          <img class="b--card-a__front-items__media" src="./../assets/img/img1.png" alt="">
        </div>
      </div>
      <div class="b--card-a">
        <div class="b--card-a__back-items"></div>
        <div class="b--card-a__items">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae voluptas saepe at quibusdam molestias quae voluptatum quia eligendi! Esse neque id molestias? Natus quod unde, quae labore voluptatum nemo?</p>
        </div>
        <div class="b--card-a__front-items">
          <img class="b--card-a__front-items__media" src="./../assets/img/img1.png" alt="">
        </div>
      </div>
    </section>
    <section class="b--section-a" id="four">
      FOUR
    </section>
    <section class="b--section-a" id="five">
      FIVE
    </section>
    <footer class="b--footer-a">
      <nav class="b--nav-a">
        <a href="#index" class="b--nav-a__link">index</a>
        <a href="#one" class="b--nav-a__link">one</a>
        <a href="#two" class="b--nav-a__link">two</a>
        <a href="#three" class="b--nav-a__link">three</a>
        <a href="#four" class="b--nav-a__link">four</a>
        <a href="#five" class="b--nav-a__link">five</a>
      </nav>
    </footer>
  </div>
</template>

<script>
/* Components */
import gsap from 'gsap';
export default {
}
</script>
<style lang="scss">
  // @import '@/sass/style.scss';
  *{
    margin: 0;
    box-sizing: border-box;
  }
  body{
    min-height: calc(100vh - 20px);
  }
  img{
    max-height: 100%;
  }

  .align-self-center{
    align-self: center;
  }
  .align-self-start{
    align-self: flex-start;
  }
  .align-self-end{
    align-self: flex-end;
  }

  .b--site-a{
    display: flex;
    height: 100%;
    width: fit-content;
  }

  .b--col-a{
    width: 40vw;
    padding: 0 16px;
    &:not(:first-child){
      margin-left: 10vw;
    }
  }
  .b--col-b{
    width: 50vw;
    padding: 0 16px;
    &:not(:first-child){
      margin-left: 10vw;
    }
  }
  
  .b--section-a{
    min-width: 100vw;
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    &:nth-child(odd){
      background: red;
    }
    &__back-items{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      pointer-events: none;
      &__media{}
    }
    &__items{
      min-height: calc(100vh - 20px);
      padding: 80px 10vw;
      position: relative;
      z-index: 1;
      display: flex;
      width: fit-content;
    }
    &__front-items{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;
      &__media{}
    }
  }

  .b--section-b{
    min-width: 100vw;
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    &:nth-child(odd){
      background: red;
    }
    &__back-items{
      // width: 100%;
      // height: 100%;
      position: relative;
      z-index: 0;
      pointer-events: none;
      &__media{
        width: auto;
        max-width: none;
        height: 100%;
        // object-fit: cover;
      }
      &__artwork{
        width: 100px;
        height: 200px;
        background: olive;
        position: absolute;
        top: 32%;
        left: 75%;
      }
    }
    &__items{
      padding: 80px 10vw;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      width: fit-content;
    }
    &__front-items{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;
      &__media{
        width: auto;
        max-width: none;
        height: 100%;
        }
    }
  }

  .b--section-c{
    display: flex;
    height: 100%;
    width: fit-content;
    min-width: 100vw;
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    padding: 0 80px;
    background-image: url(./../assets/img/background.png);
    background-repeat: repeat-x;
    background-size: contain;
  }

  .b--card-a{
    height: calc(100vh - 20px);
    max-width: 40vw;
    &:not(:last-child){
      margin-right: 40px;
    }
    &__back-items{}
    &__items{}
    &__front-items{
      height: 100%;
      display: flex;
      align-items: flex-end;
      &__media{
        height: 50%;
        width: auto;
      }
    }
  }

  .b--footer-a{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: 10;
  }

  .b--nav-a{
    display: flex;
    justify-content: center;
    &__link{
      &:not(:last-child){
        margin-right: 32px;
      }
    }
  }

</style>