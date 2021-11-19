<template>
  <li>
    <BaseCard>
      <DeleteModal
        v-if="showDeleteModal"
        :title="title"
        :fading="modalFading"
        @close-modal="onHideModal"
        @delete-click="deleteItem"
      ></DeleteModal>
      <div class="title-box">
        <h3>{{ title }}</h3>
        <BaseButton @button-clicked="onDeleteClick">Delete</BaseButton>
      </div>
      <p>{{ description }}</p>
      <a :href="link">View Resource</a>
    </BaseCard>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "../UI/BaseButton.vue";
import BaseCard from "../UI/BaseCard.vue";
import DeleteModal from "./DeleteModal.vue";

export default defineComponent({
  components: { BaseCard, BaseButton, DeleteModal },
  emits: ["delete-resource"],
  props: {
    title: { type: String },
    description: { type: String },
    link: { type: String },
    id: { type: String },
  },
  setup(props, context) {
    const showDeleteModal = ref<boolean>(false);
    const modalFading = ref(false);
    const timer = ref<number | null>(null);

    const onDeleteClick = () => {
      showDeleteModal.value = true;
    };

    const onHideModal = () => {
      modalFading.value = true;
      if (timer.value) {
        clearTimeout(timer.value);
      }
      timer.value = setTimeout(() => {
        showDeleteModal.value = false;
        modalFading.value = false;
      }, 300);
    };

    const deleteItem = () => {
      onHideModal();
      context.emit("delete-resource", props.id);
    };
    return {
      showDeleteModal,
      onDeleteClick,
      onHideModal,
      modalFading,
      deleteItem,
    };
  },
});
</script>

<style scoped>
li {
  margin-bottom: 1rem;
  padding: 0;
  text-align: left;
}
h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: darkkhaki;
}

.title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>