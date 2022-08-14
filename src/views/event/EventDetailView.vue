<template>
  <h4>Details</h4>
  <p>ID# {{ event.id }}</p>
  <p>Name: {{ event.first_name }} {{ event.last_name }}</p>
  <p>Email: {{ event.email }}</p>
  <p>Gender: {{ event.gender }}</p>
  <p>IP_Address: {{ event.ip_address }}</p>
  <p>Source: {{ event.Source }}</p>
  <p>Destination: {{ event.Destination }}</p>
  <p>Travel Date: {{ event.travelDate }}</p>
  <p>Airline ID: {{ event.airlineId }}</p>
</template>

<script>
export default {
  props: ["event"],
};
</script>
