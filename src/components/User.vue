<script>
import { ref } from '@vue/composition-api';
import { auth } from '../firebase';

export default {
  name: 'User',
  setup() {
    const user = ref(null);
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      user.value = firebaseUser;
    });
    return { user, unsubscribe };
  },
  destroyed() {
    this.unsubscribe();
  },
};
</script>

<template>
  <div>
    <slot
      name="user"
      :user="user"
    />
  </div>
</template>
