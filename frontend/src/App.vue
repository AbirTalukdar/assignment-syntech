<template>
  <div>
    <Create />
    <List />
   <!-- <router-view />-->
  </div>
</template>

<script>
import './assets/tailwind.css'

import Create from './components/Create.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Create,
    List
  }
}
</script>

<style>

</style>
