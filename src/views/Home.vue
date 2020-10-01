<script>
import Login from '@/components/Login.vue';
import User from '@/components/User.vue';
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'Home',
  components: {
    Login,
    User,
    UserProfile,
  },
};
</script>

<template>
  <div>
    <User>
      <template #user="{user}">
        <div v-if="user">
          <UserProfile :user="user" />
        </div>
        <Login v-else />
      </template>
    </User>
  </div>
</template>
