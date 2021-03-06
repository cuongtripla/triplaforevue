<script>
import firebase from 'firebase/app';
import { auth } from '../firebase';
import 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      auth,
      email: '',
      password: '',
      newUser: false,
      loading: false,
      errorMessage: '',
    };
  },
  computed: {
    validation() {
      return this.errorMessage.length === 0;
    },
  },
  methods: {
    signInAnonymously() {
      auth.signInAnonymously();
    },
    async signInOrCreateUserWithEmailAndPassword() {
      this.loading = true;

      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    },
    async signInWithGoogle() {
      this.loading = true;

      try {
        if (this.newUser) {
          // TODO: sign up code
        } else {
          const provider = new firebase.auth.GoogleAuthProvider();

          await auth.signInWithPopup(provider);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    },
  },
};
</script>

<template>
  <div>
    <b-button
      v-if="!loading"
      variant="primary"
      class="mx-2"
      @click="signInWithGoogle"
    >
      Sign In With Google
    </b-button>
    <b-spinner
      v-else
      variant="primary"
      label="Spinning"
    />

    <b-button
      v-if="!loading"
      variant="primary"
      class="mx-2"
      @click="signInAnonymously"
    >
      Sign In Anonymously
    </b-button>
    <b-spinner
      v-else
      variant="primary"
      label="Spinning"
    />

    <div v-if="newUser">
      <h3>Sign Up With Email</h3>
      <a
        href="#"
        @click="newUser = false"
      >
        Already signed up? Click here to sign in!
      </a>
    </div>
    <div v-else>
      <h3>Sign In With Email</h3>
      <a
        href="#"
        @click="newUser = true"
      >
        New user? Click here to sign up!
      </a>
    </div>

    <b-form
      @submit="signInOrCreateUserWithEmailAndPassword"
    >
      <b-form-group
        label="Email:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Email"
          :state="validation ? null : false"
        />
        <b-form-invalid-feedback :state="validation">
          {{ errorMessage }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Password"
          :state="validation ? null : false"
        />
        <b-form-invalid-feedback :state="validation">
          {{ errorMessage }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        v-if="!loading"
        type="submit"
        variant="primary"
        class="mx-2"
      >
        {{ newUser ? 'Sign Up' : 'Login' }}
      </b-button>
      <b-spinner
        v-else
        variant="primary"
        label="Spinning"
      />
      <b-button
        type="reset"
        variant="danger"
        class="mx-2"
      >
        Reset
      </b-button>
    </b-form>
  </div>
</template>
