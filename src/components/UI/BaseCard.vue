<template>
  <div :class="formattedClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    cardClass: { type: String, required: false },
  },
  setup(props) {
    const formattedClass = computed(() => {
      return `card ${props.cardClass}`;
    });
    return {
      formattedClass,
    };
  },
});
</script>

<style scoped>
.card {
  width: 95%;
  margin: 0 auto 0 auto;
  padding: 1rem;
  max-width: 600px;
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.199);
}
</style>
