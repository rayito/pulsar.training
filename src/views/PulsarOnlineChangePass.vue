<template>
  <main class="change-pass">
    <h1 class="change-pass__title">ESTABLECER NUEVA CONTRASEÑA</h1>
    <p class="change-pass__subtitle">
      Crea tu nueva contraseña para acceder a Púlsar Online de una forma segura.
      </p>
    <transition name="fade">
      <div v-if="!successfulPassChange" class="change-pass__form">
        <div class="ps-field">
          <md-field>
            <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z" fill="white" fill-opacity="0.65"/>
            </svg>
            <label class="field-label">Contraseña actual</label>
            <md-input @keyup.enter="handleClick" type="password" class="field-input" v-model="currentPass"></md-input>
          </md-field>
        </div>
        <div class="ps-field">
          <md-field>
            <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z" fill="white" fill-opacity="0.65"/>
            </svg>
            <label class="field-label">Nueva contraseña</label>
            <md-input @keyup.enter="handleClick" type="password" class="field-input" v-model="newPass"></md-input>
          </md-field>
        </div>
        <div class="ps-field">
          <md-field>
            <svg class="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM12 3C10.34 3 9 4.34 9 6V8H15V6C15 4.34 13.66 3 12 3ZM6 20V10H18V20H6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15Z" fill="white" fill-opacity="0.65"/>
            </svg>
            <label class="field-label">Repetir nueva contraseña</label>
            <md-input @keyup.enter="handleClick" type="password" class="field-input" v-model="repeatPass"></md-input>
          </md-field>
        </div>
        <div class="field-error" :class="{'showError': isError}">{{ errorMessage }}</div>
        <div class="change-pass__controls">
          <div
            class="button solid change-pass__control-button" 
            @click="handleClick">
            CAMBIAR CONTRASEÑA
          </div>
          <LinkButton 
            class="change-pass__control-button" 
            button-text="CANCELAR" 
            link-to="/pulsar-online"
          />
        </div>
      </div>
      <div v-else class="change-pass__success">
        <p>¡La contraseña se ha cambiado correctamente!</p>
        <div class="change-pass__controls">
          <LinkButton 
            class="change-pass__control-button solid" 
            button-text="SEGUIR ENTRENANDO" 
            link-to="/pulsar-online"
          />
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import LinkButton from '@/components/atoms/LinkButton.vue';
import MD5 from 'crypto-js/md5';
import userLog from '@/services/userLog';

// const contentful = require('contentful-management');
import { createClient } from 'contentful-management';

export default {
  name: 'PulsarOnlineChangePass',
  components: {
    LinkButton,
  },
  data() {
    return {
      currentPass: '',
      newPass: '',
      repeatPass: '',
      errorMessage: 'Los datos no son correctos',
      isError: false,
      successfulPassChange: false,
    };
  },
  methods: {
    handleClick() {
      if (this.currentPass === '' || this.newPass === '' || this.repeatPass === '') {
        if (this.isError) {
          this.isError = false;
          setTimeout(() => {
            this.isError = true;
            this.errorMessage = 'Por favor, rellena todos los campos';
          }, 200);
        } else {
          this.isError = true;
          this.errorMessage = 'Por favor, rellena todos los campos';
        }
      } else if (this.newPass !== this.repeatPass) {
        if (this.isError) {
          this.isError = false;
          setTimeout(() => {
            this.isError = true;
            this.errorMessage = 'Las contraseñas no coinciden';
          }, 200);
        } else {
          this.isError = true;
          this.errorMessage = 'Las contraseñas no coinciden';
        }
      } else {
        this.isError = false;
        this.changePassAttempt();
      }
    },
    changePassAttempt() {
      const client = createClient({
        accessToken: 'CFPAT--Gy7PqjHFkN-kbitWa0m2Q8edHZbu8HbN2tW6JDe828',
      });

      const id = userLog.getUserID();
      console.log(`ID: ${id}`);

      client.getSpace('1cfepwuemnrk')
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.getEntry(id))
      .then((entry) => {
        if (entry !== null) {
          if (entry.fields.passwordHash['en-US'] === `${MD5(this.currentPass)}`) {
            this.isError = false;
            entry.fields.passwordHash['en-US'] = `${MD5(this.newPass)}`;
            this.successfulPassChange = true;
            return entry.update();
          } else {
            setTimeout(() => {
              this.isError = true;
              this.errorMessage = 'La contraseña actual no es correcta';
            }, 200);
           return false;
          }
        } else {
          setTimeout(() => {
            this.isError = true;
            this.errorMessage = 'Ha habido un error, contacta con nosotros';
          }, 200);
          return false;
        }
      })
      .catch(console.error);
    },
  },
};
</script>

<style lang="scss">
.change-pass {
  @import '~@/components/atoms/button.scss';
  @import '~@/scss/input';
  @include view-sizing;

  .change-pass__title {
    @include online-title;
    margin-top: 1rem;
    text-align: center;
  }

  .change-pass__subtitle {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65);
    margin: 0 auto 1rem;
    max-width: 400px;
  }

  .change-pass__controls {
    display: flex;
    justify-content: center;
    margin: 1rem auto;

    .change-pass__control-button {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      margin: 0 .25rem;
    }
  }

  .change-pass__success {
    p {
      max-width: 400px;
      text-align: center;
      margin: 0 auto 2rem auto;
      color: white;
    }
  }
}
</style>
