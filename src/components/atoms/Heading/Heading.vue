<script>
export default {
  name: 'heading',
  render: function(createElement) {
    return createElement(
      'h' + this.level, // tag name
      {
        class: this.classObject[this.level]
      },
      this.$slots.default // array of children
    )
  },
  data() {
    return {
      classObject: {
        1: 'text-3xl sm:text-4xl font-semibold text-gray-800',
        2: 'text-2xl sm:text-3xl font-semibold text-gray-800',
        3: 'text-2xl sm:t`ext-3xl font-normal text-gray-900',
        4: 'text-xl sm:t`ext-2xl font-normal text-gray-900'
      }
    }
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>
