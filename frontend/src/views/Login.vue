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
              <b-card-text class="login-text h4"><center>Se connecter</center></b-card-text>

              <b-form>
                <b-form-group>
                  <b-form-input
                    id="email"
                    type="email"
                    name="'email"
                    placeholder="Email"
                    class="acc-input text-dark mb-2 mt-4 pl-3 w-100"
                    aria-label="Écrire votre adresse mail"
                  ></b-form-input>
                  <b-form-input
                    id="password"
                    type="password"
                    name="password"
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
                  Connexion
                </b-button></center>
          
              </b-form>
            </div>
            <div class="line my-3"></div>

            <p class="font-small grey-text d-flex justify-content-center mb-1">
              Pas encore inscrit ?
              <router-link to="/signup" class="font-weight-bold ml-1">
                Créer un compte</router-link
              >
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import NavigationOffline from '../components/NavigationOffline.vue'
import router from '../router/index'

export default {
    name: 'Login',
    components: {
        NavigationOffline, 
    },
    data() {
        return {
            inputLogin: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            let loginDatas = {
                "email": this.inputLogin.email,
                "password": this.inputLogin.password
            }
            console.log(loginDatas)
            let url = "http://localhost:3000/api/auth/login"
            let options = {
                method: "POST",
                body: JSON.stringify(loginDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    if (res.userId && res.token) {
                        localStorage.setItem("userId", res.userId)
                        localStorage.setItem("token", res.token)
                        localStorage.setItem("isAdmin", res.isAdmin);
                        console.log(localStorage)
                        this.$router.push("message");
                        alert(" 🙋‍♂️ Bienvenue sur Groupomania Connect ! Connectez-vous dès à présent ! 🙋‍♀️");
                    } else {
                        alert(" 🚨 Mot de passe incorrect ! ");
                    }
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