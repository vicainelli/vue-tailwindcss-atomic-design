<template>
  <div>
    <heading :level="1">Home</heading>
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/BaseHeading'

export default {
  name: 'page-home',
  components: {
    heading: BaseHeading
  }
}
</script>
