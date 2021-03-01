<template>
  <div>
    <!--- el uuid es el que nos entrega el platziverse-agent  node examples/index.js  -->
    <!-- <metric uuid="e1c690fd-f401-4a3b-93c1-319b36a19ee3" type="promiseMetric" :socket="socket"></metric> -->
    <!-- <agent uuid="ad7b7fb6-7635-4c2f-a71a-0e1619f455ea"  :socket="socket"></agent> -->
    <agent
      v-for="agent in agents"
      :uuid="agent.uuid"
      :key="agent.uuid"
      :socket="socket">
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
const request = require('request-promise-native')
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
    async initialize () {
      const options = {
        method: 'GET',
        url: 'http://localhost:8080/agents',
        json: true
      }
      let result
      try {
        result = await request(options)
      } catch (e) {
        this.error = e.error.error
        return
      }
      this.agents = result
      socket.on('agent/connected', payload => {
        const { uuid } = payload.agent
        const existing = this.agents.find(a => a.uuid === uuid)
        if (!existing) {
          this.agents.push(payload.agent)
        }
      })
    }
  }
}
</script>