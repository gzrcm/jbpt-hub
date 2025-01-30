<template>
<div class="bg-black pb-20">
  <div class="container  relative z-10">
    <h2 class="text-white text-4xl font-bold py-12 mt">
      How it works
    </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(card, index) in cardData" :key="card.title" class="bg-black p-6  hcard min-h-[300px] rounded-[16px]">
          <h2 class="text-5xl text-customRed text-center font-black" >
            {{ index + 1 }}
          </h2>
          <h3 class="text-2xl font-bold mt-7">{{ card.title }}</h3>
          <p class="text-xl font-medium mt-4">{{ card.description }}</p>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>
const cardData = [
  {
    title: 'A Complete Workout Programme?',
    description: 'Text I can edit and add to',
  },
  {
    title: 'With a Classic Fantasy Story',
    description: 'Text I can edit and add to',
  },
  {
    title: 'Ending Epic Boss Battles',
    description: 'Text I can edit and add to',
  },
  {
    title: 'Either Solo or with a Guild of Adventurers',
    description: 'Text I can edit and add to',
  },
];
</script>

<style scoped>
.hcard {
  background: linear-gradient(to bottom, #fff9c4, #fff59d);
}
</style>