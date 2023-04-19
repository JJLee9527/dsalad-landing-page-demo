<script setup lang="ts">
import gsap from 'gsap'
import { Controller, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

function imgUrl(img: string) {
  return `${import.meta.env.BASE_URL}assets/img/${img}`
}
const screenInfo = reactive({
  screenWidth: 0,
  screenHeight: 0,
})
const videoInfo = reactive({
  videoWidth: 0,
  videoHeight: 0,
})

/** Navbar */
const scrolling = ref(false)
const observer = ref<undefined | IntersectionObserver>()
const expand = ref(false)

watch(() => expand.value, (value) => {
  if (value)
    document.body.style.overflow = 'hidden'
  else
    document.body.style.overflow = 'auto'
})

function initObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  }
  const elementToObserve = document.querySelector('[data-section="1"]')

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        scrolling.value = false
      else if (entry.intersectionRatio < 0.4)
        scrolling.value = true
    })
  }, options)

  elementToObserve
  && observer.value.observe(elementToObserve)
}

function toggleExpand(value?: boolean) {
  if (value !== undefined && typeof value === 'boolean') {
    expand.value = value
    return
  }

  expand.value = !expand.value
}

onMounted(() => {
  initObserver()
})
/** End Navbar */

/** Scrolling Guide */
function animateScrollingGuide() {
  const tl = gsap.timeline()
  tl.from('#scrolling-guide .dish-plate', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: 'power4.out',
  })
  tl.from('#scrolling-guide .dish-food', {
    y: -5,
    opacity: 0,
    duration: 1,
    scale: 0.5,
    rotate: 90,
    ease: 'power4.out',
  })
  tl.to('#scrolling-guide .dish-fork', {
    opacity: 1,
    duration: 1,
    rotate: 0,
    delay: -1,
    ease: 'power4.out',
  })
  tl.to('#scrolling-guide .dish-knife', {
    opacity: 1,
    duration: 1,
    rotate: 0,
    delay: -1,
    ease: 'power4.out',
  })
}

function rotateDishFood() {
  const scrollY = window.scrollY
  const dishFood = document.querySelector('#scrolling-guide .dish-food') as HTMLElement

  gsap.to(dishFood, {
    rotate: scrollY / 4,
  })
  gsap.to('#scrolling-guide', {
    y: -scrollY / 8,
    opacity: 1 - scrollY / 800,
  })
}

onMounted(() => {
  animateScrollingGuide()
  window.addEventListener('scroll',
    rotateDishFood,
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll',
    rotateDishFood,
  )
})
/** End Scrolling Guide */

/** Section 1 */
const resizeListener = ref<undefined | (() => void)>()

function onResize() {
  screenInfo.screenWidth = document.body.clientWidth
  screenInfo.screenHeight = window.innerHeight
  videoInfo.videoWidth = screenInfo.screenWidth * 1.2
  videoInfo.videoHeight = screenInfo.screenHeight * 1
}

onMounted(() => {
  resizeListener.value = onResize
  window.addEventListener('resize', resizeListener.value)
  onResize()
})

onUnmounted(() => {
  if (resizeListener.value)
    window.removeEventListener('resize', resizeListener.value)
})
/** End Section 1 */

