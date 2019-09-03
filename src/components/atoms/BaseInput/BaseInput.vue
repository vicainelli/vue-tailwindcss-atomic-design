<template>
  <label class="uppercase text-sm font-semibold text-gray-700">
    {{ label }}
    <input type="text" class="form-input mt-1 block w-full text-gray-600" />
  </label>
</template>

<script>
export default {
  name: 'base-input',
  props: {
    // Label
    label: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped></style>
