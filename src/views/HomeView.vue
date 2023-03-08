<template>
  <main>
    <button @click="showModal = true" class="button">Show Modal</button>
    <Modal v-model="showModal" title="Hi techies!">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa
        laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic
        velit odio nemo minus labore quam ullam quod architecto?
      </p>
    </Modal>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
const showModal = ref(false);
</script>
