<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1 bg-dark text-white rounded my-2 p-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