/** Section 4 */
const ingredients = [
  {
    title: 'UX Design',
    desc: 'We design easy-to-use digital products. Our UX services include user research, wireframing, prototyping, and usability testing.',
    imgset: [
      'service_graph_ux.png',
      'service_graph_ux@2x.png',
    ],
  },
  {
    title: 'UI Design',
    desc: 'We design delightful digital products. Our UI services include visual designs, interactions, and style guides.',
    imgset: [
      'service_graph_ui.png',
      'service_graph_ui@2x.png',
    ],
  },
  {
    title: 'Website Development',
    desc: 'We design easy-to-use digital products. Our website development services include front-end development, back-end development, and CMS integration.',
    imgset: [
      'service_graph_web.png',
      'service_graph_web@2x.png',
    ],
  },
  {
    title: 'mobile app development',
    desc: 'We design delightful digital products. Our mobile app development services include iOS app development, Android app development, and cross-platform app development.',
    imgset: [
      'service_graph_mobile.png',
      'service_graph_mobile@2x.png',
    ],
  },
  {
    title: 'ECommerce',
    desc: 'We design easy-to-use digital products. Our eCommerce services include online store design, payment gateway integration, and order management system integration.',
    imgset: [
      'service_graph_ec.png',
      'service_graph_ec@2x.png',
    ],
  },
  {
    title: 'Customer Loyalty',
    desc: 'We design delightful digital products. Our customer loyalty services include customer retention strategies, loyalty program design, and feedback analysis.',
    imgset: [
      'service_graph_customer.png',
      'service_graph_customer@2x.png',
    ],
  },
  {
    title: 'digital transformation',
    desc: 'We design easy-to-use digital products. Our digital transformation services include business process automation, cloud migration, and data analytics.',
    imgset: [
      'service_graph_digi.png',
      'service_graph_digi@2x.png',
    ],
  },
  {
    title: 'digital marketing',
    desc: 'We design delightful digital products. Our digital marketing services include SEO, SMM, email marketing, and PPC advertising.',
    imgset: [
      'service_graph_market.png',
      'service_graph_market@2x.png',
    ],
  },
  {
    title: 'BRANDING',
    desc: 'We design and develop digital products that are easy to use and delightful to interact with.',
    imgset: [
      'service_graph_branding.png',
      'service_graph_branding@2x.png',
    ],
  },
]
/** End Section 4 */

/** Section 7 */
const projects = [
  {
    title: 'LP CLUB MOBILE APP',
    img: 'project_1.png',
    desc: 'LP Club is a mobile app that allows users to earn points and redeem rewards by purchasing products from participating merchants.',
  },
  {
    title: 'House Keeper MOBILE APP',
    img: 'project_2.png',
    desc: 'House Keeper is a mobile app that allows users to earn points and redeem rewards by purchasing products from participating merchants.',
  },
  {
    title: 'Life Planner MOBILE APP',
    img: 'project_3.png',
    desc: 'Life Planner is a mobile app that allows users to earn points and redeem rewards by purchasing products from participating merchants.',
  },
]
const modules = [Navigation, Controller, EffectFade]
const swiperInstance = ref()
const activeIndex = ref(0)

function setSwiper(swiper: any) {
  swiperInstance.value = swiper
}

function onSlideChange(swiper: any) {
  activeIndex.value = swiper.activeIndex
}

function prevSlide() {
  swiperInstance.value.slidePrev()
}

function nextSlide() {
  swiperInstance.value.slideNext()
}
/** End Section 7 */
</script>

