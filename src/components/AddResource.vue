<template>
  <BaseCard>
    <form class="form" @submit="onAddResource">
      <label for="title">Title</label>
      <input
        name="title"
        type="text"
        ref="titleRef"
        :class="titleError && 'invalid'"
      />
      <label for="description">Description</label>
      <input
        name="description"
        type="text"
        ref="descriptionRef"
        :class="descriptionError && 'invalid'"
      />
      <label for="link">Link</label>
      <input
        name="link"
        type="text"
        ref="linkRef"
        :class="linkError && 'invalid'"
      />
      <BaseButton type="submit">Submit</BaseButton>
    </form>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseCard from "./UI/BaseCard.vue";

export default defineComponent({
  components: { BaseCard, BaseButton },
  emits: ["add-new"],
  setup(props, context) {
    const titleRef = ref<HTMLInputElement>();
    const descriptionRef = ref<HTMLInputElement>();
    const linkRef = ref<HTMLInputElement>();

    //error state
    const titleError = ref(false);
    const descriptionError = ref(false);
    const linkError = ref(false);

    const onAddResource = (event: Event) => {
      event.preventDefault();

      const title = titleRef.value!.value.trim();
      const description = descriptionRef.value!.value.trim();
      const link = linkRef.value!.value.trim();

      if (title && description && link) {
        context.emit("add-new", title, description, link);
        titleError.value = false;
        descriptionError.value = false;
        linkError.value = false;
        titleRef.value!.value = "";
        descriptionRef.value!.value = "";
        linkRef.value!.value = "";
      } else {
        if (!title) {
          titleError.value = true;
        }
        if (!description) {
          descriptionError.value = true;
        }
        if (!link) {
          linkError.value = true;
        }
      }
    };
    return {
      onAddResource,
      titleRef,
      descriptionRef,
      linkRef,
      titleError,
      descriptionError,
      linkError,
    };
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form input {
  margin-bottom: 1rem;
  height: 35px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;
  padding-left: 0.25rem;
  transition: all 0.2s;
}

.invalid {
  background-color: rgb(255, 215, 215);
}
</style>
