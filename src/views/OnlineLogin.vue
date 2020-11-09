<template>
  <main class="login">
    <h1 class="login__title">PūLSAR/ONLINE</h1>
    <div class="ps-field">
      <md-field>
        <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z" fill="white" fill-opacity="0.65"/>
        </svg>
        <label class="field-label">Correo electrónico</label>
        <md-input @keyup.enter="handleClick" type="email" class="field-input" v-model="user"></md-input>
      </md-field>
    </div>
    <div class="ps-field">
      <md-field>
        <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z" fill="white" fill-opacity="0.65"/>
        </svg>
        <label class="field-label">Contraseña</label>
        <md-input @keyup.enter="handleClick" type="password" class="field-input" v-model="pass"></md-input>
      </md-field>
    </div>
    <div class="field-error" :class="{'showError': isError}">{{ errorMessage }}</div>
    <div
      class="button solid online__access" 
      @click="handleClick">
      ACCEDER
    </div>
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
import LinkButton from '@/components/atoms/LinkButton.vue';
import MD5 from 'crypto-js/md5';
import userLog from '@/services/userLog';

// const contentful = require('contentful-management');
import { createClient } from 'contentful-management';

export default {
  name: 'OnlineLogin',
  components: {
    LinkButton,
  },
  data() {
    return {
      user: '',
      pass: '',
      errorMessage: 'Los datos no son correctos',
      isError: false,
    };
  },
  methods: {
    handleClick() {
      if (this.user === '' || this.pass === '') {
        if (this.isError) {
          this.isError = false;
          setTimeout(() => {
            this.isError = true;
            this.errorMessage = 'Por favor, rellena tu correo y contraseña';
          }, 200);
        } else {
          this.isError = true;
          this.errorMessage = 'Por favor, rellena tu correo y contraseña';
        }
      } else {
        this.isError = false;
        this.loginAttempt();
      }
    },
    loginAttempt() {
      const client = createClient({
        accessToken: 'CFPAT--Gy7PqjHFkN-kbitWa0m2Q8edHZbu8HbN2tW6JDe828',
      });

      client.getSpace('1cfepwuemnrk')
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.getEntries({
        content_type: 'user',
        'fields.userMail': this.user,
      }))
      .then((entries) => { 
        console.log(entries.items);
        if (entries.items && entries.items.length > 0) {
          console.log(entries);
          const user = entries.items[0].fields;
          const pass = user.passwordHash['en-US'];
          const enteredPass = `${MD5(this.pass)}`;
          console.log(`Pass: ${pass}`);
          console.log(`Login Pass: ${enteredPass}`);
          if (enteredPass === pass) {
            this.isError = false;
            console.log('LOGIN SUCCESS');
            userLog.login({
              user: user.userMail['en-US'],
              userName: user.userName['en-US'],
              id: entries.items[0].sys.id,
              token: Date.now(),
            });
            this.$router.replace('/pulsar-online');
          } else {
            setTimeout(() => {
              this.isError = true;
              this.errorMessage = 'La contraseña no es correcta';
            }, 200);
          }
        } else {
          this.isError = false;
          setTimeout(() => {
            this.isError = true;
            this.errorMessage = 'El usuario no existe';
          }, 200);
        }
      })
      .catch(console.error);
    },
  },
};
</script>

<style lang="scss">
.login {
  @import '~@/components/atoms/button.scss';
  @import '~@/scss/input';
  @include view-sizing;

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

    @include respond-to(not-phone) {
      font-size: 14px;
    }
  }
}
</style>
