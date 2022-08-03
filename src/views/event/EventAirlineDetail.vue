<template>
  <p>Airline ID: {{ air.id }}</p>
  <p>Airline name: {{ air.name }}</p>
  <p>Email: {{ air.email }}</p>
  <p>Address: {{ air.address }}</p>
</template>
<script>
export default {
  props: ["air"],
};
</script>
