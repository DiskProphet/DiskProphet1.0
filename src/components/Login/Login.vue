<template>
  <div class="Login">
    <!-- <vue-particles color="#1d1626" :particleOpacity="0.7" :particlesNumber="90" shapeType="circle" :particleSize="5" linesColor="#1d1626" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab"
        :clickEffect="true" clickMode="push" class="canvas-bg"> </vue-particles> -->
    <canvas id="particlesCanvas"></canvas>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <b-card style="max-width: 20rem;" class="mb-2">
            <b-form @submit="onSubmit">
              <b-form-group id="usernameGroup2" label="User Name" label-for="usernameInput2">
                <b-form-input id="usernameInput2" type="text" v-model="form.username" required placeholder="Enter User Name"></b-form-input>
              </b-form-group>
              <b-form-group id="passwordGroup3" label="Password" label-for="passwordInput3">
                <b-form-input id="passwordInput3" type="password" required v-model="form.password" v-on:keyup.13="submit" placeholder="Enter Password" autocomplete="new-password"></b-form-input>
              </b-form-group>
              <span v-show="passError" class="errorinfo">用户名或密码错误</span>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="secondary" v-on:click="display_passError">Reset</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import axios from "axios";
  import bgJS from './bg.js'
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        passError: false,
      };
    },
    mounted() {
      bgJS()();
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios
          .post("/api/Login", this.form, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(val => {
            if (val.data.logined) {
              window.localStorage.setItem('token', val.data.apiKey);
              this.$router.replace({
                path: "/UserInfo"
              });
            } else {
              this.passError = true
            }
          });
      },
      display_passError() {
        this.passError = false
      }
    }
  };
</script>

<style scoped>
  html {
    overflow: hidden;
  }
  .Login {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .bv-example-row {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
  }
  .mb-2 {
    color: #fff;
  }
  .mb-2 .card-body {
    background-color: rgba(54, 54, 54, 0.8)
  }
  #particlesCanvas {
    width: 100%;
    height: 100%;
    min-height: 800px;
    background-color: #f6f5ec;
  }
  .errorinfo {
    display: block;
    padding: 10px;
  }
</style>
