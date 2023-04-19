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
    class="fixed top-0 z-101 h-screen w-screen px-1/20"
    :class="[props.active ? 'left-0 opacity-100' : 'left-1/1 opacity-0']"
    md="px-1/10"
    xl="px-1/8"
  >
    <img
      class="absolute left-5 top-4 w-1/5"
      md="left-1/15 top-10 w-1/10" src="/assets/img/sidemenu_logo.png" alt="logo"
    >
    <button
      class="absolute right-1/20 top-4"
      md="top-8.5 right-1/15" @click="emit('close')"
    >
      <img src="/assets/img/sidemenu_close.png" alt="menu btn">
    </button>
    <div data-background :class="[props.active ? 'opacity-90' : 'opacity-0']" />
    <div
      class="grid grid-cols-12 h-full w-full gap-4 py-1/6 text-white"
      md="py-1/20"
    >
      <div
        class="col-span-6 flex flex-col justify-center gap-4"
        md="col-span-4 gap-8"
      >
        <div class="relative max-h-52.5 min-h-45 flex flex-col justify-end rounded-[30px] bg-[#26C6D0] pb-6 pl-1/4" md="pb-12">
          <div data-block-background>
            <img src="/assets/img/sidemenu_bg_sm_1.png" alt="background">
          </div>
          <img class="absolute bottom-6 left-2 w-1/5" md="left-2 bottom-12 w-1/5" src="/assets/img/sidemenu_graph_leaf.png" alt="image">
          <h3
            class="text-xs tracking-[1.8px]"
            lg="text-base pb-2"
          >
            EMPOWERING BRANDS
          </h3>
          <h1
            class="theme-title text-lg font-bold tracking-[3.6px]"
            lg="text-[2rem]"
          >
            ABOUT US
            <span class="mark bg-[#EE6C8A]" />
          </h1>
        </div>
        <div class="relative max-h-80 flex flex-grow flex-col justify-end rounded-[30px] bg-[#F1849D] pb-6 pl-1/4" md="pb-12">
          <div data-block-background>
            <img src="/assets/img/sidemenu_bg_sm_2.png" alt="background">
          </div>
          <img class="absolute bottom-9 left-2 w-1/6" md="left-2 bottom-12 w-1/5" src="/assets/img/sidemenu_graph_tomato.png" alt="image">
          <h3
            class="text-xs tracking-[1.8px]"
            lg="text-base pb-2"
          >
            CASE STUDIES
          </h3>
          <h1
            class="theme-title text-lg font-bold tracking-[3.6px]"
            lg="text-[2rem]"
          >
            WORKS
            <div class="mark bg-[#26C6D0]" />
          </h1>
        </div>
      </div>
      <div
        class="col-span-6 flex flex-col justify-center gap-4"
        md="col-span-4 px-5 gap-8"
      >
        <div class="relative max-h-108 min-h-32 flex flex-grow flex-col justify-end rounded-[30px] bg-[#E6A94E] pb-6 pl-1/10" md="pb-12">
          <div class="h-full flex flex-col justify-end">
            <div data-block-background>
              <img src="/assets/img/sidemenu_bg_sm_3.png" alt="background">
            </div>
            <img class="absolute bottom-16 left-1/15 w-1/4" md="left-1/10 bottom-25 w-1/3" src="/assets/img/sidemenu_graph_cheese.png" alt="image">
            <h3
              class="text-xs tracking-[1.8px]"
              lg="text-base pb-2"
            >
              OUR SERVICES
            </h3>
            <h1
              class="theme-title text-lg font-bold tracking-[3.6px]"
              lg="text-[2rem]"
            >
              SERVICES
              <span class="mark bg-[#EE6C8A]" />
            </h1>
          </div>
        </div>
        <div class="relative max-h-72 min-h-45 flex flex-grow flex-col justify-end rounded-[30px] bg-[#26D0A8] pb-6 pl-1/10" md="pb-12">
          <div data-block-background>
            <img src="/assets/img/sidemenu_bg_sm_4.png" alt="background">
          </div>
          <img class="absolute bottom-20 left-2 w-1/5" md="left-0 bottom-28 w-1/3" src="/assets/img/sidemenu_graph_cucumber.png" alt="image">
          <h3
            class="text-xs tracking-[1.8px]"
            lg="text-base pb-2"
          >
            OUR STRATEGIES
          </h3>
          <h1
            class="theme-title text-lg font-bold tracking-[3.6px]"
            lg="text-[2rem]"
          >
            INSIGHTS
            <span class="mark bg-[#EE6C8A]" />
          </h1>
        </div>
      </div>
      <div
        class="col-span-6 flex flex-col justify-center gap-4"
        md="col-span-4 gap-8"
      >
        <div class="relative max-h-80 min-h-32 flex flex-grow flex-col justify-end rounded-[30px] bg-[#585880] pb-6 pl-1/10" md="pb-12">
          <div data-block-background>
            <img src="/assets/img/sidemenu_bg_sm_5.png" alt="background">
          </div>
          <img class="absolute bottom-20 left-1/15 w-1/8" md="left-1/20 bottom-30 w-1/5" src="/assets/img/sidemenu_graph_carrot.png" alt="image">
          <h3
            class="text-xs tracking-[1.8px]"
            lg="text-base pb-2"
          >
            CASE STUDIES
          </h3>
          <h1
            class="theme-title text-lg font-bold tracking-[3.6px]"
            lg="text-[2rem]"
          >
            WORKS
            <span class="mark bg-[#EE6C8A]" />
          </h1>
        </div>
        <div class="relative max-h-52.5 min-h-30 flex flex-col justify-end rounded-[30px] bg-white pb-6 pl-1/10" md="pb-12">
          <h3
            class="text-xs tracking-[1.8px] text-[#262626]"
            lg="text-base pb-2"
          >
            START YOUR JOURNEY WITH US
          </h3>
          <h1
            class="theme-title text-lg font-bold tracking-[3.6px] text-[#26C6D0]"
            lg="text-[2rem]"
          >
            CONTACT
            <span class="mark bg-[#EE6C8A]" />
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sidemenu {
  transition: all 0.4s ease-in-out;
}

[data-background=""] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #585880 3.61%, #26C6D0 95.7%);
  transition: all 0.4s ease-in-out;
  z-index: -1;
}

[data-block-background=""] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px;
  z-index: 0;
  cursor: pointer;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.3);
    }
  }
}

.theme-title{
  position: relative;
  display: flex;
  align-items: end;
  gap: .5rem;
  .mark {
    display: none;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    position: relative;
    top: -0.125rem;
  }
}

@media screen and (min-width: 768px) {
  .theme-title{
    .mark {
      display: inline-block;
    }
  }
}
</style>
