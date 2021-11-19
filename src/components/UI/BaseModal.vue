<template>
  <teleport to="body">
    <div @click="closeModal" :class='`overlay ${fading ? "fadeout" : "fadein"}`'>
      <div @click.prevent class="content">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["close-modal"],
  props: {
    fading: { type: Boolean },
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit("close-modal");
    };

    return { closeModal };
  },
});
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.308);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  position: relative;
  width: 80%;
  max-width: 400px;
  max-height: 40vh;
  overflow-y: auto;
  padding: 1rem;
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.fadein {
  animation: fadeIn forwards 0.2s;
}

.fadeout {
  animation: fadeOut forwards 0.3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
