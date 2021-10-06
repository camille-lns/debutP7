<template>
  <div class="page-container">
    <NavigationOffline />
    <b-container fluid>
      <b-row class="text-center justify-content-center">
        <b-col cols="12" lg="4">
          <b-card
            class="account-card border-0 shadow p-3 mb-5 mt-3 bg-white rounded"
          >
            <div class="pt-sm-3 pt-lg-0">
              <b-card-text class="login-text h4"><center>S'inscrire</center></b-card-text>

              <b-form>
                <b-form-group>
                  <b-form-input
                    id="lastNname"
                    type="text"
                    placeholder="Nom"
                    class="acc-input text-dark mb-2 mt-4 pl-3 w-100"
                    aria-label="Écrire votre nom de famille"
                  ></b-form-input>
                  <b-form-input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre prénom ici"
                  ></b-form-input>
                  <b-form-input
                    id="email"
                    type="email"
                    placeholder="Email"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre adresse mail"
                  ></b-form-input>
                  <b-form-input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre mot de passe"
                  ></b-form-input>
                </b-form-group>

                <center><b-button
                  v-on:click.stop="login()"
                  type="submit"
                  id="login-button"
                  class="account-btn font-weight-bold"
                  aria-label="Connexion"
                >
                  Inscription
                </b-button></center>
          
              </b-form>
            </div>
            <div class="line my-3"></div>

            <p class="font-small grey-text d-flex justify-content-center mb-1">
              Déjà inscrit ?
              <router-link to="/" class="font-weight-bold ml-1">
                Se connecter
              </router-link>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import NavigationOffline from '../components/NavigationOffline.vue'

export default {
    name: 'Signup', 
    components: {
        NavigationOffline, 
    }
}

</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #2c3e50 !important;
}
.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(192, 192, 192, 0.5);
}
.acc-input {
  &:-webkit-autofill {
    border: none;
    -webkit-text-fill-color: #212529;
    -webkit-box-shadow: 0 0 0px 1000px rgba(32, 120, 244, 0.2) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus {
    border: none;
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(32, 120, 244, 0.5);
  }
}
</style>