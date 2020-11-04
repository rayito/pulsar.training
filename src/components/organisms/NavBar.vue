<template>
  <header class="header" :class="{scrolled: scrolled}">
    <router-link 
      @click.native="closeMenu" 
      to="/" 
      class="header__logo"
      :class="{ 'header__logo--online': pathOnline }">
      <img v-if="windowWidth < 768" src="@/assets/images/LogoPulsarAnagramaBlanco.svg">
      <img v-else src="@/assets/images/LogoPulsar.svg">
    </router-link>
    
    <h1 v-if="pathOnline" class="header__online-title">PūLSAR/ONLINE</h1>

    <div class="clickable-area" 
         @click="toggleMenu"
         v-if="windowWidth <= 610 && !pathOnline">
      <div class="burger-icon" 
           :class="{ 'burger-icon--open': isMenuOpen }">
        <span class="stick"></span>
        <span class="stick middle"></span>
        <span class="stick"></span>
      </div>
    </div>
  
    <nav v-if="!pathOnline"
         class="header__navbar"
         :class="{ 'header__navbar--open': isMenuOpen }" >
      <ul>
        <li class="header__item">
          <router-link 
            @click.native="closeMenu" 
            class="header__link" 
            to="/online">PūLSAR ONLINE</router-link>
        </li>
        <li class="header__item">
          <router-link 
            @click.native="closeMenu" 
            class="header__link" 
            to="/nutricion">NUTRICIÓN</router-link>
        </li>
        <li class="header__item">
          <router-link 
            @click.native="closeMenu" 
            class="header__link" 
            to="/precios">PRECIOS</router-link>
        </li>
      </ul>
    </nav>
    <a v-if="pathOnline" @click="logout" href="" class="header__logout">
      <img src="@/assets/images/icon-logout.svg" />
    </a>
    <ActionButton 
      v-else
      class="reserve" 
      button-text="RESERVAR PRUEBA GRATIS" 
    />
  </header>
</template>

<script>
import ActionButton from '@/components/atoms/ActionButton.vue';
import userLog from '@/services/userLog';

export default {
  name: 'NavBar',
  components: {
    ActionButton,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isMenuOpen: false,
      scrollTop: window.pageYOffset,
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.$route);

    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    scrollTop: function (newValue) {
      if ( newValue > 50 ) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  methods: {
    handleScroll: function () {
      this.scrollTop = window.pageYOffset;
    },
    toggleMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu: function () {
      this.isMenuOpen = false;
    },
    logout: () => {
      userLog.logout();
    },
  },
  computed: {
    pathOnline: function () {
      return this.$route.fullPath === '/pulsar-online';
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 50;
  display: grid;
  gap: 1rem;
  grid-template-areas: 
    "start mid end";
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 56px;
  padding: 10px 8px;
  background-color: $pulsar-black;
  transition: background-color ease .5s, 
              box-shadow ease .5s;
  
  &.scrolled {
    box-shadow: 0 -1px 5px 0px $pulsar-black;
  }

  @include respond-to(tablet) {
    padding: 10px 24px;
  }

  @include respond-to(descop) {
    height: 88px;
    padding: .75rem 2rem;
    border-top: solid 4px $pulsar-green;
    background-color: rgba(5,5,5,.6);
    
    &.scrolled {
      background-color: $pulsar-black;
    }
  }
}

.header__logo {
  grid-area: mid;
  display: flex;

  @include respond-to(not-phablet) {
    grid-area: start;
  }

  img {
    @include respond-to(phablet) {
      height: 28px;
    }

    @include respond-to(tablet) {
      height: 38px;
    }
  }

  &.header__logo--online {
    grid-area: start;
    margin-left: .5rem;

    @include respond-to(not-phablet) {
      margin: 0;
    }
  }
}

.header__online-title {
  grid-area: mid;
  margin: 0;
  font-family: $chromo;
  font-style: oblique;
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  text-align: center;

  @supports (-webkit-text-stroke: 1px white) {
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
  }

  @include respond-to(not-phablet) {
    grid-area: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.header__navbar {
  grid-area: mid;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header__link {
    position: relative;
    padding: 0 .5rem;
    margin: 0 .5rem;
    font-family: "Chromoxome", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: white;
    opacity: 0.75;
    text-transform: uppercase;
    text-decoration: none;
    transition: font-weight linear .3s, color linear .3s;

    @include respond-to(descop) {
      font-size: 1rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translate(-50%,0);
      width: 0;
      height: 1px;
      background-color: $pulsar-green;
      transition: width ease-in-out .3s;
    }

    &.router-link-active {
      font-weight: 500;
      color: $pulsar-green;

      &::after {
        width: 100%;
      }
    }
  }

  @include respond-to(phablet) {
    position: absolute;
    z-index: 1000;
    overflow: hidden;
    top: 56px;
    left: 0;
    height: 0;
    width: 100vw;
    background: $pulsar-black;
    transition: height ease .3s;

    ul {
      flex-direction: column;
      height: calc(100% - 56px);
    }

    .header__item {
      margin: 1rem;
      opacity: 0;
      transition: opacity ease .6s;
    }

    .header__link {
      font-size: 2rem;
    }
    
    &.header__navbar--open {
      height: calc(100vh - 36px);

      .header__item {
        opacity: 1;
      }

      .header__item:nth-child(1) {
        transition-delay: .15s;
      }
      .header__item:nth-child(2) {
        transition-delay: .25s;
      }
      .header__item:nth-child(3) {
        transition-delay: .35s;
      }
      .header__item:nth-child(4) {
        transition-delay: .45s;
      }
    }
  }

  @include respond-to(tablet) {
    grid-area: mid;

    ul {
      flex-direction: row;
    }
  }
}

.reserve {
  grid-area: end;
}

.burger-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14px;
  padding: 0 10px;
  transition: height .15s ease-in-out,top .15s ease-in-out;
  cursor: pointer;

  .stick{
    display: block;
    width: 18px;
    height: 2px;
    transition: .25s;
    background-color: #fff;
  }
}

.clickable-area {
  grid-area: start;
  height: 100%;
  display: flex;
  align-items: center;
} 

.burger-icon--open{
  height: 16px;

  .stick:first-child {
    transform: rotate(-41deg) scaleX(1.2);
    transform-origin: right;
  }
  .middle {
    transform: scaleX(.1);
    transform-origin: center;
    opacity: 0;
  }
  .stick:last-child {
    transform: rotate(41deg) scaleX(1.2);
    transform-origin: right;
  }
}

.header__logout {
  grid-area: end;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
