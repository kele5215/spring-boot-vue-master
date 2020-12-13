<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import testApi from '@/api/test'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this.fetchData()
    console.log(testApi)
    console.log(process.env.VUE_APP_BASE_API)
  },
  methods: {
    fetchData() {
      testApi
        .getDataList()
        .then(response => {
          console.log('get3', response.data)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }
}
</script>
