<template>
  <div class="h-[calc(100vh-70px)] overflow-hidden relative">
    <!-- Video container (behind content) -->
    <div class="absolute top-0 left-0 w-full h-full z-0">
      <video autoplay loop muted class="w-full h-full object-cover">
        <source src="/videos/video3.mp4">
        <p>Your browser does not support the video tag.</p>
      </video>
      <div class="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 text-sm z-10">
        Video by 565351409673614 / Vecteezy - <a href="https://www.vecteezy.com/video/54385993-a-painting-of-a-waterfall-in-the-mountains" class="text-blue-400" target="_blank">[Link]</a>
      </div>
    </div>
    
    <!-- Content container (on top of video) -->
    <div class="relative container max-w-[1440px] flex items-center justify-left h-full z-10">
      <div class="max-w-[400px] w-full text-white inline-flex flex-col gap-6">
        <h2 class="text-3xl font-black">What is Fantasy & Fitness?</h2>
        <p class="text-2xl font-light">Full workout programme to get you the results you want with fantasy to keep you
          motivated.</p>
        <div>
          <a href="https://www.patreon.com/c/fantasyandfitness" target="_blank">
            <button class="btn">Buy on Patreon</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
