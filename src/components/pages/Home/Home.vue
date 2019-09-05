<template>
  <div>
    <heading :level="1">Home</heading>
  </div>
</template>

<script>
import Heading from '@/components/atoms/Heading'

export default {
  name: 'page-home',
  components: {
    heading: Heading
  }
}
</script>
