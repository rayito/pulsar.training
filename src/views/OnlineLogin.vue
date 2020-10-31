<template>
  <main class="login">
    <h1 class="login__title">PūLSAR/ONLINE</h1>
    <md-field>
      <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z" fill="white" fill-opacity="0.65"/>
      </svg>
      <label class="field-label">Correo electrónico</label>
      <md-input class="field-input" v-model="user"></md-input>
    </md-field>
    <md-field>
      <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z" fill="white" fill-opacity="0.65"/>
      </svg>
      <label class="field-label">Contraseña</label>
      <md-input type="password" class="field-input" v-model="pass"></md-input>
    </md-field>
    <ActionButton 
      class="online__access" 
      button-text="ACCEDER" 
      button-style="solid"
    />
    <div class="login__new-member">
      <span class="new-member__divider"></span>
      <div class="new-member__text">¿Nuevo en PÚLSAR/ONLINE?</div>
      <span class="new-member__divider"></span>
    </div>
    <LinkButton 
      class="online__access" 
      button-text="NECESITO UNA CUENTA" 
      link-to="nueva-cuenta"
    />
  </main>
</template>

<script>
import ActionButton from '@/components/atoms/ActionButton.vue';
import LinkButton from '@/components/atoms/LinkButton.vue';

export default {
  name: 'OnlineLogin',
  components: {
    ActionButton,
    LinkButton,
  },
  data() {
    return {
      user: '',
      pass: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 0 1rem;
  padding-top: calc(56px + .5rem);
  min-height: calc(100vh - 80px);
  
  @include respond-to(descop) {
    padding-top: 0;
  }

  .login__title {
    margin-top: 0;
    font-family: $chromo;
    font-style: oblique;
    font-size: 3rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    text-align: center;

    @supports (-webkit-text-stroke: 1px white) {
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }
  }

  .md-field {
    display: flex;
    align-items: center;
    padding-bottom: .5rem;

    &:after {
      background: rgba(255,255,255,.75);
    }
    &:before {
      background: rgba(255,255,255,1);
    }
  }

  .field-icon {
    margin-left: 12px;

    path {
      transition: fill-opacity .2s ease;
    }
  }

  .md-focused {
    .field-icon path {
      fill-opacity: 1;
    }
  }

  .field-label {
    margin-left: 2.75rem;
    font-family: 'Roboto', sans-serif;
    color: rgba(255,255,255,.75);
    letter-spacing: 0.02rem;
  }

  .field-input {
    color: rgba(255,255,255,1);
    padding-left: 9px;
  }

  .online__access {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 1rem auto;
  }
  
  .login__new-member {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .new-member__divider {
    width: 100%;
    height: 1px; 
    margin: 0 .5rem;
    background: rgba(255, 255, 255, 0.35);
  }

  .new-member__text {
    flex-shrink: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(255,255,255,.75);
  }
}
</style>
