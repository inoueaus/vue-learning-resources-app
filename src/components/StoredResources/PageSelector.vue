<template>
  <div>
    <button :class="`left ${currentPage === 1 && 'disabled'}`" @click="prevClick">Prev</button>
    <button
      v-for="pageNo in pageCount"
      :class="currentPage === pageNo && 'disabled'"
      :key="pageNo"
      @click="onClickPageButton(pageNo)"
    >
      {{ pageNo }}
    </button>
    <button :class="`right ${currentPage === pageCount && 'disabled'}`" @click="nextClick">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pageCount: { type: Number },
    currentPage: { type: Number },
  },
  emits: ["page-change"],
  setup(props, context) {
    const onClickPageButton = (pageNo: number) => {
      context.emit("page-change", pageNo);
    };
    const prevClick = () => {
      if (props.currentPage !== 1) {
        context.emit("page-change", props.currentPage! - 1);
      }
    };

    const nextClick = () => {
      if (props.currentPage !== props.pageCount) {
        context.emit("page-change", props.currentPage! + 1);
      }
    };

    return {
      onClickPageButton,
      prevClick,
      nextClick,
    };
  },
});
</script>

<style scoped>
button {
  background-color: darkkhaki;
  border: 1px solid darkkhaki;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: rgb(224, 218, 131);
  border-color: rgb(224, 218, 131);
}

.left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.right {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.disabled {
  background-color: grey;
  border-color: grey;
  cursor: default;
}
.disabled:hover {
  background-color: grey;
  border-color: grey;
}
</style>