<template>
  <div v-if="event">
    <p>Edit the event here</p>
    <button @click="updateEdit">Edit Profile</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    updateEdit() {
      this.GStore.flashMessage =
        "You are successfully updated for " +
        this.event.first_name +
        " " +
        this.event.last_name;
      setTimeout(() => {
        //After 5 secound remove it
        this.GStore.flashMessage = "";
      }, 5000);
      this.$router.push({
        name: "EventList",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
