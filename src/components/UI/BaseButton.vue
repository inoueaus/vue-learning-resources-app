<template>
  <button @click="onClick" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: { required: false },
  },
  emits: ["button-clicked"],
  setup(props, context) {
    const onClick = () => {
      context.emit("button-clicked");
    };
    return { onClick };
  },
});
</script>

<style scoped>
button {
  color: white;
  background-color: darkkhaki;
  border: 1px darkkhaki solid;
  border-radius: 4px;
  padding: 2px 8px 2px 8px;
  font-size: calc(0.7rem + 0.8vh);
  cursor: pointer;
  transition: all 0.2s;
  height: 40px;

}
button:hover {
  background-color: rgb(224, 218, 131);
  border-color: rgb(224, 218, 131);
}
.active {
  background-color: rgb(95, 92, 54);
  border-color: rgb(95, 92, 54);
  cursor: default;
}
.active:hover {
  background-color: rgb(95, 92, 54);
  border-color: rgb(95, 92, 54);
}
</style>
