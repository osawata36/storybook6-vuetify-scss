<template>
  <v-btn :color="color" @click="$emit('click')">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: "DsButton",
  props: {
    label: {
      type: String,
      default: "ボタン",
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        color: this.color,
      };
    },
  },

  methods: {},
};
</script>
