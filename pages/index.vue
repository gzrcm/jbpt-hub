<template>
  <div class="h-dvh relative overflow-hidden">
    <!-- Video Backgrounds -->
    <video class="absolute top-0 left-0 w-full h-full object-cover" src="/videos/video1.m4v" autoplay muted loop
      playsinline></video>
    <video class="absolute top-0 left-0 w-full h-full object-cover lg:ml-[50%] lg:w-[50%]" src="/videos/video2.m4v"
      autoplay muted loop playsinline></video>

    <!-- Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">
      <div class="bg-primary bg-opacity-50 h-full flex items-center justify-center py-[15%] lg:py-0">
        <NuxtLink to="/jbpt#home">
          <img src="/images/icon1.jpg" alt="" class="max-w-[200px] w-full object-contain" />
        </NuxtLink>
      </div>
      <div class="bg-secondary bg-opacity-50 h-full flex items-center justify-center lg:py-[15%] py-10">
        <NuxtLink to="/fantasy#hero">
          <img src="/images/icon2.png" alt="" class="max-w-[300px] w-full object-contain" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'fullHeight',
})
</script>

<style scoped>
.h-dvh {
  height: 100vh;
}

video {
  pointer-events: none;
  /* Prevent interactions with videos */
}
</style>
