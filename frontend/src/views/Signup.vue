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

              <b-form v-on:submit.prevent="signup">
                <b-form-group>
                  <b-form-input
                    id="lastNname"
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    class="acc-input text-dark mb-2 mt-4 pl-3 w-100"
                    aria-label="Écrire votre nom de famille"
                    v-model="inputSignup.lastname"
                  ></b-form-input>
                  <b-form-input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre prénom ici"
                    v-model="inputSignup.firstname"
                  ></b-form-input>
                  <b-form-input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre adresse mail"
                    v-model="inputSignup.email"
                  ></b-form-input>
                  <b-form-input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    class="acc-input text-dark mb-2 pl-3 w-100"
                    aria-label="Écrire votre mot de passe"
                    v-model="inputSignup.password"
                  ></b-form-input>
                </b-form-group>

                <center><b-button
                  v-on:click.stop="signup()"
                  type="submit"
                  id="signup-button"
                  class="account-btn font-weight-bold"
                  aria-label="Inscription"
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
    },
    data() {
        return {
            inputSignup: {
                lastname: "",
                firstname: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        signup() {
            let inputDatas = {
                "lastname": this.inputSignup.lastname,
                "firstname": this.inputSignup.firstname,
                "email": this.inputSignup.email,
                "password": this.inputSignup.password
            }
            console.log(inputDatas)
            let url = "http://localhost:3000/api/auth/signup"
            let options = {
                method: "POST",
                body: JSON.stringify(inputDatas),
                headers: { 'Content-Type': 'application/json'}
            }
            console.log(options)
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                  localStorage.setItem("userId", res.userId);
                  console.log(localStorage)
                  this.$router.push("/");
                  alert("Bienvenue sur Groupomania Connect ! Connectez-vous dès à présent !");
                })
                .catch(error => console.log(error))
        }
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