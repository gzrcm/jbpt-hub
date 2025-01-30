<template>
  <div class="">
    <div class="bg-customRed py-[10%]">
      <div class="container ">
        <p class="text-white text-3xl font-black uppercase ">What my client say</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-white ">
          <div class="flex gap-3 text-center flex-col" v-for="(review, n) in reviews" :key="n">
            <p class="text-lg">
              {{ review.review }}
            </p>
            <p class=" font-black text-xl italic">
              -{{ review.name }}
            </p>
            <div class="flex gap-2 justify-center">
              <IconsStart v-for="n in 5" :key="n" class="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const reviews = [
  {
    name: "Joe Blogs",
    review: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w"
  },
  {
    name: "ally Miggs",
    review: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w"
  },
  {
    name: "Jack Black",
    review: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w"
  },
];


</script>