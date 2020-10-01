<script>
import { auth } from '../firebase';

export default {
  name: 'Login',
  data() {
    return {
      auth,
    };
  },
  methods: {
    signInAnonymously() {
      auth.signInAnonymously();
    },
  },
};
</script>

<template>
  <div>
    <h3>Sign In Anonymously</h3>
    <b-button
      variant="primary"
      @click="signInAnonymously"
    >
      Sign In
    </b-button>
  </div>
</template>
