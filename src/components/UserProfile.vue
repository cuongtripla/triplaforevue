<script>
import { auth } from '../firebase';

export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return { auth };
  },
  methods: {
    signOutAnonymously() {
      auth.signOut();
    },
  },
};
</script>

<template>
  <div>
    <h3>Logged in as {{ user.uid }}</h3>

    <b-button
      variant="primary"
      @click="signOutAnonymously"
    >
      Sign Out
    </b-button>
  </div>
</template>
