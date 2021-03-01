<template>
  <div>
    <!--- el uuid es el que nos entrega el platziverse-agent  node examples/index.js  -->
    <!-- <metric uuid="e1c690fd-f401-4a3b-93c1-319b36a19ee3" type="promiseMetric" :socket="socket"></metric> -->
    <agent uuid="690ce13f-763c-40a7-86ac-f8cba71488ba"  :socket="socket"></agent>
    <agent
      v-for="agent in agents"
      :uuid="agent.uuid"
      :key="agent.uuid">
    </agent>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<style>
  body {
    font-family: Arial;
    background: #f8f8f8;
    margin: 0;
  }
</style>

<script>
const io = require('socket.io-client')
const socket = io()

module.exports = {
  data () {
    return {
      agents: [],
      error: null,
      socket
    }
  },
  mounted () {
    this.initialize()
  },
  methods: {
    initialize () {
    }
  }
}
</script>