<template>
  <div>
    <TheSideMenu :active="expand" @close="toggleExpand(false)" />
    <TheAppbarTop class="fixed left-0 top-0 z-20 w-full" :scrolling="scrolling">
      <template #left>
        <img
          v-show="scrolling"
          class="w-20 md:w-30"
          src="/assets/img/navbar_logo.png"
          alt="logo"
        >
      </template>
      <template #right>
        <div
          class="flex items-center gap-6"
          md="gap-11"
        >
          <button class="rounded-full px-4 py-3 text-sm font-bold leading-4 uppercase text-white" style="background: linear-gradient(90deg, #4EE5EA 3.94%, #26D0A8 94.73%);">
            Start Your Project
          </button>
          <button @click="toggleExpand()">
            <img v-if="!scrolling" src="/assets/img/triple-stripes.svg" alt="menu btn">
            <img v-else src="/assets/img/triple-stripes_dark.svg" alt="menu btn">
          </button>
        </div>
      </template>
    </TheAppbarTop>
    <div
      v-show="!scrolling"
      id="scrolling-guide"
      class="fixed left-1/2 z-20 flex flex-col transform items-center gap-6 -bottom-16 -translate-x-1/2 md:gap-7.5"
    >
      <div class="dish-container relative">
        <img
          class="dish-plate"
          src="/assets/img/landing_dish_plate.png" alt="plate" srcset="
          /assets/img/landing_dish_plate@2x.png 2x,
          /assets/img/landing_dish_plate.png 1x,
          /assets/img/landing_dish_plate.png
        "
        >
        <img
          class="dish-food absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/assets/img/landing_dish_food.png" alt="food" srcset="
          /assets/img/landing_dish_food@2x.png 2x,
          /assets/img/landing_dish_food.png 1x,
          /assets/img/landing_dish_food.png
        "
        >
        <img
          class="dish-fork absolute left-1/2 top-1/2 rotate-45 transform opacity-0 -translate-x-1/2 -translate-y-1/2"
          src="/assets/img/landing_dish_fork_l.png" alt="fork" srcset="
          /assets/img/landing_dish_fork_l@2x.png 2x,
          /assets/img/landing_dish_fork_l.png 1x,
          /assets/img/landing_dish_fork_l.png
        "
        >
        <img
          class="dish-knife absolute left-1/2 top-1/2 transform opacity-0 -translate-x-1/2 -translate-y-1/2 -rotate-45"
          src="/assets/img/landing_dish_knife_r.png" alt="knife" srcset="
          /assets/img/landing_dish_knife_r@2x.png 2x,
          /assets/img/landing_dish_knife_r.png 1x,
          /assets/img/landing_dish_knife_r.png
        "
        >
      </div>
      <div class="guideline h-32 w-[1px]" />
    </div>
    <section
      data-section="1"
      class="relative h-screen overflow-x-hidden"
      :style="{ width: `${screenInfo.screenWidth}px` }"
    >
      <div
        id="video-container"
        class="absolute left-0 top-0 z-0 h-full w-full"
      >
        <iframe
          v-if="videoInfo.videoWidth && videoInfo.videoHeight"
          id="youtube-player"
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          type="text/html"
          :width="videoInfo.videoWidth || 640"
          :height="videoInfo.videoHeight || 480"
          src="https://www.youtube.com/embed/8_4JRK4QkqU?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=8_4JRK4QkqU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        />
        <div id="video-overlay" class="absolute left-0 top-0 z-10 h-full w-full bg-[#08191D] bg-opacity-30" />
      </div>
      <div
        class="relative z-10 grid grid-cols-12 h-full items-center gap-4"
        md="px-15"
      >
        <div
          id="landing-text" class="col-start-3 col-end-13"
          md="col-start-2 col-end-13"
        >
          <div id="landing-logo">
            <img
              class="mb-5 w-30"
              md="w-50 mb-0"
              src="/assets/img/landing_logo.svg"
              alt="logo"
            >
          </div>
          <h1
            class="text-xl font-bold leading-[40px] tracking-[9.2px] text-white"
            md="text-4xl leading-[70px]"
          >
            WE CREATE
          </h1>
          <h1
            class="text-xl font-bold leading-[40px] tracking-[9.2px] text-white"
            md="text-4xl leading-[70px]"
          >
            AMAZING
          </h1>
          <div class="relative flex items-end">
            <h1
              class="effect-text relative z-10 text-xl font-bold leading-[40px] tracking-[9.2px] text-white"
              md="text-4xl leading-[70px]"
            >
              DIGITAL EXPERIENCES
            </h1>
            <i
              class="mark relative left-2 h-2.5 w-2.5 rounded-full bg-[#EE6C8A] -top-3"
              md="-top-5.5"
            />
            <span class="text-underline" />
          </div>
        </div>
        <div
          id="landing-deco-text"
          class="absolute left-8 top-3/5 flex transform items-center gap-6 -rotate-90"
          style="transform-origin: top left;"
        >
          <div class="h-0.5 w-25 bg-white" />
          <p class="text-white">
            DIGITAL AGENCY
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section
      data-section="2" class="px-1/15 py-10"
      md="pt-32 pb-17 px-1/5 grid-cols-12"
    >
      <div class="theme-title mb-8 justify-center" md="mb-16">
        <h1
          class="col-start-1 col-end-12 text-2xl font-bold tracking-[3.5px] uppercase"
          md="text-[28px]"
        >
          ABOUT DIGISALAD
        </h1>
        <i class="mark relative left-5 -top-[6px]" />
        <div class="deco-underline absolute left-1/2 transform -bottom-4 -translate-x-1/2">
          <img src="/assets/img/title-underline_long_light.svg" alt="underline">
        </div>
      </div>
      <div class="youtube-container relative col-start-1 col-end-12 h-0 pt-2/3">
        <iframe
          type="text/html"
          src="https://www.youtube.com/embed/8_4JRK4QkqU"
          frameborder="0"
        />
      </div>
      <p class="col-start-1 col-end-12 my-8 text-center leading-[28px] tracking-[1px]">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <button
        class="btn-theme mx-auto p-4 text-xs outline-none -bottom-6 -right-8"
        md="p-8 text-base -bottom-12 -right-10"
      >
        VIEW MORE
        <span
          class="h-0.5 w-10 bg-white"
          md="w-17"
        />
      </button>
    </section>
    <!-- End Section 2 -->
    <!-- Section 3 -->
    <section
      data-section="3"
      class="relative z-10 pl-1/15 -mb-30"
      md="pl-1/10 -mb-60"
    >
      <div
        class="wrapper grid grid-cols-4 rounded-b-10.25 rounded-l-10.25 bg-white px-4 pb-24 pt-16"
        md="grid-cols-12 px-17"
      >
        <div class="theme-title col-span-12 mb-8 justify-center" md="mb-16 col-start-1 col-end-5 justify-start">
          <h1
            class="text-2xl font-bold tracking-[3.5px] uppercase"
            md="text-[28px] pl-4"
          >
            AWARDS
          </h1>
          <i class="mark relative left-2.5 -top-[6px]" />
          <div
            class="deco-underline absolute left-1/2 w-40 transform -bottom-4 -translate-x-1/2"
            md="w-44 left-0 translate-x-0"
          >
            <img src="/assets/img/title-underline.svg" alt="underline">
          </div>
        </div>
        <p
          class="col-start-1 col-end-5 px-1/20"
          md="px-0"
        >
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
        <div
          id="award-badges" class="grid col-start-1 col-end-5 grid-cols-4"
          md="col-start-6 col-end-12 row-start-1 row-end-3"
        >
          <div class="badge col-span-2">
            <img
              src="/assets/img/awards_badge.png" alt="award badge 1" srcset="
              /assets/img/awards_badge@2x.png 2x,
              /assets/img/awards_badge.png 1x,
              /assets/img/awards_badge.png
            "
            >
          </div>
          <div class="badge col-span-2">
            <img
              src="/assets/img/awards_badge.png" alt="award badge 1" srcset="
              /assets/img/awards_badge@2x.png 2x,
              /assets/img/awards_badge.png 1x,
              /assets/img/awards_badge.png
            "
            >
          </div>
          <div class="badge col-span-2">
            <img
              src="/assets/img/awards_badge.png" alt="award badge 1" srcset="
              /assets/img/awards_badge@2x.png 2x,
              /assets/img/awards_badge.png 1x,
              /assets/img/awards_badge.png
            "
            >
          </div>
          <div class="badge col-span-2">
            <img
              src="/assets/img/awards_badge.png" alt="award badge 1" srcset="
              /assets/img/awards_badge@2x.png 2x,
              /assets/img/awards_badge.png 1x,
              /assets/img/awards_badge.png
            "
            >
          </div>
        </div>
      </div>
    </section>
    <!-- End Section 3 -->
    <!-- Section 4 -->
    <section
      data-section="4"
      class="relative z-0 grid grid-cols-12 gap-4 rounded-t-10.25 rounded-rb-10.25 bg-[#26C6D0] pb-40 pt-80 text-white -mb-60"
      md="px-15 pb-110 -mb-135"
    >
      <div class="theme-title col-span-12 mb-8 justify-center" md="mb-16">
        <h1
          class="col-start-1 col-end-12 text-2xl font-bold tracking-[3.5px] uppercase"
          md="text-[28px]"
        >
          OUR INGREDIENTS
        </h1>
        <i class="mark relative left-5 -top-[6px]" />
        <div class="deco-underline absolute left-1/2 transform -bottom-4 -translate-x-1/2">
          <img src="/assets/img/title-underline_long_dark.svg" alt="underline">
        </div>
      </div>
      <p
        class="col-start-2 col-end-12 px-4 text-center"
        md="px-10"
      >
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <div class="col-span-12 mt-4" md="mt-8">
        <button
          class="btn-theme-2 mx-auto p-4 text-xs uppercase outline-none -bottom-6 -right-8"
          md="p-8 text-base -bottom-12 -right-10"
        >
          our services
          <span
            class="ml-2 h-0.5 w-10 bg-white"
            md="w-17 ml-4"
          />
        </button>
      </div>
      <div
        id="ingredients" class="grid col-span-12 grid-cols-12 mt-12 gap-x-4 gap-y-8 px-4"
        md="col-span-12 px-24 gap-x-12 gap-y-15 mt-21"
      >
        <div v-for="item, iid in ingredients" :key="`item-${iid}`" class="item col-span-6 flex flex-col items-center gap-4 md:col-span-4">
          <img
            :src="imgUrl(item.imgset[0])" :alt="item.title" :srcset="`
            ${imgUrl(item.imgset[0])} 1x,
            ${imgUrl(item.imgset[1]) || imgUrl(item.imgset[0])} 2x,
            ${imgUrl(item.imgset[0])}
          `" class="w-27"
          >
          <div
            class="mb-1 h-10 flex items-center"
            md="mb-3.5"
          >
            <h3
              class="text-center text-lg font-bold uppercase"
              md="text-xl"
            >
              {{ item.title }}
            </h3>
          </div>
          <p
            class="line-clamp-5 h-35 w-full overflow-hidden text-center text-sm font-normal leading-5 tracking-[1px]"
            md="text-base leading-7"
          >
            {{ item.desc }}
          </p>
          <button
            class="border border-white rounded-full px-4 py-2 text-sm leading-5"
            md="px-9 py-4"
          >
            View More
          </button>
        </div>
      </div>
      <div class="col-span-12 mt-25 flex justify-center">
        <button class="w-80" md="w-100">
          VIEW MORE DIGISALAD’S INGRADIENTS
        </button>
      </div>
    </section>
    <!-- End Section 4 -->
    <!-- Section 5 -->
    <section
      data-section="5"
      class="pr-1/10"
    >
      <div
        class="wrapper relative grid grid-cols-12 gap-5 overflow-hidden rounded-b-10.25 rounded-tr-10.25 px-1/15 py-12 text-white"
        md="py-35 px-1/10"
      >
        <div class="absolute left-0 top-0 z-0 h-full w-full">
          <img class="h-full w-full object-cover" src="/assets/img/quote_background.png" alt="quote background">
        </div>
        <div
          class="founder relative z-10 col-start-3 col-end-11 flex flex-col items-center"
          md="col-span-4"
        >
          <img
            src="/assets/img/founder.png" alt="founder"
            class="mb-5 max-w-52 w-4/5 rounded-full"
            md="mb-6"
          >
          <h3 class="mb-2 text-center text-xl font-bold leading-5 uppercase">
            Tony Ng
          </h3>
          <p
            class="text-center text-sm tracking-[2px] italic"
            md="text-base"
          >
            Founder & Creative Director
          </p>
        </div>
        <div
          class="quote relative z-10 col-span-12 pl-6 pt-6"
          md="col-span-8 pl-10 pt-10"
        >
          <p
            class="text-sm font-normal leading-8 tracking-[1px]"
            md="leading-12 text-[22px] text-lg tracking-[2px]"
          >
            A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the
            <span
              class="font-bold text-[#FFBC58]"
              md="text-[22px]"
            >right experience to the right person at the right time</span>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
          </p>
        </div>
        <div
          class="quote-mark absolute left-1/8 top-72 w-10"
          md="top-20 w-22.5 left-3/5"
        >
          <img src="/assets/img/quote_quotemarks_left.svg" alt="quote-mark">
        </div>
      </div>
    </section>
    <!-- End Section 5 -->
    <!-- Section 6 -->
    <section
      data-section="6"
      class="relative z-0 flex flex-col items-center rounded-t-10.25 rounded-rb-10.25 px-1/15 pt-15"
      md="px-1/8 pt-22"
    >
      <div class="theme-title mb-8 justify-center" md="mb-16">
        <h1
          class="text-center text-2xl font-bold tracking-[3.5px] uppercase"
          md="text-[28px]"
        >
          OUR BRAND EXPERIENCE
        </h1>
        <i class="mark relative hidden" sm="block left-5" md="left-5 -top-[6px]" />
        <div
          class="deco-underline absolute left-1/2 transform -bottom-4 -translate-x-1/2"
          md="w-108"
        >
          <img src="/assets/img/title-underline_extra-long_light.svg" alt="underline">
        </div>
      </div>
      <p
        class="mb-8 text-center"
        md="mb-14 px-6"
      >
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <img
        src="/assets/img/brand-exp_brand-wall.png" alt="" srcset="
        /assets/img/brand-exp_brand-wall@2x.png 2x,
        /assets/img/brand-exp_brand-wall.png 1x,
        /assets/img/brand-exp_brand-wall.png
      "
      >
    </section>
    <!-- End Section 6 -->
    <!-- Section 7 -->
    <section data-section="7" class="relative">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        effect="fade"
        @swiper="setSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="slide, sid in projects" :key="`slide-${sid}`">
          <div
            class="relative h-0 w-full pb-2/1"
            md="pb-4/6"
          >
            <div class="background absolute z-0 h-full w-full">
              <img
                :src="imgUrl(slide.img)" alt="slide"
                class="relative inset-0 z-0 h-full w-full object-cover"
              >
              <div class="backgroun-overlay absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-60" style="backdrop-filter: brightness(50%)" />
            </div>
            <div
              class="content absolute z-20 grid grid-cols-10 h-full w-full items-center gap-4 pl-4 pt-8"
              md="pl-1/10 pt-0"
            >
              <div
                class="project-image relative col-start-2 col-end-9 h-0 w-full pt-1/1 -mb-6"
                md="col-span-4"
              >
                <img
                  :src="imgUrl(slide.img)" alt="slide"
                  class="absolute inset-0 left-0 top-0 z-0 h-full w-full rounded-7.5 object-cover"
                >
                <button
                  class="btn-theme absolute border-none p-4 text-xs outline-none -bottom-6 -right-8"
                  md="p-8 text-base -bottom-12 -right-10"
                >
                  VIEW PRODUCT
                  <span
                    class="h-0.5 w-10 bg-white"
                    md="w-17"
                  />
                </button>
              </div>
              <div
                class="col-start-1 col-end-10 pl-8 pt-12 text-white"
                md="pl-12 col-span-5 pt-0"
              >
                <p
                  class="mb-5 text-sm font-bold leading-4 uppercase"
                  md="text-base"
                >
                  HIGHLIGHTED SHOWCASE
                </p>
                <h2 class="mb-10 text-4xl font-bold leading-10 uppercase">
                  {{ slide.title }}
                </h2>
                <p
                  class="text-base font-normal leading-5 tracking-[1px]"
                  md="pr-1/10 text-lg leading-6"
                >
                  {{ slide.desc }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        v-show="activeIndex !== 0"
        class="absolute left-1/25 top-1/2 z-20 h-8 w-8"
        md="left-1/20 w-13 h-13"
        @click="prevSlide"
      >
        <img src="/assets/img/slide-btn_l.png" alt="navigation left">
      </button>
      <button
        v-show="activeIndex !== projects.length - 1"
        class="absolute right-1/25 top-1/2 z-20 h-8 w-8"
        md="right-1/20 w-13 h-13"
        @click="nextSlide"
      >
        <img src="/assets/img/slide-btn_r.png" alt="navigation left">
      </button>
    </section>
    <!-- End Section 7 -->
  </div>
</template>

<style lang="scss" scoped>
#video-overlay {
  backdrop-filter: grayscale(10%) contrast(80%) blur(2px) sepia(25%);
}

#scrolling-guide .guideline {
  backdrop-filter: invert(100%);
}

.dish-container {
  .dish-food, .dish-fork, .dish-knife {
    position: absolute;
  }
  .dish-food {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .dish-fork {
    top: 65%;
    left: 8%;
    transform: translate(-50%, -50%);
  }

  .dish-knife {
    top: 65%;
    left: 92%;
    transform: translate(-50%, -50%);
  }
}

.btn-theme {
  background: hsla(184, 69%, 48%, 1);
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: .25rem;
}

.btn-theme-2 {
  background: #585880;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: .25rem;
}

.theme-title{
  position: relative;
  display: flex;
  align-items: end;
  .mark {
    background: #EE6C8A;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
}

#landing-text {
  .effect-text {
    position: relative;
    z-index: 10;
    &::after {
      position: absolute;
      display: none;
      z-index: -1;
      content: '';
      height: .5rem;
      width: 100%;
      bottom: 1.3rem;
      left: -.4rem;
      background-color: #26C6D0;
    }
  }
}

@media screen and (min-width: 768px) {
  #landing-text {
    .effect-text {
      &::after {
        display: block;
      }
    }
  }
}

[data-section="2"] .youtube-container{
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
