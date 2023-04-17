<script setup lang="ts">
const props = defineProps<{
  active?: boolean
}>()
const emit = defineEmits<{
  (event: 'close', ...args: any[]): void
}>()
</script>

<template>
  <div
    id="sidemenu"
    class="fixed top-0 z-101 h-screen w-screen pl-1/20"
    :class="[props.active ? 'left-0 opacity-90' : 'left-1/1 opacity-0']"
    md="px-1/10"
  >
    <img
      class="absolute left-5 top-4"
      md="left-1/15 top-10" src="/assets/img/sidemenu_logo.png" alt="logo"
    >
    <button
      class="absolute right-1/20 top-4"
      md="top-8.5 right-1/15" @click="emit('close')"
    >
      <img src="/assets/img/sidemenu_close.png" alt="menu btn">
    </button>
    <div data-background />
  </div>
</template>

<style lang="scss" scoped>
#sidemenu {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #585880 3.61%, #26C6D0 95.7%);
  transition: all 0.4s ease-in-out;
}
</style>
