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
        <p class="text-xl text-center leading-relaxed">
          <span class="font-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p class="text-xl text-center mt-4 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div class="flex gap-5" v-for="n in 3" :key="n">
            <p class="font-black text-2xl uppercase">Icons</p>
            <p class="font-black text-2xl uppercase">qualification</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>