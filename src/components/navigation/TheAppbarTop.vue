<script setup lang="ts">
const props = defineProps<{
  scrolling?: boolean
}>()
</script>

<template>
  <nav
    class="h-14 flex items-center justify-between px-4 transition-all duration-300 ease-in-out"
    :class="[props.scrolling ? 'bg-white md:h-20' : 'md:h-25']"
    md="pl-20 pr-15"
  >
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </nav>
</template>
