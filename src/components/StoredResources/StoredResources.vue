<template>
  <ul>
    <ResourceItem
      v-for="item in displayData"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :id="item.id"
      @delete-resource="deleteResource"
    />
  </ul>
  <BaseCard v-if="data.length > 3">
    <PageSelector :pageCount="pageCount" :currentPage="currentPage" @page-change="changePage" />
  </BaseCard>
</template>

<script lang="ts">
import LearningResource from "../../models/learning-resource";
import { defineComponent, PropType, ref, computed, watch } from "vue";
import ResourceItem from "./ResourceItem.vue";
import BaseCard from "../UI/BaseCard.vue";
import PageSelector from "./PageSelector.vue";

export default defineComponent({
  components: { ResourceItem, BaseCard, PageSelector },
  emits: ["delete-resource"],
  props: {
    data: { type: Array as PropType<LearningResource[]> },
  },
  setup(props, context) {
    const currentPage = ref<number>(1);

    const pageCount = computed(() => {
      return Math.ceil(props.data!.length / 3);
    });

    const displayData = computed(() => {
      const startIndex = currentPage.value * 3 - 3;
      const stopIndex = currentPage.value * 3;
      let filteredData = [];
      //push items based on index
      for (let i = startIndex; i < stopIndex; i++) {
        filteredData.push(props.data![i]);
      }
      //remove undefined items
      filteredData = filteredData.filter(item => item)
      return filteredData;
    });

    watch(pageCount, () => {
      console.log(pageCount.value);
    });

    watch(displayData, () => {
      console.log(displayData.value);
    });

    const changePage = (pageNo: number) => {
      currentPage.value = pageNo;
    }

    const deleteResource = (id: number) => {
      context.emit("delete-resource", id);
    };
    return {
      deleteResource,
      pageCount,
      displayData,
      currentPage,
      changePage,
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
