<template>
  <header>
    <section>Learning Vue</section>
    <nav>
      <ul>
        <li @click="changeMode('RESOURCES')" :class="resourcesClass">
          Resources
        </li>
        <li @click="changeMode('ADDNEW')" :class="addNewClass">Add New</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    mode: { type: String, required: true },
  },
  emits: ["change-mode"],
  setup(props, context) {
    const resourcesClass = computed(() => {
      return props.mode === "RESOURCES" ? "active" : "";
    });
    const addNewClass = computed(() => {
      return props.mode === "ADDNEW" ? "active" : "";
    });
    const changeMode = (newMode: string) => {
      context.emit("change-mode", newMode);
    };
    return {
      resourcesClass,
      addNewClass,
      changeMode,
    };
  },
});
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: calc(1rem + 0.8vh);
  padding: 0 1rem 0 1rem;
  height: 50px;
  background-color: white;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.212);
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
li {
  margin-left: 3vw;
  color: white;
  background-color: darkkhaki;
  border: 1px darkkhaki solid;
  border-radius: 4px;
  padding: 2px 8px 2px 8px;
  font-size: calc(0.7rem + 0.8vh);
  cursor: pointer;
  transition: all 0.2s;
}
li:hover {
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
