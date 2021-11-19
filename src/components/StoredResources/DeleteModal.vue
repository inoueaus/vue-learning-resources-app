<template>
  <BaseModal @close-modal="onCloseClick">
    <h2>Are you sure you want to delete {{ title }}?</h2>
    <div>
      <BaseButton @button-clicked="onYesClick">Yes</BaseButton>
      <BaseButton @button-clicked="onCloseClick">No</BaseButton>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "../UI/BaseButton.vue";
import BaseModal from "../UI/BaseModal.vue";

export default defineComponent({
  components: { BaseModal, BaseButton },
  props: {
    title: { type: String }
  },
  emits: ["close-modal", "delete-click"],
  setup(props, context) {
    const onCloseClick = () => {
      context.emit("close-modal");
    };
    const onYesClick = () => {
      context.emit("delete-click");
    };
    return {
      onCloseClick,
      onYesClick,
    };
  },
});
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
}

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

button {
  width: 45%;
}
</style>
