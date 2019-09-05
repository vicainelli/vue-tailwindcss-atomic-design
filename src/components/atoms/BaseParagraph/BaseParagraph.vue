<template>
  <p class=" text-gray-700 mb-2" :class="[`text-${alignment}`]">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'base-paragraph',
  props: {
    // Alignment
    // Defines the text alignment
    alignment: {
      type: String,
      default: 'left'
    }
  }
}
</script>
