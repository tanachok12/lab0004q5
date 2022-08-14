<template>
  <div v-if="event">
    <p>Edit the event here</p>
    <button @click="register">Edit Profile</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>
