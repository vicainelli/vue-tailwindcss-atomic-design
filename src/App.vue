<template>
  <div class="font-sans" id="app">
    <page-home></page-home>
  </div>
</template>

<script>
import Home from '@/components/pages/Home/'

export default {
  name: 'app',
  components: {
    'page-home': Home
  }
}
</script>
