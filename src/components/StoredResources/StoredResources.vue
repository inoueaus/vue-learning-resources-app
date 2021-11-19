<template>
  <ul>
    <ResourceItem
      v-for="item in data"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :id="item.id"
      @delete-resource="deleteResource"
    />
  </ul>
</template>

<script lang="ts">
import LearningResource from "../../models/learning-resource";
import { defineComponent, PropType } from "vue";
import ResourceItem from "./ResourceItem.vue";

export default defineComponent({
  components: { ResourceItem },
  emits: ["delete-resource"],
  props: {
    data: { type: Array as PropType<LearningResource[]> },
  },
  setup(props, context) {
    const deleteResource = (id: number) => {
      context.emit("delete-resource", id);
    };
    return {
      deleteResource,
    };
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
