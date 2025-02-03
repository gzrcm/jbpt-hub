<template>
  <div class="">
    <div class="grid lg:grid-cols-5">
      <div class="min-w-0 lg:col-span-2 h-full">
        <swiper class="mySwiper h-full">
          <swiper-slide v-for="n in 5" :key="n" class="relative h-full pb-[100%] sm:pb-[80%] lg:pb-0">
            <img src="/images/Picture1.jpg" alt="" class="w-full h-full object-cover absolute top-0 left-0" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="lg:col-span-3 bg-[#595959] pt-[10%] pb-[8%] px-[5%] text-white">
        <p class="text-xl text-left leading-relaxed">
          <span class="font-bold">Hi, I'm JB</span>
        </p>

        <p class="leading-relaxed mt-4">
          I know what it’s like to feel stuck—like you’re trapped in a cycle that seems impossible to break.
        </p>
        
        <p class="leading-relaxed mt-4">
          I used to be someone who struggled with my health every single day. I was battling <span class="highlight">low energy</span>, <span class="highlight">obesity</span>, <span class="highlight">skin problems</span>, <span class="highlight">mental health challenges</span>, <span class="highlight">body image issues</span>, and a severe lack of <span class="highlight">self-esteem</span>. I’m sure some of this resonates with you.
        </p>
        
        <p class="leading-relaxed mt-4">
          For years, I made choices that led me further away from where I wanted to be. Unhealthy fad diets, exercise programs that didn’t suit me, and supplements that promised results but left me feeling empty. I focused on numbers—on the scale, on what others thought—while trying to go it alone.
        </p>

        <p class="leading-relaxed mt-4">
          None of it worked. But eventually, I found the truth. I discovered the right approach—one that was sustainable, realistic, and actually fit into my life. I learned how to:
        </p>

        <ul class="list-disc ml-8 mt-4">
          <li>Fuel my body with the right nutrition</li>
          <li>Build habits that support my goals</li>
          <li>Set goals that were actually attainable</li>
          <li>Create an exercise plan that made sense for my lifestyle</li>
          <li>Focus on long-term progress, not short-term fixes</li>
        </ul>

        <p class="leading-relaxed mt-4">
          What I truly needed all along was help. Now, I’m here to help you, too.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
  <!-- Item 1 -->
  <div class="flex gap-5">
    <div class="flex items-center">
      <!-- Font Awesome Icon 1 (replace with the icon you prefer) -->
      <i class="fa-solid fa-graduation-cap"></i>
      <p class="font-black text-2xl uppercase">Lv 3 Personal Trainer</p>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="flex gap-5">
    <div class="flex items-center">
      <!-- Font Awesome Icon 2 (replace with the icon you prefer) -->
      <i class="fa-solid fa-apple-whole"></i>
      <p class="font-black text-2xl uppercase">Lv 4 Sports Nutrition Advisor</p>
    </div>
  </div>

  <!-- Item 3 -->
  <div class="flex gap-5">
    <div class="flex items-center">
      <!-- Font Awesome Icon 3 (replace with the icon you prefer) -->
      <i class="fa-solid fa-dumbbell"></i>
      <p class="font-black text-2xl uppercase">CrossFit Level I Trainer</p>
    </div>
  </div>
</div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>