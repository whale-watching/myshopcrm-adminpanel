<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col class="col-12 d-flex justify-center">
        <a href="https://inshopcrm.com" target="_blank">
          <img src="/logo.png" alt="Myshopcrm.com" style="width: 200px" />
        </a>
      </v-col>

      <v-col class="col-12 d-flex justify-center">
        <v-card class="elevation-12" width="100%" max-width="400">
          <v-form @submit.prevent="signIn">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Sign in to start the session</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="credentials.username"
                :label="$t('username')"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :error="hasError"
                :error-messages="error"
              ></v-text-field>

              <v-text-field
                id="password"
                v-model="credentials.password"
                :label="$t('password')"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :error="hasError"
                :error-messages="error"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary">
                {{ $t('signin') }}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'authenticatedSignin',
  data() {
    return {
      credentials: {
        username: 'demo',
        password: 'demo',
      },
    }
  },
  head() {
    return {
      title: 'Homepage title',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'Homepage title',
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Homepage title',
        },
      ],
      bodyAttrs: {
        class: 'hold-transition login-page',
      },
    }
  },
  computed: {
    error() {
      return this.$store.getters['auth/error']
    },
    hasError() {
      return this.error !== null
    },
  },
  methods: {
    signIn() {
      this.$store.dispatch('auth/login', this.credentials).then(() => {
        this.$router.push('/dashboard')
      })
    },
  },
}
</script>

<style>
.login-page .v-application--wrap {
  background: linear-gradient(#0c5c6f, #003145);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
