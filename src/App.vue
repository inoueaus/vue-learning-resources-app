<template>
  <TheHeader :mode="mode" @change-mode="handleModeChange"></TheHeader>
  <div v-if="loading" class="loading"><p>Loading</p></div>
  <StoredResources
    v-if="mode === 'RESOURCES'"
    :data="data"
    @delete-resource="deleteResource"
  />
  <AddResource v-if="mode === 'ADDNEW'" @add-new="addResource" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import initDatabaseConnection from "./firebase/init-database-connection";
import pushData from "./firebase/push-data";
import deleteData from "./firebase/delete-data";

import AddResource from "./components/AddResource.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import StoredResources from "./components/StoredResources/StoredResources.vue";
import LearningResource from "./models/learning-resource";
import FirebaseResource from "./models/firebase-resource";

export default defineComponent({
  components: { TheHeader, StoredResources, AddResource },
  setup() {
    const mode = ref<string>("RESOURCES");
    const fbData = ref<{ [name: string]: FirebaseResource }>({});
    const loading = ref(true);

    onMounted(() => {
      loading.value = true;
      initDatabaseConnection(fbData, "learning", loading);
    });

    const data = computed(() => {
      const newList: LearningResource[] = [];
      const rawData = fbData.value;
      for (const key in rawData) {
        newList.push({
          id: key,
          title: rawData[key].title,
          description: rawData[key].description,
          link: rawData[key].link,
        });
      }
      return newList;
    });
    const handleModeChange = (newMode: string) => {
      mode.value = newMode;
    };
    const deleteResource = (id: string) => {
      deleteData(id, "learning");
    };

    const addResource = (title: string, description: string, link: string) => {
      const newResource: LearningResource = {
        title,
        description,
        link,
      };
      // data.value.push(newResource);
      pushData(newResource, "learning");
      mode.value = "RESOURCES";
    };

    return {
      mode,
      handleModeChange,
      data,
      loading,
      deleteResource,
      addResource,
      fbData,
    };
  },
});
</script>


<style>
* {
  box-sizing: border-box;
  user-select: none;
}
body {
  background-color: rgb(199, 199, 199);
  margin: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loading {
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  padding: 0 1rem 0 1rem;
  width: 30%;
  margin: 2rem auto 0 auto;
}

.loading p {
  animation: pulsate 0.5s linear infinite;
}

@keyframes pulsate {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
